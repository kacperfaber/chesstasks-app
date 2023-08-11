import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {PuzzleHistory} from "./puzzleHistory";

export class PuzzleHistoryApi {
    public static getMinePuzzleHistory(token: string, skip: number = 0): Promise<Array<PuzzleHistory>> {
        const url = `${Config.apiUrl}/api/puzzle-history/mine?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzleHistory(token: string, userId: number, skip: number = 0): Promise<Array<PuzzleHistory>> {
        const url = `${Config.apiUrl}/api/puzzle-history/user/${userId}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }
}