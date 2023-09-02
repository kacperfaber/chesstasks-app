import {Token} from "../../../storage/token/tokenStorage";
import {RegisterResult} from "../../register/registerResult";
import {Config} from "../../../config/config";
import {HttpUtils} from "../../httpUtils";
import {User} from "../../user";

export type RegisterAsAdmin = {
    username: string;
    emailAddress: string;
    password: string;
    skipVerification: boolean;
}

export type AllUsersFiltered = {
    usernameLike?: string;
    emailLike?: string;
}

export class UserAdminApi {
    public static registerUser(body: RegisterAsAdmin, token: Token): Promise<RegisterResult> {
        const url = `${Config.apiUrl}/api/register/as-admin`;
        return HttpUtils.postAsync(url, body, token);
    }

    public static deleteUser(id: number, token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/user/as-admin/${id}`;
        return HttpUtils.deleteAsync(url, token);
    }

    public static getUser(id: number, token: Token): Promise<User> {
        const url = `${Config.apiUrl}/api/user/as-admin/by-id/${id}`;
        return HttpUtils.getAsync(url, token);
    }

    public static allUsersFiltered(body: AllUsersFiltered, token: Token,  limit: number = 50, skip: number = 0): Promise<User[]> {
        const url = `${Config.apiUrl}/api/user/as-admin/all/filtered?limit=${limit}&skip=${skip}`;
        return HttpUtils.postAsync(url, body, token);
    }
}