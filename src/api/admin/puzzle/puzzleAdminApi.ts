import {Token} from "../../../storage/token/tokenStorage";
import {Config} from "../../../config/config";
import {HttpUtils} from "../../httpUtils";
import {PuzzleDatabase} from "../../puzzles/puzzleDatabase";
import {Puzzle} from "../../puzzles/puzzle";

export type InsertPuzzlePayload = {
    moves: string;
    fen: string;
    ranking: number;
    database: PuzzleDatabase;
}

export class PuzzleAdminApi {
    public static deletePuzzle(puzzleId: number, token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/puzzle/as-admin/${puzzleId}`;
        return HttpUtils.deleteAsync(url, token);
    }

    public static insertPuzzle(b: InsertPuzzlePayload, token: Token): Promise<Puzzle> {
        const url = `${Config.apiUrl}/api/puzzle/as-admin`;
        return HttpUtils.putAsync(url, b, token);
    }

    public static setThemes(puzzleId: number, themeNames: string[], token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/puzzle/theme/by-names/as-admin/${puzzleId}`;
        return HttpUtils.putAsync(url, {themeNames}, token);
    }

    public static unsetThemes(puzzleId: number, themeIds: number[], token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/puzzle/theme/by-ids/as-admin/${puzzleId}`;
        return HttpUtils.deleteWithBodyAsync(url, {themeIds}, token);
    }

    public static setPuzzleRanking(puzzleId: number, ranking: number, token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/puzzle/ranking/as-admin/${puzzleId}/${ranking}`;
        return HttpUtils.postWithoutBodyAsync(url, token);
    }

    public static createTheme(themeName: string, token: Token): Promise<number> {
        const url = `${Config.apiUrl}/api/theme/as-admin/${themeName}`;
        return HttpUtils.putWithoutBodyAsync(url, token);
    }
}