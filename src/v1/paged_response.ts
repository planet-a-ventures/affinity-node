export type PagedResponse = {
    /**
     * The absence of a {@link PagedResponse.next_page_token} indicates that all the records have been fetched, though its presence does not necessarily indicate that there are more resources to be fetched.
     * The next page may be empty (but then {@link PagedResponse.next_page_token} would be `null` to confirm that there are no more resources).
     */
    next_page_token: string | null
}
