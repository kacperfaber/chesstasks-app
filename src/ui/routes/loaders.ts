export function userIdLoader({params}: {params: any}) {
    return {userId: params.userId};
}

export function puzzleIdLoader({params}: {params: any}) {
    return {puzzleId: params.puzzleId};
}