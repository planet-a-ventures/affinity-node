export class AffinityApiError extends Error {
    constructor(message?: string) {
        super(
            message ||
                'An error occurred while communicating with the Affinity API.',
        )
    }
}
