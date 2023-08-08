import {createContext} from "react";
import {FriendRequest} from "../../../api/friends/friendRequest";

export const ReceivedFriendRequestsContext = createContext<ContextHolder<Array<FriendRequest> | undefined>>({value: undefined, setValue: () => {}});