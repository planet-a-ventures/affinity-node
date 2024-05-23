import { readKeypressSync } from 'https://deno.land/x/keypress@0.0.11/mod.ts'
import { isLiveRun } from './env.ts'

Deno.test({
    name: 'live run prompt',
    ignore: !isLiveRun(),
    fn: () => {
        console.warn(
            'Running live tests, with an actual API key. Your Affinity instance may be mutated. Press Enter to continue. Ctrl+C to abort. If you have --parallel enabled, it might need multiple attempts',
        )
    
        for (const keypress of readKeypressSync()) {
            if (keypress.key === 'return') {
                return
            }
            if (keypress.ctrlKey && keypress.key === 'c') {
                Deno.exit(0)
            }
        }
}
});