import {PuzzleHistoryApi} from "../../api/puzzleHistory/puzzleHistoryApi";
import {TokenStorage} from "../../storage/token/tokenStorage";
import {PuzzleHistory} from "../../api/puzzleHistory/puzzleHistory";

export class PuzzleHistoryService {
    public static getMinePuzzleHistory(skip: number = 0) {
        const token = TokenStorage.getTokenObj()!!;
        return PuzzleHistoryApi.getMinePuzzleHistory(token, skip);
    }

    public static getPuzzleHistory(userId: number, skip: number=0): Promise<Array<PuzzleHistory>> {
        const token = TokenStorage.getTokenObj()!!;
        return PuzzleHistoryApi.getPuzzleHistory(token, userId, skip);
    }
}