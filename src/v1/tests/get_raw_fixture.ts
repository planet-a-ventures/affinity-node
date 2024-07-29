import * as path from '@std/path'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

export async function getRawFixture(filePath: string) {
    return await Deno.readTextFile(path.join(__dirname, 'fixtures', filePath))
}

export async function readFixtureFile(filePath: string) {
    return await Deno.readFile(path.join(__dirname, 'fixtures', filePath))
}
