// ex. scripts/build_npm.ts
import { build, emptyDir } from '@deno/dnt'

await emptyDir('./npm')

import packageJson from '../package.json' with { type: 'json' }

const { name, description, license, repository } = packageJson

await build({
    entryPoints: ['./src/index.ts'],
    outDir: './npm',
    shims: {
        // see JS docs for overview and more options
        deno: true,
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
    },
    postBuild() {
        // steps to run after building and before running the tests
        Deno.copyFileSync('LICENSE', 'npm/LICENSE')
        Deno.copyFileSync('README.md', 'npm/README.md')
    },
})
