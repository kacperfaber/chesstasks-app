import {PuzzleFeedbackValue} from "../feedback/puzzleFeedback";
import {Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {TrainingRanking} from "../../../../api/play/trainingRanking";
import {PlayService} from "../../../../services/play/playService";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import {useTranslation} from "react-i18next";
import {PlayPaper} from "../playPaper";

export const PuzzleRanking = ({feedback, ranking, rankingDiff}: {
    feedback: PuzzleFeedbackValue,
    ranking?: number,
    rankingDiff?: number
}) => {
    const {t} = useTranslation();
    const [userRanking, setUserRanking] = useState<TrainingRanking>();

    const userCtx = useContext(CurrentUserContext);

    useEffect(() => {
        PlayService.getUserRanking(userCtx.value!!.id)
            .then(setUserRanking)
            .catch(() => {
            });
    }, []);

    // TODO: We need Y margin on playPuzzle components.

    return (
        <PlayPaper>
            <>
                <Typography variant={'h5'}>{t("puzzle-ranking.title")}</Typography>
                <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle-ranking.body")}</Typography>

                <Typography sx={{display: 'inline', marginTop: '5px', marginRight: '15px'}} variant={'h3'}>
                    {ranking ?? userRanking?.ranking}
                </Typography>

                <Typography color={(rankingDiff ?? 0) > 0 ? 'green' : 'red'} sx={{display: 'inline'}} variant={'h3'}>
                    {rankingDiff ? `${rankingDiff > 0 ? "+" : "-"}${rankingDiff.toString()}` : null}
                </Typography>
            </>
        </PlayPaper>
    )
}