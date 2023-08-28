import {SimplePlayCriteria} from "./ui/routes/play/simplePlayCriteria";
import {AdvancedPlayCriteria} from "./ui/routes/play/advanced/advancedPlayCriteria";

export const Links = {
    Index: "/",
    Login: "/login",
    AllFriends: "/friends",
    AllFriendRequests: "/friend-requests",
    PublicUserById: "/public-user/by-id/:userId",

    publicUserById(id: number): string {
        return Links.PublicUserById.replace(":userId", id.toString());
    },

    SearchUser: "/search-user",

    PuzzleHistoryByUserId: "/public-user/puzzle-history/:userId",

    puzzleHistoryByUserId(userId: number): string {
        return Links.PuzzleHistoryByUserId.replace(":userId", userId.toString());
    },

    PuzzleById: "/puzzle/:puzzleId",

    puzzleById(puzzleId: number): string {
        return Links.PuzzleById.replace(":puzzleId", puzzleId.toString());
    },

    PuzzleHistory: "/puzzle-history",

    Settings: "/settings",

    AllThemes: "/themes/all",

    PlaySimple: "/play/database/:database/themeId/:themeId",

    playSimple(criteria: SimplePlayCriteria) {
        return Links.PlaySimple.replace(":database", criteria.database ?? "undefined").replace(":themeId", criteria.themeId?.toString() ?? "undefined")
    },

    playSimpleWithoutCriteria() {
        return Links.PlaySimple
            .replace(":database", "undefined")
            .replace(":themeId", "undefined");
    },

    PlayAdvanced: "/play-advanced/:themeIds/:from/:to",

    playAdvanced(criteria: AdvancedPlayCriteria): string {
        return Links.PlayAdvanced
            .replace(":themeIds", criteria.themeIds.join(","))
            .replace(":from", criteria.ranking.from.toString())
            .replace(":to", criteria.ranking.to.toString());
    },

    SearchAdvanced: "/play/search-advanced"
}