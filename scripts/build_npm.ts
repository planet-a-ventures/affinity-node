// ex. scripts/build_npm.ts
import { build, emptyDir } from '@deno/dnt'
import { copy } from '@std/fs'

await emptyDir('./npm')

import packageJson from '../package.json' with { type: 'json' }
import ts from 'typescript'

const { name, description, license, repository, version } = packageJson

await copy('src/v1/tests/__snapshots__', 'npm/esm/v1/tests/__snapshots__', {
    overwrite: true,
})
await copy('src/v1/tests/fixtures', 'npm/esm/v1/tests/fixtures', {
    overwrite: true,
})

await build({
    entryPoints: ['./src/index.ts'],
    outDir: './npm',
    importMap: 'deno.jsonc',
    skipNpmInstall: true,
    skipSourceOutput: true,
    // due to: https://github.com/denoland/dnt/issues/254 tests are disabled for now
    test: false,
    scriptModule: false,
    shims: {
        // see JS docs for overview and more options
        deno: true,
    },
    rootTestDir: './src/v1/tests',
    filterDiagnostic(diagnostic: ts.Diagnostic) {
        if (
            diagnostic.file?.fileName.endsWith(
                'src/deps/jsr.io/@std/testing/0.225.0/snapshot.ts',
            )
        ) {
            // see https://github.com/denoland/deno_std/pull/4957
            return false // ignore all diagnostics in this file
        }
    },
    package: {
        name,
        version,
        description,
        license,
        repository,
        bugs: {
            url: 'https://github.com/planet-a-ventures/affinity-node/issues',
        },
    },
    postBuild() {
        // steps to run after building and before running the tests
        Deno.copyFileSync('LICENSE', 'npm/LICENSE')
        Deno.copyFileSync('README.md', 'npm/README.md')
    },
})
