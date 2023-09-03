import {HistoryVisibility, StatisticsVisibility} from "../../api/userPreferences/userPreferences";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {UserPreferencesApi} from "../../api/userPreferences/userPreferencesApi";

export class UserPreferencesService {

    public static getHistoryVisibility(): Promise<HistoryVisibility> {
        const token = TokenStorage.getTokenObj()!!;
        return UserPreferencesApi.getHistoryVisibility(token);
    }

    public static setHistoryVisibility(historyVisibility: HistoryVisibility): Promise<void> {
        const token = TokenStorage.getTokenObj()!!;
        return UserPreferencesApi.setHistoryVisibility(token, historyVisibility);
    }

    public static getStatisticsVisibility(): Promise<StatisticsVisibility> {
        const token = TokenStorage.getTokenObj()!!;
        return UserPreferencesApi.getStatisticsVisibility(token);
    }

    public static setStatisticsVisibility(statisticsVisibility: StatisticsVisibility): Promise<void> {
        const token = TokenStorage.getTokenObj()!!;
        return UserPreferencesApi.setStatisticsVisibility(token, statisticsVisibility);
    }
}