import {SimpleUser} from "../../api/simpleUser";
import {UserApi} from "../../api/user/userApi";
import {TokenStorage} from "../../storage/token/tokenStorage";

export class UserService {
    public static search(query: string): Promise<Array<SimpleUser>> {
        return UserApi.search(query, TokenStorage.getToken()!!);
    }
}