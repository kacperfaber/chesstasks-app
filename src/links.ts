import {SimplePlayCriteria} from "./ui/routes/play/simplePlayCriteria";
import {AdvancedPlayCriteria} from "./ui/routes/play/advanced/advancedPlayCriteria";
import {MobileFriendsScreenTabs} from "./ui/routes/friends/responsive/mobile/responsiveFriendsScreen";

export const Links = {
    Index: "/",
    Login: "/login",
    AllFriends: "/all-friends",
    AllFriendRequests: "/friend-requests",
    PublicUserById: "/public-user/by-id/:userId",
    Friends: "/friends/:screen",

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
        // TODO: Actually we calls another function, instead of refactor puzzleById in all places.
        return Links.playSimple({startFrom: puzzleId});
    },

    PuzzleHistory: "/puzzle-history",

    Settings: "/settings",

    AllThemes: "/themes/all",

    PlaySimple: "/play/database/:database/themeId/:themeId/startFrom/:startFrom",

    playSimple(criteria: SimplePlayCriteria | undefined) {
        return Links.PlaySimple
            .replace(":database", criteria?.database ?? "undefined")
            .replace(":themeId", criteria?.themeId?.toString() ?? "undefined")
            .replace(":startFrom", criteria?.startFrom?.toString() ?? "undefined")
    },

    playSimpleWithoutCriteria() {
        return Links.PlaySimple
            .replace(":database", "undefined")
            .replace(":themeId", "undefined");
    },

    PlayAdvanced: "/play-advanced/:themeIds/:from/:to",

    playAdvanced(criteria: AdvancedPlayCriteria): string {
        return Links.PlayAdvanced
            .replace(":themeIds", criteria.themeIds.length == 0 ? "_" : criteria.themeIds.join(","))
            .replace(":from", criteria.ranking.from.toString())
            .replace(":to", criteria.ranking.to.toString());
    },

    SearchAdvanced: "/play/search-advanced",

    OnlyMobile: {
        Menu: "/only-mobile/menu"
    },

    friends(screen: MobileFriendsScreenTabs | null): string {
        return Links.Friends.replace(":screen", screen ?? "_");
    },

    Admin: {
        ManageUsers: "/admin/manage-users",
        ManagePuzzles: "/admin/manage-puzzles",

        managePuzzles(): string {
            return Links.Admin.ManagePuzzles;
        },

        manageUsers(): string {
            return Links.Admin.ManageUsers;
        }
    }
}