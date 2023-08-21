import {HistoryVisibility, StatisticsVisibility} from "./userPreferences";
import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {Token} from "../../storage/token/tokenStorage";

export class UserPreferencesApi {
    public static getHistoryVisibility(token: Token): Promise<HistoryVisibility> {
        const url = `${Config.apiUrl}/api/user/preferences/history-visibility`;
        return HttpUtils.getAsync(url, token);
    }

    public static getStatisticsVisibility(token: Token): Promise<StatisticsVisibility> {
        const url = `${Config.apiUrl}/api/user/preferences/statistics-visibility`;
        return HttpUtils.getAsync(url, token);
    }

    public static setHistoryVisibility(token: Token, historyVisibility: HistoryVisibility): Promise<void> {
        const url = `${Config.apiUrl}/api/user/preferences/history-visibility/${historyVisibility}`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }

    public static setStatisticsVisibility(token: Token, statisticsVisibility: StatisticsVisibility): Promise<void> {
        const url = `${Config.apiUrl}/api/user/preferences/statistics-visibility/${statisticsVisibility}`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }
}