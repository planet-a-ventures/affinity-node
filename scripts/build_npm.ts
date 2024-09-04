import { build, emptyDir, type LibName } from '@deno/dnt'
import { parse } from '@std/jsonc'
import { dirname, join } from '@std/path'
import { expandGlob } from '@std/fs'
import ts from 'typescript'
import packageJson from '../package.json' with { type: 'json' }
import { assert } from '@std/assert'

// assumption is for this to be executed from git root
const tsconfig = parse(await Deno.readTextFile('./tsconfig.json'))
const { name, description, license, repository } = packageJson
const outDir = './npm'
const openapiSpecPath = './openapi/spec.json'

await emptyDir(outDir)
await Deno.mkdir(dirname(join(outDir, openapiSpecPath)))

let foundFiles = 0
for await (const jsonFile of expandGlob('./openapi/*.json')) {
    foundFiles++
    await Deno.copyFile(jsonFile.path, join(outDir, openapiSpecPath))
}
assert(
    foundFiles === 1,
    `Expected to find exactly one OpenAPI spec file; Found ${foundFiles}`,
)

await build({
    entryPoints: [
        './src/index.ts',
        {
            name: './v1',
            path: './src/v1/index.ts',
        },
        {
            name: './v2',
            path: './src/v2/index.ts',
        },
    ],
    declaration: 'separate',
    outDir,
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
    async postBuild() {
        // steps to run after building and before running the tests
        await Deno.copyFile('LICENSE', join(outDir, 'LICENSE'))
        await Deno.copyFile('README.md', join(outDir, 'README.md'))
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
