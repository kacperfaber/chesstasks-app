import {Friendship} from "../../api/friends/friendship";

export class FriendStore {
    public static allFriends: Array<Friendship> | undefined = undefined;

    public static setAllFriends(friends: Array<Friendship> | undefined) {
        FriendStore.allFriends = friends;
    }
}