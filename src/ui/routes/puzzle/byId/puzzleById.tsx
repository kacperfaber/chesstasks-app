import {useLoaderData} from "react-router-dom";
import {AppLayout} from "../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Backdrop, Grid} from "@mui/material";
import {PuzzleFeedback, PuzzleFeedbackValue} from "../../../components/puzzle/feedback/puzzleFeedback";
import {useEffect, useState} from "react";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {PuzzleService} from "../../../../services/puzzle/puzzleService";
import {PuzzleBoard} from "../../../components/chess/board/puzzle/puzzleBoard";
import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";

export const PuzzleById = () => {
    const {t} = useTranslation();
    const {puzzleId} = useLoaderData() as {puzzleId: number};

    const [puzzle, setPuzzle] = useState<Puzzle>();
    const [feedbackValue, setFeedbackValue] = useState<PuzzleFeedbackValue>("start");

    useEffect(() => {
        PuzzleService.getPuzzle(puzzleId)
            .then(setPuzzle)
            .catch(() => {}) // TODO
    }, []);

    const submit = () => {
        // TODO: Submit to API, using moves pushed from PuzzleController.
    }

    const onGoodMove = ({finished}: PuzzleControllerResult) => {
        if (finished) {
            setFeedbackValue("solved");
            submit();
            return;
        }

        setFeedbackValue("good_move");
    }

    const onBadMove = (r: PuzzleControllerResult) => {
        submit();
        setFeedbackValue("bad_move");
    }

    return (
        <AppLayout title={t("puzzle-by-id.navbar-title")}>
            <Grid container>
                { puzzle ?
                    <>
                        <Grid item md={6} xs={12}>
                            <PuzzleBoard puzzle={puzzle} onGoodMove={onGoodMove} onBadMove={onBadMove}/>
                        </Grid>

                        <Grid item xs={12}>
                            <PuzzleFeedback value={feedbackValue} puzzle={puzzle}/>
                        </Grid>
                    </>
                    :
                    null
                }
            </Grid>
        </AppLayout>
    );
}