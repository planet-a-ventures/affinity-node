// ex. scripts/build_npm.ts
import { build, emptyDir, type LibName } from '@deno/dnt'
import { parse } from '@std/jsonc'
import ts from 'typescript'

await emptyDir('./npm')

import packageJson from '../package.json' with { type: 'json' }

// assumption is for this to be executed from git root
const tsconfig = parse(Deno.readTextFileSync('./tsconfig.json'))
const { name, description, license, repository } = packageJson

await build({
    entryPoints: ['./src/index.ts', {
        name: './v1',
        path: './src/v1/index.ts',
    }],
    declaration: 'separate',
    outDir: './npm',
    importMap: 'deno.jsonc',
    skipNpmInstall: false,
    skipSourceOutput: true,
    // due to: https://github.com/denoland/dnt/issues/254 tests are disabled for now
    test: false,
    scriptModule: false,
    shims: {
        // see JS docs for overview and more options
        deno: false,
        undici: true,
    },
    rootTestDir: './src/v1/tests',
    filterDiagnostic(diagnostic: ts.Diagnostic) {
        if (
            diagnostic.file?.fileName.endsWith(
                'src/v2/generated/http/http.ts',
            )
        ) {
            return false // ignore all diagnostics in this file
        }
        return true
    },
    compilerOptions: {
        lib: tsconfig.compilerOptions.lib as LibName[],
    },
    package: {
        name,
        version: Deno.args[0],
        description,
        license,
        repository,
        bugs: {
            url: 'https://github.com/planet-a-ventures/affinity-node/issues',
        },
        scripts: {},
        private: false,
        publishConfig: {
            access: 'public',
        },
        keywords: ['affinity', 'crm', 'node', 'api', 'sdk'],
        engines: {
            node: '>=20',
        },
    },
    postBuild() {
        // steps to run after building and before running the tests
        Deno.copyFileSync('LICENSE', 'npm/LICENSE')
        Deno.copyFileSync('README.md', 'npm/README.md')
    },
})

await Deno.writeTextFile(
    'npm/.npmignore',
    '**/tests/**',
    { append: true },
)

await Deno.writeTextFile(
    'npm/.npmrc',
    `
//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
`,
)
