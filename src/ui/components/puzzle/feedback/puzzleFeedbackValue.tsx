export type PuzzleFeedbackValue = "solved" | "good_move" | "bad_move" | "start";

export type NextPuzzleType = "solved" | "skip";

export function isPuzzleFinished(feedback: PuzzleFeedbackValue): boolean {
    return feedback == "solved" || feedback == "bad_move";
}