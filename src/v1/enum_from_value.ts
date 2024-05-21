/**
 * Converts a value to the corresponding enum value (only works for string enums)
 * Borrowed from https://stackoverflow.com/questions/17380845
 * @param val The value to convert
 * @param _enum The enum to match against
 * @returns The enum value or undefined if no match was found
 */
export const enumFromValue = <T extends Record<string, string>>(
    val: unknown,
    _enum: T,
) => {
    const enumName = (Object.keys(_enum) as Array<keyof T>).find((k) =>
        _enum[k] === val
    )
    if (!enumName) {
        return undefined
    }
    return _enum[enumName]
}
