/**
 * This is a date string in the format ISO 8601
 */
export type DateTime = string & { _datetimeBrand: never }

export type Replace<S, T> = Omit<S, keyof T> & T
