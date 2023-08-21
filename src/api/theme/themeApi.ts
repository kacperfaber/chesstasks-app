import {Theme} from "./theme";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {Token} from "../../storage/token/tokenStorage";

export class ThemeApi {
    public static async getAllThemes(token: Token): Promise<Array<Theme>> {
        const url = `${Config.apiUrl}/api/theme/all`;
        return HttpUtils.getAsync<Array<Theme>>(url, token);
    }
}