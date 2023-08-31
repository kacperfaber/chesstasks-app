import {Puzzle} from "../../../../api/puzzles/puzzle";
import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";

export type NextPuzzleType = "solved" | "skip";

export interface PlayPuzzleAttrs {
    puzzle: Puzzle;
    onGoodMove?: (r: PuzzleControllerResult) => void;
    onBadMove?: (r: PuzzleControllerResult) => void;
    onNextPuzzleRequested?: (nextPuzzleType: NextPuzzleType) => void;
}