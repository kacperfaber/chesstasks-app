const TOKEN_KEY: string = "__token";

export class TokenStorage {
    public static setToken(token: string | undefined) {
        window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    }

    public static getToken(): string | undefined {
        const value = window.sessionStorage.getItem(TOKEN_KEY);
        if (!value) return undefined;
        return JSON.parse(value);
    }
}