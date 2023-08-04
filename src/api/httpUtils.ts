export class HttpUtils{
    private static headers(token: string): Headers {
        // TODO: Check if authorization header is good, maybe Bearer is needed?
        let headers = new Headers();
        headers.set("Authorization", token);
        return headers;
    }

    public static getAsync<T>(url: string, token: string | undefined = undefined): Promise<T> {
        return new Promise<T>((resolve) => {
            fetch(url, {headers: token ? this.headers(token) : new Headers(), method: "GET"})
                .then(resp => resp.json() as T)
                .then(resp => resolve(resp));
        });
    }
}