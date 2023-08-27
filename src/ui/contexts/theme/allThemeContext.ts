import {createContext} from "react";
import {Theme} from "../../../api/theme/theme";

export const AllThemeContext = createContext<ContextHolder<Array<Theme> | undefined>>({
    value: undefined,
    setValue: () => {
    }
});