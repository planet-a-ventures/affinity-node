import type { ListEntryReferenceRaw } from './list_entries.ts'
import { ListEntryReference } from './organizations.ts'

export function transformListEntryReference<
    T extends ListEntryReferenceRaw,
    U extends ListEntryReference,
>(ref: T): U {
    return {
        ...ref,
        created_at: new Date(ref.created_at),
    } as U
}
