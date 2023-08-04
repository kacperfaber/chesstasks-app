import {createContext} from "react";
import {FriendRequest} from "../../../api/friends/friendRequest";

export const ReceivedFriendRequestsContext = createContext<Array<FriendRequest> | undefined>(undefined);