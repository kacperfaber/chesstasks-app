import {Grid} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {SubmitResponse} from "../../../../../api/play/submitResponse";
import {PlayService} from "../../../../../services/play/playService";
import {PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {PuzzleBoard} from "../../../chess/board/puzzle/puzzleBoard";
import {NextPuzzleType, PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {PlayPuzzleAttrs} from "../playPuzzle";
import {ResponsivePuzzleFeedback} from "../feedback/responsive/responsivePuzzleFeedback";

export const DesktopPlayPuzzle = (attrs: PlayPuzzleAttrs) => {
    // TODO: Copied from MobilePlayPuzzle

    const userCtx = useContext(CurrentUserContext);

    const [feedback, setFeedback] = useState<PuzzleFeedbackValue>("start")
    const [nextPuzzleType, setNextPuzzleType] = useState<NextPuzzleType>("skip");

    const [submitRes, setSubmitRes] = useState<SubmitResponse>();

    const [ranking, setRanking] = useState<number>();
    const [rankingDiff, setRankingDiff] = useState<number>();

    const submit = () => {
        if (submitRes) return;

        PlayService.submitPuzzle(attrs.puzzle.id, feedback == "solved", ['e2e4']) // TODO.
            .then(setSubmitRes)
            .then(() => console.error("Submited bad moves")) // TODO
            .catch(() => alert("Cannot submit"))
    }

    useEffect(() => {
        if (!(userCtx.value)) return;

        PlayService.getUserRanking(userCtx.value.id)
            .then(({ranking}) => setRanking(ranking))
            .catch(() => {}) // TODO;
    }, [submitRes]);

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
        <Grid container>
            <Grid item md={3}>
            </Grid>

            <Grid item md={5}>
                <PuzzleBoard onBadMove={onBadMove} onGoodMove={onGoodMove} puzzle={attrs.puzzle}></PuzzleBoard>
            </Grid>

            <Grid item md={3}>
                <ResponsivePuzzleFeedback puzzle={attrs.puzzle} feedback={feedback}/>
            </Grid>
        </Grid>
    );
}