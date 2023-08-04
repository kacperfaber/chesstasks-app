import {Friendship} from "../../api/friends/friendship";
import {FriendApi} from "../../api/friends/friendApi";
import {FriendStore} from "../../store/friends/friendStore";
import {FriendRequest} from "../../api/friends/friendRequest";
import {TokenStorage} from "../../storage/token/tokenStorage";

export class FriendService {
    /**
     * @remember Always in then, refresh your context.
     */
    public static async getAllFriends(refresh: boolean = false): Promise<Array<Friendship>> {
        if (!FriendStore.allFriends || refresh) {
            return this.fetchAllFriends();
        }

        return FriendStore.allFriends;
    }

    public static async fetchAllFriends(): Promise<Array<Friendship>> {
        const friends = await FriendApi.getAllFriends(TokenStorage.getToken() !!);
        FriendStore.setAllFriends(friends);
        return friends;
    }

    public static async getSentRequests(refresh: boolean = false): Promise<Array<FriendRequest>> {
        if (!FriendStore.sentRequests || refresh) {
            return FriendService.fetchSentRequests();
        }

        return FriendStore.sentRequests;
    }

    public static async fetchSentRequests(): Promise<Array<FriendRequest>> {
        const sentRequests = await FriendApi.getSentFriendRequests(TokenStorage.getToken() !!);
        FriendStore.setSentRequests(sentRequests);
        return sentRequests;
    }

    public static async getReceivedRequests(refresh: boolean = false): Promise<Array<FriendRequest>> {
        if (!FriendStore.receivedRequests || refresh) {
            return FriendService.fetchReceivedRequests();
        }

        return FriendStore.receivedRequests;
    }

    public static async fetchReceivedRequests(): Promise<Array<FriendRequest>> {
        const receivedRequests = await FriendApi.getReceivedFriendRequests(TokenStorage.getToken() !!);
        FriendStore.setReceivedRequests(receivedRequests);
        return receivedRequests;
    }
}