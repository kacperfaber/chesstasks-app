import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";

export type RegisterPayload = {
    username: string;
    emailAddress: string;
    password: string;
}

export type ConfirmPayload = {
    emailAddress: string;
    code: string;
}

export class RegisterApi {
    public static register(payload: RegisterPayload): Promise<void> {
        const url = `${Config.apiUrl}/register`;
        return HttpUtils.postWithoutTokenAsync(url, payload);
    }

    public static confirm(payload: ConfirmPayload): Promise<void> {
        const url = `${Config.apiUrl}/register/confirm`;
        return HttpUtils.postWithoutTokenAsync(url, payload);
    }
}