import {SimpleUser} from "../simpleUser";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {Token} from "../../storage/token/tokenStorage";
import {PublicUser} from "./publicUser";

export class UserApi {
    public static search(query: string, token: Token): Promise<Array<SimpleUser>> {
        const url = `${Config.apiUrl}/api/user/search/by-username?query=${query}`;
        return HttpUtils.getAsync(url, token);
    }

    public static byId(id: number, token: Token): Promise<PublicUser> {
        const url = `${Config.apiUrl}/api/user/by-id/${id}`;
        return HttpUtils.getAsync(url, token);
    }
}