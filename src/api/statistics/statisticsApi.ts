import {Config} from "../../config/config";
import {SimpleStatistics} from "./simpleStatistics";
import {HttpUtils} from "../httpUtils";
import {Token} from "../../storage/token/tokenStorage";

export class StatisticsApi {
    public static getSimpleStatistics(userId: number, token: Token): Promise<SimpleStatistics> {
        const url = `${Config.apiUrl}/api/statistics/simple/user/${userId}`;
        return HttpUtils.getAsync(url, token);
    }
}