import {PlayCriteria} from "./ui/routes/play/playCriteria";

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

    Play: "/play/database/:database/themeId/:themeId",

    play(criteria: PlayCriteria) {
        return Links.Play.replace(":database", criteria.database ?? "undefined").replace(":themeId", criteria.themeId?.toString() ?? "undefined")
    }
}