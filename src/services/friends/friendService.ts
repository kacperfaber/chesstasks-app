import {Friendship} from "../../api/friends/friendship";
import {FriendApi} from "../../api/friends/friendApi";
import {FriendStore} from "../../store/friends/friendStore";

// TODO: there's no token storage.
const token = "";

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
        const friends = await FriendApi.getAllFriends(token);
        FriendStore.setAllFriends(friends);
        return friends;
    }
}