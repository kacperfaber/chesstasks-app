import {HttpUtils} from "../httpUtils";
import {Config} from "../../config/config";
import {User} from "../user";
import {Token} from "../../storage/token/tokenStorage";

export class AuthenticationApi {
    public static authenticate(login: string, password: string): Promise<Token> {
        const url = `${Config.apiUrl}/api/auth`;
        return HttpUtils.postWithoutTokenAsync<Token>(url, {login, password});
    }

    public static current(token: Token): Promise<User> {
        const url = `${Config.apiUrl}/api/auth/current`;
        return HttpUtils.getAsync(url, token);
    }

    public static revoke(token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/auth/revoke`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }
}