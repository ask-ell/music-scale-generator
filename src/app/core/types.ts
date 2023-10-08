export type MaybeNull<T> = T | null;

export type MaybeUndefined<T> = T | undefined;

export type MaybeNullOrUndefined<T> = MaybeNull<MaybeUndefined<T>>;