import { MaybeNullOrUndefined } from "./types";

function isDefinedAndNotNull<T>(data: MaybeNullOrUndefined<T>): data is T {
    return data !== undefined && data !== null;
}

export function checkDataIsDefinedAndNotNull<T>(data: MaybeNullOrUndefined<T>): T {
    if (!isDefinedAndNotNull(data)) {
        throw new Error(`Data is undefined or null : ${data}`);
    }
    return data;
}