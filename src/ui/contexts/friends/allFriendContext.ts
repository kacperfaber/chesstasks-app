import {createContext} from "react";
import {Friendship} from "../../../api/friends/friendship";

export const AllFriendContext = createContext<ContextHolder<Array<Friendship>>>({
    value: undefined, setValue: () => {}
});