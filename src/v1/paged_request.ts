// TODO(@joscha): see if we need to unify some of this with the `PagingParameters`.

export type PagedRequest = {
    /**
     * The number of items to return per page.
     *
     * Default is the maximum value of 500.
     */
    page_size?: number

    /**
     * The page token to retrieve the next page of items.
     * if you do not pass the `page_size` parameter, the next page will have the default page size of 500.
     */
    page_token?: string
}
