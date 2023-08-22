import {Friendship} from "../api/friends/friendship";

export function getFriendId(currentUserId: number, friend: Friendship): number {
    if (friend.userId == currentUserId) return friend.secondUserId;
    return friend.userId;
}