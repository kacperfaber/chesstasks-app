const TOKEN_KEY: string = "__token";

export type Token = {
    userId: number;
    secret: string;
}

export class TokenStorage {
    public static setToken(token: Token | undefined) {
        window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    }

    public static getToken(): Token | undefined {
        const value = window.localStorage.getItem(TOKEN_KEY);
        if (!value) return undefined;
        return JSON.parse(value);
    }
}