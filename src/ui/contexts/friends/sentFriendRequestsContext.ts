import {createContext} from "react";
import {FriendRequest} from "../../../api/friends/friendRequest";

export const SentFriendRequestsContext = createContext<ContextHolder<Array<FriendRequest> | undefined>>({value: undefined, setValue: () => {}});