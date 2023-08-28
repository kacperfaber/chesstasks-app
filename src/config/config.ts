export interface Config {
    apiUrl: string;
    apiKey: string;
}

export const Config: Config = process.env.CONFIG as unknown as Config;