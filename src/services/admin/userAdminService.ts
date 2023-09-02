import {AllUsersFiltered, RegisterAsAdmin, UserAdminApi} from "../../api/admin/user/userAdminApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {RegisterResult} from "../../api/register/registerResult";
import {User} from "../../api/user";

export class UserAdminService {
    public static deleteUser(userId: number): Promise<void> {
        const token = TokenStorage.getToken()!!;
        return UserAdminApi.deleteUser(userId, token);
    }

    public static registerUser(body: RegisterAsAdmin): Promise<RegisterResult> {
        const token = TokenStorage.getToken()!!;
        return UserAdminApi.registerUser(body, token);
    }

    public static getUser(id: number): Promise<User> {
        const token = TokenStorage.getToken()!!;
        return UserAdminApi.getUser(id, token);
    }

    public static allUsersFiltered(body: AllUsersFiltered, limit: number = 50, skip: number = 0): Promise<User[]> {
        const token = TokenStorage.getToken()!!;
        return UserAdminApi.allUsersFiltered(body, token, limit, skip);
    }
}