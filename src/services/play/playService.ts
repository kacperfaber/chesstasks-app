import {PlayApi} from "../../api/play/playApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {SubmitResponse} from "../../api/play/submitResponse";
import {PuzzleDatabase} from "../../api/puzzles/puzzleDatabase";
import {Puzzle} from "../../api/puzzles/puzzle";
import {PlayStore} from "../../store/play/playStore";
import {TrainingRanking} from "../../api/play/trainingRanking";

export class PlayService {
    public static submitPuzzle(puzzleId: number, success: boolean, moves: string[]): Promise<SubmitResponse> {
        return PlayApi.submitPuzzle(puzzleId, moves.join(" "), success, TokenStorage.getToken()!!);
    }

    public static async getPuzzles(rankingOffset: number | undefined, themeId: number | undefined, database: PuzzleDatabase | undefined): Promise<Array<Puzzle>> {
        // if (PlayStore.hasPuzzles()) {
        //     return PlayStore.puzzles !!;
        // }

        return PlayService.fetchPuzzles(rankingOffset, themeId, database);
    }

    public static async fetchPuzzles(rankingOffset: number | undefined, themeId: number | undefined, database: PuzzleDatabase | undefined) {
        const puzzles = await PlayApi.getPuzzles(rankingOffset, themeId, database, TokenStorage.getToken() !!)
        PlayStore.setPuzzles(puzzles, {rankingOffset, themeId, database})
        return puzzles;
    }

    public static getUserRanking(userId: number): Promise<TrainingRanking> {
        return PlayApi.getUserRanking(userId, TokenStorage.getToken() !!);
    }

    public static getRandomPuzzleOrNull(): Puzzle | undefined {
        return PlayStore.getRandomPuzzleOrNull();
    }

    public static searchPuzzles(ranking: {from: number, to: number}, themeIds: number[]): Promise<Array<Puzzle>> {
        return PlayApi.searchPuzzles(ranking, themeIds, TokenStorage.getToken() !!);
    }

}