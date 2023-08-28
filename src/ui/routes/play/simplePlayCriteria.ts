import {PuzzleDatabase} from "../../../api/puzzles/puzzleDatabase";

export interface SimplePlayCriteria {
    database?: PuzzleDatabase | undefined;
    themeId?: number | undefined;
}