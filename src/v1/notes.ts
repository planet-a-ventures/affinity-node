import { AxiosInstance } from 'axios'
import { DateTime, Replace, RequireOnlyOne } from './types.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import { PagedRequest } from './paged_request.ts'
import { PagedResponse } from './paged_response.ts'
import { notesUrl } from './urls.ts'
import { createSearchIteratorFn } from './create_search_iterator_fn.ts'

export enum NoteType {
    PLAIN_TEXT = 0,
    HTML = 2,
    /**
     * Can only be created by the Notetaker AI tool from Affinity.
     */
    AI_SUMMARY = 3,
    /**
     * @deprecated
     */
    EMAIL = 1,
}

/**
 * A note object contains content, which is a string containing the note body. In addition, a note can be associated with multiple people, organizations, or opportunities. Each person, organization, or opportunity will display linked notes on their profiles.
 */
export type NoteRaw = {
    /**
     * The unique identifier of the note object.
     */
    id: number
    /**
     * The unique identifier of the person object who created the note.
     */
    creator_id: number
    /**
     * An array containing the unique identifiers for all the persons relevant to the note. This is the union of {@link Note.associated_person_ids} and {@link Note.interaction_person_ids}.
     */
    person_ids: number[]
    /**
     * An array containing the unique identifiers for the persons directly associated with the note.
     */
    associated_person_ids: number[]
    /**
     * An array containing the unique identifiers for the persons on the interaction the note is attached to, if any. This will be an empty array if there is no such interaction or there aren’t any attendees.
     */
    interaction_person_ids: number[]
    /**
     * The unique identifier of the interaction the note is attached to, if any.
     */
    interaction_id: number | null
    /**
     * The type of the interaction the note is attached to, if any.
     */
    interaction_type: number | null
    /**
     * True if the note is attached to a meeting or a call.
     */
    is_meeting: boolean
    /**
     * An array containing the unique identifiers for the persons who are @ mentioned in the note. If there are no mentioned persons, this will be an empty array.
     */
    mentioned_person_ids: number[]
    /**
     * An array of unique identifiers of organization objects that are associated with the note.
     */
    organization_ids: number[]
    /**
     * An array of unique identifiers of opportunity objects that are associated with the note.
     */
    opportunity_ids: number[]
    /**
     * The unique identifier of the note that this note is a reply to. If this field is null, the note is not a reply. Note replies will never have values for opportunity_ids, person_ids, and organization_ids. Only the parent note is associated with an entity. You can fetch the parent note resource to identify the root entity.
     */
    parent_id: number | null
    /**
     * The string containing the content of the note.
     */
    content: string
    /**
     * The type of the note.
     */
    type: NoteType
    /**
     * The string representing the time when the note was created.
     */
    created_at: DateTime
    /**
     * The string representing the last time the note was updated.
     */
    updated_at: DateTime | null
}

type Note = Replace<NoteRaw, {
    created_at: Date
    updated_at: Date | null
}>

type AllNotesRequest =
    | PagedRequest
    | (
        & PagedRequest
        & RequireOnlyOne<{
            /**
             * A unique identifier that represents a Person that was tagged in the retrieved notes.
             */
            person_id: number
            /**
             * A unique identifier that represents an Organization that was tagged in the retrieved notes.
             */
            organization_id: number
            /**
             * A unique identifier that represents an Opportunity that was tagged in the retrieved notes.
             */
            opportunity_id: number
            /**
             * A unique identifier that represents an Affinity user whose created notes should be retrieved.
             */
            creator_id: number
        }>
    )

type PagedNotesResponseRaw =
    & {
        notes: NoteRaw[]
    }
    & PagedResponse

type PagedNotesResponse = Replace<{ notes: Note[] }, PagedNotesResponseRaw>

/**
 * Entity files are files uploaded to a relevant entity.
 * Possible files, for example, would be a pitch deck for an opportunity or a physical mail correspondence for a person.
 */
export class Notes {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static transformNote(note: NoteRaw): Note {
        return {
            ...note,
            created_at: new Date(note.created_at),
            updated_at: note.updated_at ? new Date(note.updated_at) : null,
        }
    }

    /**
     * Returns all notes attached to a person, organization or opportunity.
     */
    async all(params?: AllNotesRequest): Promise<PagedNotesResponse> {
        const response = await this.axios.get<PagedNotesResponse>(
            notesUrl(),
            {
                params,
                transformResponse: [
                    ...defaultTransformers(),
                    (json: PagedNotesResponseRaw) => {
                        return {
                            ...json,
                            notes: json.notes.map(Notes.transformNote),
                        }
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Returns an async iterator that yields all notes matching the given request
     * Each yielded array contains up to the number specified in {@link AllEntityFileRequest.page_size} of notes.
     * Use this method if you want to process the notes in a streaming fashion.
     *
     * *Please note:* the yielded notes array may be empty on the last page.
     *
     * @example
     * ```typescript
     * let page = 0
     * for await (const entries of affinity.notes.pagedIterator({
     *     person_id: 123,
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    pagedIterator = createSearchIteratorFn(
        this.all.bind(this),
        'notes',
    )
}
