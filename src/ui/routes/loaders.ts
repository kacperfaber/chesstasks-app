import {AdvancedPlayCriteria} from "./play/advanced/advancedPlayCriteria";

export function userIdLoader({params}: {params: any}) {
    return {userId: params.userId};
}

export function puzzleIdLoader({params}: {params: any}) {
    return {puzzleId: params.puzzleId};
}

export function playCriteriaLoader({params}: {params: any}) {
    return {themeId: params.themeId == "undefined" ? undefined : params.themeId, database: params.database == "undefined" ? undefined : params.database};
}

export function advancedCriteriaLoader({params}: {params: any}): AdvancedPlayCriteria {
    const themeIds = params.themeIds == "_" ? [] as number[] : (params.themeIds as string).split(",").map(x => parseInt(x))

    return {
        themeIds: themeIds,
        ranking: {
            from: params.from,
            to: params.to
        }
    }
}