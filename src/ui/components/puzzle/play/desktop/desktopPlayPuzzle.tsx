import {Grid} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {SubmitResponse} from "../../../../../api/play/submitResponse";
import {PlayService} from "../../../../../services/play/playService";
import {PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {PuzzleBoard} from "../../../chess/board/puzzle/puzzleBoard";
import {NextPuzzleType, PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {PlayPuzzleAttrs} from "../playPuzzle";
import {DesktopPlayPuzzle_ControlGrid} from "./desktopPlayControlGrid";
import {DesktopPlayPuzzle_ThemeList} from "./themes/themeList";
import {DesktopPlayPuzzle_Ranking} from "./ranking/puzzleRanking";

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

        if (submitRes?.ranking && submitRes?.rankingDifference) {
            setRanking(submitRes?.ranking);
            setRankingDiff(submitRes?.rankingDifference);
            return
        }

        PlayService.getUserRanking(userCtx.value.id)
            .then(({ranking}) => setRanking(ranking))
            .catch(() => {
            }) // TODO;
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
        <Grid container spacing={5}>
            <Grid item md={0} lg={0} xl={3}>
                <DesktopPlayPuzzle_Ranking ranking={ranking} rankingDiff={rankingDiff}/>
                <DesktopPlayPuzzle_ThemeList feedback={feedback} puzzle={attrs.puzzle}/>
            </Grid>

            <Grid item md={8} lg={7} xl={6}>
                <PuzzleBoard key={attrs.puzzle.id} onBadMove={onBadMove} onGoodMove={onGoodMove} puzzle={attrs.puzzle}/>
            </Grid>

            <Grid item md={4} lg={5} xl={3}>
                <DesktopPlayPuzzle_ControlGrid nextPuzzle={nextPuzzle} feedback={feedback} puzzle={attrs.puzzle}/>
            </Grid>
        </Grid>
    );
}