import {createContext} from "react";
import {Theme} from "../../../api/theme/theme";

export const AllThemeContext = createContext<Array<Theme> | undefined>(undefined);