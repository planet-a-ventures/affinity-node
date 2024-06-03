/**
 * The type of person.
 */
export enum PersonType {
    /**
     * Default value. All people that your team has spoken with externally have this type.
     */
    EXTERNAL = 0,
    /**
     * All people on your team that have Affinity accounts will have this type.
     */
    INTERNAL = 1,
}

export type Person = {
    id: number
}
