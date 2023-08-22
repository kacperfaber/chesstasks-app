import {SimpleUser} from "../../api/simpleUser";
import {UserApi} from "../../api/user/userApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {PublicUser} from "../../api/user/publicUser";

export class UserService {
    public static search(query: string): Promise<Array<SimpleUser>> {
        return UserApi.search(query, TokenStorage.getToken()!!);
    }

    public static getById(id: number): Promise<PublicUser> {
        return UserApi.byId(id, TokenStorage.getToken()!!);
    }
}