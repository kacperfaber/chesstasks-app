import {Config} from "../../config/config";
import {HttpUtils} from "../httpUtils";
import {Puzzle} from "./puzzle";
import {PuzzleDatabase} from "./puzzleDatabase";
import {Token} from "../../storage/token/tokenStorage";

// TODO: In this case, documentation says nothing about 'skip' but I checked and it's skip parameter used.

// TODO: PuzzleApi is not tested.

export class PuzzleApi {
    public static deletePuzzle(puzzleId: number, token: Token): Promise<void> {
        const url = `${Config.apiUrl}/api/puzzle/${puzzleId}`;
        return HttpUtils.deleteAsync(url, token)
    }

    public static getPuzzle(puzzleId: number, token: Token): Promise<Puzzle> {
        const url = `${Config.apiUrl}/api/puzzle/${puzzleId}`;
        return HttpUtils.getAsync<Puzzle>(url, token);
    }

    public static getPuzzlesByDatabase(database: PuzzleDatabase, token: Token, skip: number = 0): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/puzzle/all/by-database/${database}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzlesByOpeningEco(openingEco: string, token: Token, skip: number = 0): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/puzzle/by-opening/${openingEco}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzlesByOpeningId(openingId: number, token: Token, skip: number = 0): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/puzzle/by-opening/id/${openingId}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzleByThemeName(themeName: string, token: Token, skip: number = 0): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/puzzle/by-theme/${themeName}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }

    public static getPuzzleByUser(userId: number, token: Token, skip: number = 0): Promise<Array<Puzzle>> {
        const url = `${Config.apiUrl}/api/puzzle/by-user/${userId}?skip=${skip}`;
        return HttpUtils.getAsync(url, token);
    }
}