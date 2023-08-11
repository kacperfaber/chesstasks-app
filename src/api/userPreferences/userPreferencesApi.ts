import {HistoryVisibility, StatisticsVisibility} from "./userPreferences";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";

export class UserPreferencesApi {
    public static getHistoryVisibility(token: string): Promise<HistoryVisibility> {
        const url = `${Config.apiUrl}/api/user/preferences/history-visibility`;
        return HttpUtils.getAsync(url, token);
    }

    public static getStatisticsVisibility(token: string): Promise<StatisticsVisibility> {
        const url = `${Config.apiUrl}/api/user/preferences/statistics-visibility`;
        return HttpUtils.getAsync(url, token);
    }

    public static setHistoryVisibility(token: string, historyVisibility: HistoryVisibility): Promise<void> {
        const url = `${Config.apiUrl}/api/user/preferences/history-visibility/${historyVisibility}`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }

    public static setStatisticsVisibility(token: string, statisticsVisibility: StatisticsVisibility): Promise<void> {
        const url = `${Config.apiUrl}/api/user/preferences/statistics-visibility/${statisticsVisibility}`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }
}