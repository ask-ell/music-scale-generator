function isDefinedAndNotNull<T>(data: T | undefined | null): data is T {
    return data !== undefined && data !== null;
}

export function checkDataIsDefinedAndNotNull<T>(data: T | undefined | null): T {
    if (!isDefinedAndNotNull(data)) {
        throw new Error(`Data is undefined or null : ${data}`);
    }
    return data;
}