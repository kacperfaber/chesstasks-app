import {Puzzle} from "../../../../api/puzzles/puzzle";
import {useState} from "react";
import {PuzzleFeedback, PuzzleFeedbackValue} from "../feedback/puzzleFeedback";
import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";
import {Button, Grid} from "@mui/material";
import {PuzzleBoard} from "../../chess/board/puzzle/puzzleBoard";

export type NextPuzzleType = "solved" | "skip";

export interface PlayPuzzleAttrs {
    puzzle: Puzzle;
    onGoodMove?: (r: PuzzleControllerResult) => void;
    onBadMove?: (r: PuzzleControllerResult) => void;
    onNextPuzzleRequested?: (nextPuzzleType: NextPuzzleType) => void;
}

export const PlayPuzzle = (attrs: PlayPuzzleAttrs) => {
    // TODO: submit does nothing

    const [feedback, setFeedback] = useState<PuzzleFeedbackValue>("start")
    const [nextPuzzleType, setNextPuzzleType] = useState<NextPuzzleType>("skip");

    const submit = () => {}

    const onGoodMove = (r: PuzzleControllerResult) => {
        attrs.onGoodMove?.(r);

        if (r.finished) {
            setFeedback("solved");
            setNextPuzzleType("solved")
            submit();
            return;
        }

        setFeedback("good_move");
    }

    const onBadMove = (r: PuzzleControllerResult) => {
        submit();
        setFeedback("bad_move");
        attrs.onBadMove?.(r);
        setNextPuzzleType("skip");
    }

    return (
        <>
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <PuzzleBoard puzzle={attrs.puzzle} onGoodMove={onGoodMove} onBadMove={onBadMove}/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <PuzzleFeedback value={feedback} puzzle={attrs.puzzle}/>
                </Grid>
            </Grid>
        </>
    )
}