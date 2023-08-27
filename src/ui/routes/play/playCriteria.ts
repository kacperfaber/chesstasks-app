import {PuzzleDatabase} from "../../../api/puzzles/puzzleDatabase";

export interface PlayCriteria {
    database?: PuzzleDatabase | undefined;
    themeId?: number | undefined;
}