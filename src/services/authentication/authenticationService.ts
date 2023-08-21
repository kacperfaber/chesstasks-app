import {AuthenticationApi} from "../../api/authentication/authenticationApi";
import {AuthenticationStore} from "../../store/authentication/authenticationStore";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {User} from "../../api/user";

export class AuthenticationService {
    // TODO: I think I need something like 'tryAuthenticate: Promise<bool>'

    public static async authenticate(login: string, password: string): Promise<void> {
        const token = await AuthenticationApi.authenticate(login, password);
        TokenStorage.setToken(token);
    }

    public static async auth(login: string, password: string): Promise<User> {
        await this.authenticate(login, password);
        return (await this.fetchCurrent())!!;
    }

    public static async logout(): Promise<void> {
        AuthenticationStore.setCurrentUser(undefined);
        TokenStorage.setToken(undefined);
    }

    public static fetchCurrent(): Promise<User | undefined> {
        return new Promise<User | undefined>((resolve, reject) => {
            const token = TokenStorage.getToken();

            if (!token) reject();

            AuthenticationApi.current(token!!)
                .then(user => {
                    AuthenticationStore.setCurrentUser(user);
                    resolve(user)
                })
                .catch(() => resolve(undefined));
        });
    }

    public static async getCurrentOrNull(refresh: boolean = false): Promise<User | undefined> {
        if (!AuthenticationStore.currentUser || refresh) {
            return AuthenticationService.fetchCurrent();
        }

        return AuthenticationStore.currentUser;
    }
}