import {Puzzle} from "../../api/puzzles/puzzle";
import {PuzzleApi} from "../../api/puzzles/puzzleApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {PuzzleDatabase} from "../../api/puzzles/puzzleDatabase";

export class PuzzleService {
    public static async getPuzzle(id: number, refresh: boolean = false): Promise<Puzzle> {
        const token = TokenStorage.getToken() !!;
        return PuzzleApi.getPuzzle(id, token);
    }

    public static getPuzzlesByDatabase(database: PuzzleDatabase, skip: number = 0): Promise<Array<Puzzle>> {
        return PuzzleApi.getPuzzlesByDatabase(database, TokenStorage.getToken()!!, skip);
    }

    public static getPuzzlesByOpeningEco(openingEco: string, skip: number = 0): Promise<Array<Puzzle>> {
        return PuzzleApi.getPuzzlesByOpeningEco(openingEco, TokenStorage.getToken()!!, skip);
    }

    public static getPuzzlesByOpeningId(openingId: number, skip: number = 0): Promise<Array<Puzzle>> {
        return PuzzleApi.getPuzzlesByOpeningId(openingId, TokenStorage.getToken()!!, skip);
    }

    public static getPuzzlesByThemeName(themeName: string, skip: number = 0): Promise<Array<Puzzle>> {
        return PuzzleApi.getPuzzleByThemeName(themeName, TokenStorage.getToken()!!, skip);
    }

    public static getPuzzleByUser(userId: number, skip: number = 0): Promise<Array<Puzzle>> {
        return PuzzleApi.getPuzzleByUser(userId, TokenStorage.getToken()!!, skip);
    }
}