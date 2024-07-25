/**
 * This is a date string in the format ISO 8601
 */
export type DateTime = string & { _datetimeBrand: never }

export type Replace<S, T> = Omit<S, keyof T> & T

/**
 * Via https://stackoverflow.com/questions/40510611
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    & Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            & Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, never>>
    }[Keys]
