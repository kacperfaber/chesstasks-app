export interface FriendRequest {
    id: number;
    createdAt: number;
    senderId: number;
    senderUserName: string;
    targetId: number;
    targetUserName: string;
}