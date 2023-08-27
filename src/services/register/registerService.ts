import {ConfirmPayload, RegisterApi, RegisterPayload} from "../../api/register/registerApi";

export class RegisterService {
    public static register(payload: RegisterPayload): Promise<void> {
        return RegisterApi.register(payload);
    }

    public static confirm(payload: ConfirmPayload): Promise<void> {
        return RegisterApi.confirm(payload);
    }
}