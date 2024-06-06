export class AffinityApiError extends Error {
    constructor(public readonly statusCode: number, message?: string) {
        super(
            message ||
                'An error occurred while communicating with the Affinity API.',
        )
    }
}
