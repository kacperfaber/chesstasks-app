import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {PuzzleHistory} from "./puzzleHistory";
import {Token} from "../../storage/token/tokenStorage";

export class PuzzleHistoryApi {
    public static getMinePuzzleHistory(token: Token, skip: number = 0): Promise<Array<PuzzleHistory>> {
        const url = `${Config.apiUrl}/api/puzzle-history/mine?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzleHistory(token: Token, userId: number, skip: number = 0): Promise<Array<PuzzleHistory>> {
        const url = `${Config.apiUrl}/api/puzzle-history/user/${userId}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }
}