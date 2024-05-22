import * as path from '@std/path/mod.ts'
import { __dirname } from './all_test.ts'

export async function getRawFixture(filePath: string) {
    return await Deno.readTextFile(path.join(__dirname, 'fixtures', filePath))
}
