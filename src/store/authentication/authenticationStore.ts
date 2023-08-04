import {User} from "../../api/user";

export class AuthenticationStore {
    public static currentUser: User | undefined = undefined;

    public static setCurrentUser(user: User | undefined) {
        AuthenticationStore.currentUser = user;
    }
}