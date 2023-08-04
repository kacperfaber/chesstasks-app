import {Friendship} from "./friendship";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {FriendRequest} from "./friendRequest";

// TODO: FriendApi is not tested.

export class FriendApi {
    // TODO: In the documentation there's no skip parameter, but I need to check it in server project.
    public static getAllFriends(token: string): Promise<Array<Friendship>> {
        const url = `${Config.apiUrl}/api/friend/all`;
        return HttpUtils.getAsync<Array<Friendship>>(url, token);
    }

    public static deleteFriend(friendshipId: number, token: string): Promise<void> {
        const url = `${Config.apiUrl}/api/friend/by-id/${friendshipId}`;
        return HttpUtils.deleteAsync(url, token);
    }

    public static sendFriendRequest(userId: number, token: string): Promise<FriendRequest> {
        const url = `${Config.apiUrl}/api/friend/requests`;
        return HttpUtils.putAsync(url, {userId}, token);
    }

    public static getReceivedFriendRequests(token: string, skip: number = 0): Promise<Array<FriendRequest>> {
        const url = `${Config.apiUrl}/api/friend/requests/received?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getSentFriendRequests(token: string, skip: number = 0): Promise<Array<FriendRequest>> {
        const url = `${Config.apiUrl}/api/friend/requests/sent?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }
}