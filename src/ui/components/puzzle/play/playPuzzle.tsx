import {Puzzle} from "../../../../api/puzzles/puzzle";
import {useState} from "react";
import {PuzzleFeedback, PuzzleFeedbackValue} from "../feedback/puzzleFeedbackValue";
import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";
import {Button, Grid, Hidden} from "@mui/material";
import {PuzzleBoard} from "../../chess/board/puzzle/puzzleBoard";
import {PuzzleRanking} from "../ranking/puzzleRanking";
import {PlayService} from "../../../../services/play/playService";
import {SubmitResponse} from "../../../../api/play/submitResponse";
import {PuzzleThemeList} from "./puzzleThemeList";

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

    const [submitRes, setSubmitRes] = useState<SubmitResponse>();

    const submit = () => {
        if (submitRes) return;

        PlayService.submitPuzzle(attrs.puzzle.id, feedback == "solved", ['e2e4']) // TODO.
            .then(setSubmitRes)
            .then(() => console.error("Submited bad moves"))
            .catch(() => alert("Cannot submit"))
    }

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
        setFeedback("bad_move");
        submit();
        attrs.onBadMove?.(r);
        setNextPuzzleType("skip");
    }

    return (
        <>
            <Grid container spacing={5}>
                <Hidden only={['xs', 'sm']}>
                    <Grid item md={3}>
                        <PuzzleFeedback value={feedback} puzzle={attrs.puzzle}/>
                    </Grid>
                </Hidden>

                <Grid item md={5} xs={12}>
                    <PuzzleBoard puzzle={attrs.puzzle} onGoodMove={onGoodMove} onBadMove={onBadMove}/>
                </Grid>

                <Grid item md={1}>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Grid container>
                        <Grid item xs={12} >
                            <PuzzleRanking ranking={submitRes?.ranking} rankingDiff={submitRes?.rankingDifference} feedback={feedback}/>
                        </Grid>

                        <Grid item xs={12}>
                            <PuzzleThemeList puzzle={attrs.puzzle}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}