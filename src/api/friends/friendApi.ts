import {Friendship} from "./friendship";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {FriendRequest} from "./friendRequest";
import {Token} from "../../storage/token/tokenStorage";

// TODO: FriendApi is not tested.

export class FriendApi {
    // TODO: In the documentation there's no skip parameter, but I need to check it in server project.
    public static getAllFriends(token: Token): Promise<Array<Friendship>> {
        const url = `${Config.apiUrl}/api/friend/all/include-user`;
        return HttpUtils.getAsync<Array<Friendship>>(url, token);
    }

    public static deleteFriend(friendshipId: number, token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/friend/by-id/${friendshipId}`;
        return HttpUtils.deleteAsync(url, token);
    }

    public static sendFriendRequest(userId: number, token: Token): Promise<FriendRequest> {
        const url = `${Config.apiUrl}/api/friend/requests`;
        return HttpUtils.putAsync(url, {userId}, token);
    }

    public static getReceivedFriendRequests(token: Token, skip: number = 0): Promise<Array<FriendRequest>> {
        const url = `${Config.apiUrl}/api/friend/requests/received/include-user?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getSentFriendRequests(token: Token, skip: number = 0): Promise<Array<FriendRequest>> {
        const url = `${Config.apiUrl}/api/friend/requests/sent/include-user?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static acceptFriendRequest(token: Token, senderId: number): Promise<Friendship> {
        const url = `${Config.apiUrl}/api/friend/request/by-sender-id/${senderId}/accept`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }

    public static rejectFriendRequest(token: Token, senderId: number): Promise<void> {
        const url = `${Config.apiUrl}/api/friend/request/by-sender-id/${senderId}/reject`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }
}