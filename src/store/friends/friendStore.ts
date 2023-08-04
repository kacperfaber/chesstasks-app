import {Friendship} from "../../api/friends/friendship";
import {FriendRequest} from "../../api/friends/friendRequest";

export class FriendStore {
    public static allFriends: Array<Friendship> | undefined = undefined;

    public static sentRequests: Array<FriendRequest> | undefined = undefined;

    public static receivedRequests: Array<FriendRequest> | undefined = undefined;

    public static setAllFriends(friends: Array<Friendship> | undefined) {
        FriendStore.allFriends = friends;
    }

    public static setSentRequests(sentRequests: Array<FriendRequest> | undefined) {
        FriendStore.sentRequests = sentRequests;
    }

    public static setReceivedRequests(receivedRequests: Array<FriendRequest> | undefined) {
        FriendStore.receivedRequests = receivedRequests;
    }
}