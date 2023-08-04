import {createContext} from "react";
import {User} from "../../../api/user";

export const CurrentUserContext = createContext<User | undefined>(undefined);