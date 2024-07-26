import {
    InteractionDate,
    InteractionDateKey,
    InteractionDateResponse,
    InteractionDateResponseBase,
    InteractionDateResponseRaw,
    InteractionType,
} from './organizations.ts'

/**
 * @hidden
 */

export function transformInteractionDateResponseRaw<
    T extends InteractionDateResponseRaw,
    U = Omit<T, keyof InteractionDateResponseBase> & InteractionDateResponse,
>(
    entityWithInteractions: T,
): U {
    const { interaction_dates, interactions, ...rest } = entityWithInteractions
    const dates: InteractionDateResponse = {}
    if (interaction_dates) {
        dates.interaction_dates = Object.fromEntries(
            Object.entries(interaction_dates).map(
                ([key, value]) => [
                    key,
                    value ? new Date(value) : null,
                ],
            ),
        ) as Record<InteractionDateKey, Date>
    }
    if (interactions) {
        dates.interactions = Object.fromEntries(
            Object.entries(interactions).map(
                ([key, value]) => [
                    key,
                    value
                        ? {
                            ...value,
                            date: new Date(value.date),
                        }
                        : null,
                ],
            ),
        ) as Record<InteractionType, InteractionDate>
    }

    // TODO(@joscha): fix the types so we don't need to cast here
    return { ...rest, ...dates } as unknown as U
}
