import {ThemeApi} from "../../api/theme/themeApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {ThemeStore} from "../../store/theme/themeStore";

export class ThemeService {
    public static async fetchAllThemes() {
        const allThemes = await ThemeApi.getAllThemes(TokenStorage.getToken() !!)
        ThemeStore.setThemes(allThemes);
        return allThemes;
    }

    public static async getAllThemes(refresh: boolean = false) {
        if (!ThemeStore.allThemes || refresh) {
            return ThemeService.fetchAllThemes();
        }

        return ThemeStore.allThemes;
    }
}