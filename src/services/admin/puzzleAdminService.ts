import {TokenStorage} from "../../storage/token/tokenStorage";
import {InsertPuzzlePayload, PuzzleAdminApi} from "../../api/admin/puzzle/puzzleAdminApi";
import {Puzzle} from "../../api/puzzles/puzzle";

export class PuzzleAdminService {
    public static deletePuzzle(puzzleId: number): Promise<void> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.deletePuzzle(puzzleId, token);
    }

    public static insertPuzzle(b: InsertPuzzlePayload): Promise<Puzzle> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.insertPuzzle(b, token);
    }

    public static setThemes(puzzleId: number, themeNames: string[]): Promise<void> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.setThemes(puzzleId, themeNames, token);
    }

    public static unsetThemes(puzzleId: number, themeIds: number[]): Promise<void> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.unsetThemes(puzzleId, themeIds, token);
    }

    public static setPuzzleRanking(puzzleId: number, ranking: number): Promise<void> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.setPuzzleRanking(puzzleId, ranking, token);
    }

    public static createTheme(themeName: string): Promise<number> {
        const token = TokenStorage.getToken()!!;
        return PuzzleAdminApi.createTheme(themeName, token);
    }
}