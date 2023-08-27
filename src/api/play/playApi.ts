import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {SubmitResponse} from "./submitResponse";
import {PuzzleDatabase} from "../puzzles/puzzleDatabase";
import {Puzzle} from "../puzzles/puzzle";
import {Token} from "../../storage/token/tokenStorage";
import {TrainingRanking} from "./trainingRanking";

export class PlayApi {
    public static submitPuzzle(puzzleId: number, moves: string, success: boolean, token: Token): Promise<SubmitResponse> {
        const url = `${Config.apiUrl}/api/play/training/${puzzleId}/submit`;
        return HttpUtils.postAsync<SubmitResponse>(url, {success, moves}, token);
    }

    public static getPuzzles(rankingOffset: number | undefined, themeId: number | undefined, database: PuzzleDatabase | undefined, token: Token): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/play/training/puzzles`;
        const body = { rankingOffset, themeId, database };
        return HttpUtils.postAsync(url, body, token);
    }

    public static getUserRanking(userId: number, token: Token | undefined): Promise<TrainingRanking> {
        const url = `${Config.apiUrl}/api/play/training/ranking/${userId}`;
        return HttpUtils.getAsync(url, token);
    }
}