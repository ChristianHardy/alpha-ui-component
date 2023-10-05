export function mergeObjects<T extends object>(...objects: Partial<T>[]): T {
    const result = {} as Record<keyof T, any>;
    for (const obj of objects) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null) {
                result[key as keyof T] = mergeObjects(
                    result[key as keyof T] || {},
                    value
                );
            } else {
                result[key as keyof T] = value;
            }
        }
    }
    return result as T;
}
