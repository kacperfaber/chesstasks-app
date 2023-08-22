export const Links = {
    Index: "/",
    Login: "/login",
    AllFriends: "/friends",
    AllFriendRequests: "/friend-requests",
    PublicUserById: "/public-user/by-id/:userId",

    publicUserById(id: number): string {
        return Links.PublicUserById.replace(":userId", id.toString());
    }
}