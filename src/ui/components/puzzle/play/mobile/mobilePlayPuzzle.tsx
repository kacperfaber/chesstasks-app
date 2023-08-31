import {NextPuzzleType, PlayPuzzleAttrs} from "../playPuzzle";
import {useState} from "react";
import {PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {SubmitResponse} from "../../../../../api/play/submitResponse";
import {PlayService} from "../../../../../services/play/playService";
import {PuzzleController, PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {PuzzleBoard} from "../../../chess/board/puzzle/puzzleBoard";
import {Grid, Typography} from "@mui/material";
import {MobilePlayPuzzle_Actions} from "./actions/mobileActions";
import {MobilePuzzleNav} from "./nav/mobilePuzzleNav";
import {ResponsivePuzzleFeedback} from "../feedback/responsive/responsivePuzzleFeedback";
import {showCorrectAnswer} from "../../../../../commons/showCorrectAnswer";
import {Api} from "chessground/api";

export const MobilePlayPuzzle = (attrs: PlayPuzzleAttrs) => {
    const [feedback, setFeedback] = useState<PuzzleFeedbackValue>("start")
    const [nextPuzzleType, setNextPuzzleType] = useState<NextPuzzleType>("skip");

    const [submitRes, setSubmitRes] = useState<SubmitResponse>();

    const submit = (moves: string[], success: boolean) => {
        if (submitRes) return;

        PlayService.submitPuzzle(attrs.puzzle.id, success, moves ?? []) // TODO.
            .then(setSubmitRes)
            .catch(() => alert("Cannot submit"))
    }

    const onGoodMove = (r: PuzzleControllerResult, controller: PuzzleController, cg?: Api) => {
        attrs.onGoodMove?.(r);

        if (r.finished) {
            setFeedback("solved");
            setNextPuzzleType("solved")
            submit([], true);
            return;
        }

        setFeedback("good_move");
    }

    const onBadMove = (r: PuzzleControllerResult, controller: PuzzleController, cg?: Api) => {
        setFeedback("bad_move");
        showCorrectAnswer(r.move, r.expected, cg);
        submit(r.moves!!, false);
        attrs.onBadMove?.(r);
        setNextPuzzleType("skip");
    }

    const nextPuzzle = () => attrs.onNextPuzzleRequested?.(nextPuzzleType)

    return (
        <>
            <Grid container style={{height: '100%'}}>
                <Grid item xs={12}>
                    <PuzzleBoard puzzle={attrs.puzzle} onGoodMove={onGoodMove} onBadMove={onBadMove}/>
                </Grid>

                <Grid item xs={12} sx={{marginTop: '15px', height: '100%'}}>
                    <ResponsivePuzzleFeedback puzzle={attrs.puzzle} feedback={feedback}/>
                </Grid>

                <Grid item xs={12} >
                    <MobilePlayPuzzle_Actions feedback={feedback} goNext={nextPuzzle}/>
                </Grid>
            </Grid>

            <MobilePuzzleNav puzzle={attrs.puzzle} feedback={feedback} nextPuzzle={nextPuzzle}/>
        </>
    );
}