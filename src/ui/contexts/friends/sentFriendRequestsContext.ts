import {createContext} from "react";
import {FriendRequest} from "../../../api/friends/friendRequest";

export const SentFriendRequestsContext = createContext<Array<FriendRequest> | undefined>(undefined);