export function userIdLoader({params}: {params: any}) {
    return {userId: params.userId};
}

export function puzzleIdLoader({params}: {params: any}) {
    return {puzzleId: params.puzzleId};
}

export function playCriteriaLoader({params}: {params: any}) {
    return {themeId: params.themeId == "undefined" ? undefined : params.themeId, database: params.database == "undefined" ? undefined : params.database};
}