export function screenNotImplemented(screenName: string): () => never {
    return () => { throw new Error(`Screen ${screenName} is not implemented.`) }
}