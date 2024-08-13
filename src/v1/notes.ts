import type { AxiosInstance } from 'axios'
import type {
    DateTime,
    Replace,
    RequireAtLeastOne,
    RequireOnlyOne,
} from './types.ts'
import { defaultTransformers } from './axios_default_transformers.ts'
import type { PagedRequest } from './paged_request.ts'
import type { PagedResponse } from './paged_response.ts'
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

export type CreateNoteRequest =
    & {
        /**
         * The string containing the content of the new note. See [formatting options](https://api-docs.affinity.co/#formatting-content-as-html) for HTML support.
         */
        content: string

        /**
         * The type of the new note. Defaults to 0. The types 0 and 2 represent plain text and HTML notes, respectively. If submitting as HTML, see the [formatting options](https://api-docs.affinity.co/#formatting-content-as-html).
         */
        type?: NoteType

        /**
         * The ID of a Person resource who should be recorded as the author of the note. Must be a person who can access Affinity. If not provided the creator defaults to the owner of the API key.
         */
        creator_id?: number

        /**
         * The creation time to be recorded for the note. If not provided, defaults to the current time. Does not support times in the future.
         */
        created_at?: Date
    }
    & (
        | {
            /**
             * The unique identifier of the note to which the newly created note should reply.
             */
            parent_id: number
        }
        | RequireAtLeastOne<{
            /**
             * An array of unique identifiers of person objects that are associated with the new note.
             */
            person_ids: number[]
            /**
             * An array of unique identifiers of organization objects that are associated with the new note.
             */
            organization_ids: number[]
            /**
             * An array of unique identifiers of opportunity objects that are associated with the new note.
             */
            opportunity_ids: number[]
        }>
    )

export type CreateNoteRequestRaw = Replace<CreateNoteRequest, {
    created_at?: DateTime
}>

export type Note = Replace<NoteRaw, {
    created_at: Date
    updated_at: Date | null
}>

export type AllNotesRequest =
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

export type NoteReference = {
    /** The unique ID of the note */
    note_id: number
}

export type GetNoteRequest = NoteReference
export type SingleNoteResponseRaw = NoteRaw
export type SingleNoteResponse = Note

export type UpdateNoteRequest =
    & NoteReference
    & Pick<CreateNoteRequest, 'content'>

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
     * Fetches a note with a specified `note_id`.
     *
     * @returns The Note object corresponding to the `note_id`.
     *
     * @example
     * ```typescript
     * const note = await affinity.notes.get({
     *     note_id: 12345
     * })
     * console.log(note)
     * ```
     */
    async get(
        params: GetNoteRequest,
    ): Promise<SingleNoteResponse> {
        const { note_id, ...rest } = params
        const response = await this.axios.get<SingleNoteResponse>(
            notesUrl(note_id),
            {
                params: rest,
                transformResponse: [
                    ...defaultTransformers(),
                    Notes.transformNote,
                ],
            },
        )
        return response.data
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

    /**
     * Creates a new note with the supplied parameters.
     *
     * Set the `type` parameter to 2 to create an HTML note.
     * See [here](https://support.affinity.co/hc/en-us/articles/360016292631-Rich-text-formatting-for-notes-within-Affinity) for more information on the sorts of rich text formatting we support in notes.
     * Please note that `<a>` tags aren't currently clickable inside the Affinity web app - though full links are.
     *
     * It is possible to create a **reply** to an existing note by setting `parent_id`.
     * The parent note should not have a `parent_id` itself.
     * It is possible for a single parent note to have multiple reply notes - They just get displayed in order of creation. `opportunity_ids`, `person_ids`, and `organization_ids` will be ignored when a `parent_id` is provided.
     *
     * @example
     * ```typescript
     * const newNote = await affinity.notes.create({
     *     person_ids: [
     *         38706,
     *         624289
     *     ],
     *     organization_ids: [
     *         120611418
     *     ],
     *     opportunity_ids: [
     *         167
     *     ],
     *     content: "Had a lunch meeting with Jane and John today. They want to invest in Acme Corp."
     *  })
     * console.log(newNote)
     * ```
     */
    async create(
        data: CreateNoteRequest,
    ): Promise<SingleNoteResponse> {
        const { created_at, ...rest } = data

        const request: CreateNoteRequestRaw = created_at
            ? {
                ...rest,
                created_at: created_at.toISOString() as DateTime,
            }
            : rest

        const response = await this.axios.post<SingleNoteResponseRaw>(
            notesUrl(),
            request,
        )
        return Notes.transformNote(response.data)
    }

    /**
     * Updates an existing person with `note_id` with the supplied parameters.
     *
     * *Caveats:*
     * - You cannot update the content of a note that has mentions.
     * - You also cannot update the content of a note associated with an email.
     * - You cannot update the type of a note.
     *
     * @example
     * ```typescript
     * const updatedNote = await affinity.notes.update({
     *     note_id: 12345,
     *     content: "Dinner wasn't great, but the conversation was excellent.",
     * })
     * console.log(updatedNote)
     * ```
     */
    async update(
        data: UpdateNoteRequest,
    ): Promise<SingleNoteResponse> {
        const { note_id, ...rest } = data
        const response = await this.axios.put<SingleNoteResponseRaw>(
            notesUrl(note_id),
            rest,
        )
        return Notes.transformNote(response.data)
    }

    /**
     * Deletes a note with a specified `note_id`.
     * @returns true if the deletion was successful
     *
     * @example
     * ```typescript
     * const success = await affinity.notes.delete({
     *     note_id: 12345
     * })
     * console.log(success ? 'Note deleted': 'Note not deleted')
     * ```
     */
    async delete(request: NoteReference): Promise<boolean> {
        const { note_id } = request
        const response = await this.axios.delete<{ success: boolean }>(
            notesUrl(note_id),
        )
        return response.data.success === true
    }
}
