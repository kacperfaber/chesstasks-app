import {HttpUtils} from "../httpUtils";
import {Config} from "../../config/config";
import {User} from "../user";

export class AuthenticationApi {
    public static authenticate(login: string, password: string): Promise<string> {
        const url = `${Config.apiUrl}/api/auth`;
        return HttpUtils.postWithoutTokenAsync<string>(url, {login, password});
    }

    public static current(token: string): Promise<User> {
        const url = `${Config.apiUrl}/api/auth/current`;
        return HttpUtils.getAsync(url, token);
    }

    public static revoke(token: string): Promise<void> {
        const url = `${Config.apiUrl}/api/auth/revoke`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }
}