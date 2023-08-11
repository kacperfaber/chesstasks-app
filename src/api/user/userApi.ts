import {SimpleUser} from "../simpleUser";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";

export class UserApi {
    public static search(query: string, token: string): Promise<Array<SimpleUser>> {
        const url = `${Config.apiUrl}/api/user/search/by-username?query=${query}`;
        return HttpUtils.getAsync(url, token);
    }
}