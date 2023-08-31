import {NextPuzzleType, PlayPuzzleAttrs} from "../playPuzzle";
import {useState} from "react";
import {PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {SubmitResponse} from "../../../../../api/play/submitResponse";
import {PlayService} from "../../../../../services/play/playService";
import {PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {PuzzleBoard} from "../../../chess/board/puzzle/puzzleBoard";
import {Grid, Typography} from "@mui/material";
import {MobilePuzzleFeedback} from "./feedback/mobilePuzzleFeedback";
import {MobilePlayPuzzle_Actions} from "./actions/mobileActions";
import {MobilePuzzleNav} from "./nav/mobilePuzzleNav";

export const MobilePlayPuzzle = (attrs: PlayPuzzleAttrs) => {
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

    const nextPuzzle = () => attrs.onNextPuzzleRequested?.(nextPuzzleType)

    return (
        <>
            <Grid container style={{height: '100%'}}>
                <Grid item xs={12}>
                    <PuzzleBoard puzzle={attrs.puzzle} onGoodMove={onGoodMove} onBadMove={onBadMove}/>
                </Grid>

                <Grid item xs={12} sx={{marginTop: '15px', height: '100%'}}>
                    <MobilePuzzleFeedback puzzle={attrs.puzzle} feedback={feedback}/>
                </Grid>

                <Grid item xs={12} >
                    <MobilePlayPuzzle_Actions feedback={feedback} goNext={nextPuzzle}/>
                </Grid>
            </Grid>

            <MobilePuzzleNav puzzle={attrs.puzzle} feedback={feedback} nextPuzzle={nextPuzzle}/>
        </>
    );
}