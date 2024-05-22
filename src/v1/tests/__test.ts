import { readKeypressSync } from 'https://deno.land/x/keypress@0.0.11/mod.ts'
import { isLiveRun } from './env.ts'

if (isLiveRun()) {
    console.warn(
        'Running live tests, with an actual API key. Your Affinity instance may be mutated. Press Enter to continue. Ctrl+C to abort.'
    )

    for (const keypress of readKeypressSync()) {
        if (keypress.key === 'enter') {
            continue
        }

        if (keypress.ctrlKey && keypress.key === 'c') {
            Deno.exit(0)
        }
    }
}
