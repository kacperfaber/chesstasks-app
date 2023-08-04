import {createContext} from "react";
import {Friendship} from "../../../api/friends/friendship";

export const AllFriendContext = createContext<Array<Friendship> | undefined>(undefined);