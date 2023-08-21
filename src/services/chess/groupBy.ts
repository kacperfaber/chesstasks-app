export function groupBy<T, K>(arr: Array<T>, getKey: (v: T) => K) {
    const groups = new Map<K, Array<T>>();

    for (let item of arr) {
        const itemKey = getKey(item);

        if (groups.has(itemKey)) {
            groups.get(itemKey)?.push(item);
        }

        else {
            groups.set(itemKey, [item]);
        }
    }

    return groups;
}

export function groupByMapped<T, K, T1>(arr: Array<T>, getKey: (v: T) => K, mapItem: (item: T) => T1): Map<K, T1[]> {
    const groups = new Map<K, Array<T1>>();

    for (let item of arr) {
        const itemKey = getKey(item);

        if (groups.has(itemKey)) {
            groups.get(itemKey)?.push(mapItem(item));
        }

        else {
            groups.set(itemKey, [mapItem(item)]);
        }
    }

    return groups;
}