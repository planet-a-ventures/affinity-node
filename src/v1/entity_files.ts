import { assert } from '@std/assert'
import type { AxiosInstance } from 'axios'
import { fileFrom } from 'fetch-blob/from.js'
import type { Readable } from 'node:stream'
import { defaultTransformers } from './axios_default_transformers.ts'
import { createSearchIteratorFn } from './create_search_iterator_fn.ts'
import { EntityRequestFilter } from './field_value_changes.ts'
import type { PagedRequest } from './paged_request.ts'
import type { PagedResponse } from './paged_response.ts'
import type { DateTime, Replace, RequireOnlyOne } from './types.ts'
import { entityFilesUrl } from './urls.ts'
export type { DateTime } from './types.ts'

export type EntityFileRaw = {
    /** The unique identifier of the entity file object. */
    id: number
    /** The name of the file. */
    name: string
    /** The size of the file in bytes. */
    size: number
    /** The unique identifier of the person corresponding to the entity file. */
    person_id: number | null
    /** The unique identifier of the organization corresponding to the entity file. */
    organization_id: number | null
    /** The unique identifier of the opportunity corresponding to the entity file. */
    opportunity_id: number | null
    /** The unique identifier of the user who created the entity file. */
    uploader_id: number
    /** The time when the entity file was created. */
    created_at: DateTime
}

export type EntityFile = Replace<EntityFileRaw, {
    created_at: Date
}>

/**
 * Represents the request parameters for retrieving entity files.
 */
export type AllEntityFileRequest =
    & {
        /**
         * A unique ID that represents a Person whose associated files should be retrieved.
         */
        person_id?: number
        /**
         * A unique ID that represents an Organization whose associated files should be retrieved.
         */
        organization_id?: number
        /**
         * A unique ID that represents an Opportunity whose associated files should be retrieved.
         */
        opportunity_id?: number
    }
    & PagedRequest

export type PagedEntityFileResponseRaw =
    & {
        entity_files: EntityFileRaw[]
    }
    & PagedResponse

export type PagedEntityFileResponse = Replace<PagedEntityFileResponseRaw, {
    entity_files: EntityFile[]
}>

export type SupportedFileType = File | string

export type UploadEntityFileRequest =
    & {
        files: SupportedFileType[]
    }
    & RequireOnlyOne<EntityRequestFilter, keyof EntityRequestFilter>

/**
 * Entity files are files uploaded to a relevant entity.
 * Possible files, for example, would be a pitch deck for an opportunity or a physical mail correspondence for a person.
 */
export class EntityFiles {
    /** @hidden */
    constructor(private readonly axios: AxiosInstance) {
    }

    private static transformEntityFile(file: EntityFileRaw): EntityFile {
        return {
            ...file,
            created_at: new Date(file.created_at),
        }
    }

    /**
     * Returns all entity files within your organization.
     */
    async all(params?: AllEntityFileRequest): Promise<PagedEntityFileResponse> {
        const response = await this.axios.get<PagedEntityFileResponse>(
            entityFilesUrl(),
            {
                params,
                transformResponse: [
                    ...defaultTransformers(),
                    (json: PagedEntityFileResponseRaw) => {
                        return {
                            ...json,
                            entity_files: json.entity_files.map(
                                EntityFiles.transformEntityFile,
                            ),
                        }
                    },
                ],
            },
        )
        return response.data
    }

    /**
     * Returns an async iterator that yields all entity files matching the given request
     * Each yielded array contains up to the number specified in {@link AllEntityFileRequest.page_size} of entity files.
     * Use this method if you want to process the entity files in a streaming fashion.
     *
     * *Please note:* the yielded entity files array may be empty on the last page.
     *
     * @example
     * ```typescript
     * let page = 0
     * for await (const entries of affinity.entityFiles.pagedIterator({
     *     person_id: 123,
     *     page_size: 10
     * })) {
     *     console.log(`Page ${++page} of entries:`, entries)
     * }
     * ```
     */
    pagedIterator = createSearchIteratorFn(
        this.all.bind(this),
        'entity_files',
    )

    /**
     * Fetches an entity with a specified `entity_file_id`.
     */
    async get(entity_file_id: EntityFile['id']): Promise<EntityFile> {
        const response = await this.axios.get<EntityFile>(
            entityFilesUrl(entity_file_id),
            {
                transformResponse: [
                    ...defaultTransformers(),
                    EntityFiles.transformEntityFile,
                ],
            },
        )
        return response.data
    }

    /**
     * Downloads the entity file with the specified `entity_file_id`.
     *
     * @example
     * ```typescript
     * import { promises as fsPromises } from 'node:fs';
     * const fileResponseStream = affinity.entityFiles.download(123);
     * await fsPromises.writeFile(filePath, fileResponseStream);
     * ```
     */
    async download(entity_file_id: EntityFile['id']): Promise<Readable> {
        const response = await this.axios.get(
            entityFilesUrl(entity_file_id, true),
            {
                responseType: 'stream',
                // The download location of entity files is provided via a redirect from Affinity
                maxRedirects: 5,
            },
        )
        return response.data
    }

    /**
     * Uploads files attached to the entity with the given id.
     *
     * The file will display on the entity's profile, provided that the entity is not a person internal to the user's organization.
     *
     * @example
     * ```typescript
     * const file = fs.createReadStream('example.pdf');
     * const entityFile = await affinity.entityFiles.upload({
     *     files: [file],
     *     person_id: 123,
     * });
     * ```
     */
    async upload(params: UploadEntityFileRequest): Promise<boolean> {
        const formData = new FormData()
        const { files } = params
        assert(files.length, 'At least one file must be provided')

        if (params.person_id) {
            formData.append('person_id', params.person_id.toString())
        } else if (params.organization_id) {
            formData.append(
                'organization_id',
                params.organization_id.toString(),
            )
        } else if (params.opportunity_id) {
            formData.append('opportunity_id', params.opportunity_id.toString())
        } else {
            throw new Error(
                'One of person_id, organization_id or opportunity_id must be provided',
            )
        }

        await Promise.all(
            files.map((file) => appendToFormData(formData, file)),
        )
        const response = await this.axios.post<{ success: boolean }>(
            entityFilesUrl(),
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        )
        return response.data.success === true
    }
}

function isFile(file: unknown): file is File {
    return file instanceof File
}

async function appendToFormData(
    formData: FormData,
    file: SupportedFileType,
) {
    if (typeof file === 'string') {
        const f = await fileFrom(file)
        formData.append('files[]', f)
    } else if (isFile(file)) {
        formData.append('files[]', file)
        return null
    } else {
        throw new Error('Unsupported file type')
    }
}
