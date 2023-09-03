import {Token} from "../storage/token/tokenStorage";
import {Config} from "../config/config";

export class HttpUtils{
    private static tokenHeaders(token: Token): Headers {
        // TODO: Check if authorization header is good, maybe Bearer is needed?
        let headers = new Headers();
        headers.set("Authorization", token.token);
        headers.set("Content-Type", "application/json");
        return headers;
    }

    private static apiKeyHeaders(): Headers {
        let headers = new Headers();
        headers.set("Authorization", Config.apiKey);
        headers.set("Content-Type", "application/json");
        return headers;
    }

    private static headers(): Headers {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");
        return headers;
    }

    public static getAsync<T>(url: string, token: Token | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.tokenHeaders(token) : this.headers(), method: "GET"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static deleteAsync<T>(url: string, token: Token | undefined = undefined): Promise<T | undefined> {
        return new Promise<T | undefined>((resolve, reject) => {
            fetch(url, {headers: token ? this.tokenHeaders(token) : this.headers(), method: "DELETE"})
                .then(resp => resp.status != 204 ? resp.json() as T : undefined)
                .then(resp => resolve(resp))
                .catch((err) => reject(err));
        });
    }

    public static deleteWithBodyAsync<T>(url: string, body: any, token: Token | undefined = undefined): Promise<T | undefined> {
        return new Promise<T | undefined>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: token ? this.tokenHeaders(token) : this.headers(), method: "DELETE"})
                .then(resp => resp.status != 204 ? resp.json() as T : undefined)
                .then(resp => resolve(resp))
                .catch((err) => reject(err));
        });
    }

    public static putAsync<T>(url: string, body: any, token: Token | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: token ? this.tokenHeaders(token) : this.headers(), method: "PUT"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static putWithoutBodyAsync<T>(url: string, token: Token | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.tokenHeaders(token) : this.headers(), method: "PUT"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static getWithBodyAsync<T>(url: string, body: any, token: Token| undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: body, headers: token ? this.tokenHeaders(token) : this.headers(), method: "GET"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postWithoutTokenAsync<T>(url: string, body: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: this.headers(), method: "POST"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postWithoutTokenAsyncVoid(url: string, body: any) {
        return new Promise<void>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: this.headers(), method: "POST"})
                .then((resp) => resp.status >= 200 && resp.status <= 299 ? resolve() : reject())
                .catch(() => reject());
        });
    }

    public static postWithApiKey(url: string, body: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            fetch(url, {headers: this.apiKeyHeaders(), body: JSON.stringify(body), method: "POST"})
                .then(resp => resp.status >= 200 && resp.status <= 299 ? resolve() : reject())
                .catch(reject);
        })
    }

    public static postWithoutBodyAsync<T>(url: string, token: Token): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.tokenHeaders(token) : this.headers(), method: "POST"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postAsync<T>(url: string, body: any, token: Token): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: token ? this.tokenHeaders(token) : this.headers(), method: "POST"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postExpectBodyAsync<T>(url: string, body: any, token: Token): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: JSON.stringify(body), headers: token ? this.tokenHeaders(token) : this.headers(), method: "POST"})
                .then(resp => resp.status >= 200 && resp.status <= 299 ? resolve(resp.json() as T) : reject())
                .catch(() => reject());
        });
    }
}