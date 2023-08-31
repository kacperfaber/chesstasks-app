import {Grid} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {SubmitResponse} from "../../../../../api/play/submitResponse";
import {PlayService} from "../../../../../services/play/playService";
import {PuzzleController, PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {PuzzleBoard} from "../../../chess/board/puzzle/puzzleBoard";
import {NextPuzzleType, PuzzleFeedbackValue} from "../../feedback/puzzleFeedbackValue";
import {PlayPuzzleAttrs} from "../playPuzzle";
import {DesktopPlayPuzzle_ControlGrid} from "./desktopPlayControlGrid";
import {DesktopPlayPuzzle_ThemeList} from "./themes/themeList";
import {DesktopPlayPuzzle_Ranking} from "./ranking/puzzleRanking";
import {Api} from "chessground/api";
import {UCI} from "../../../../../commons/uci";
import {showCorrectAnswer} from "../../../../../commons/showCorrectAnswer";

export const DesktopPlayPuzzle = (attrs: PlayPuzzleAttrs) => {
    // TODO: Copied from MobilePlayPuzzle

    const userCtx = useContext(CurrentUserContext);

    const [feedback, setFeedback] = useState<PuzzleFeedbackValue>("start")
    const [nextPuzzleType, setNextPuzzleType] = useState<NextPuzzleType>("skip");

    const [submitRes, setSubmitRes] = useState<SubmitResponse>();

    const [ranking, setRanking] = useState<number>();
    const [rankingDiff, setRankingDiff] = useState<number>();

    const submit = (moves: string[], success: boolean) => {
        if (submitRes) return;

        // TODO: I don't know I should send empty array when puzzle is solved.
        PlayService.submitPuzzle(attrs.puzzle.id, success, moves ?? []) // TODO.
            .then(setSubmitRes)
            .catch(() => alert("Cannot submit"));
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
        submit(r.moves!!, false);
        attrs.onBadMove?.(r);
        showCorrectAnswer(r.move, r.expected, cg);
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