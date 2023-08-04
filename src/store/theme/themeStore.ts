import {Theme} from "../../api/theme/theme";

export class ThemeStore {
    public static allThemes: Array<Theme> | undefined = undefined;

    public static resetThemes() {
        ThemeStore.allThemes = undefined;
    }

    public static setThemes(themes: Array<Theme> | undefined) {
        ThemeStore.allThemes = themes;
    }
}