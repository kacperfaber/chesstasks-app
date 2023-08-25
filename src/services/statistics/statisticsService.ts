import {SimpleStatistics} from "../../api/statistics/simpleStatistics";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {StatisticsApi} from "../../api/statistics/statisticsApi";

export class StatisticsService {
    public static getSimpleStatistics(userId: number): Promise<SimpleStatistics> {
        const token = TokenStorage.getToken()!!;
        return StatisticsApi.getSimpleStatistics(userId, token);
    }
}