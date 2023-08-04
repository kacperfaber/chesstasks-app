export class HttpUtils{
    private static headers(token: string): Headers {
        // TODO: Check if authorization header is good, maybe Bearer is needed?
        let headers = new Headers();
        headers.set("Authorization", token);
        return headers;
    }

    public static getAsync<T>(url: string, token: string | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.headers(token) : new Headers(), method: "GET"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static deleteAsync<T>(url: string, token: string | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.headers(token) : new Headers(), method: "DELETE"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static putAsync<T>(url: string, body: any, token: string | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: body, headers: token ? this.headers(token) : new Headers(), method: "PUT"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static getWithBodyAsync<T>(url: string, body: any, token: string | undefined): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: body, headers: token ? this.headers(token) : new Headers(), method: "GET"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postWithoutTokenAsync<T>(url: string, body: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {body: body, method: "POST"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }

    public static postWithoutBodyAsync<T>(url: string, token: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(url, {headers: token ? this.headers(token) : new Headers(), method: "POST"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp))
                .catch(() => reject());
        });
    }
}