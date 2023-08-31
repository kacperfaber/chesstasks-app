import {PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";
import {getColourToPlay} from "../../../../../../commons/puzzle/getColourToPlay";
import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Check, Close} from "@mui/icons-material";
import styled from "styled-components";

export type MobilePuzzleFeedbackAttrs = {
    puzzle: Puzzle,
    feedback: PuzzleFeedbackValue,
}

const MobileFeedbackWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const MobilePuzzleFeedback_Start = ({puzzle, feedback}: MobilePuzzleFeedbackAttrs) => {
    const {t} = useTranslation();

    const col = getColourToPlay(puzzle.fen);

    return (
        <MobileFeedbackWrapper>
            <Typography variant={'h5'}>
                {t(`puzzle-feedback.find-best-move-for-${col}`)}
            </Typography>
        </MobileFeedbackWrapper>
    )
}

export const MobilePuzzleFeedback_BadMove = () => {
    const {t} = useTranslation();

    return (
        <MobileFeedbackWrapper>
            <Close sx={{color: 'red'}}/>

            <Typography variant={'h5'}>
                {t(`puzzle-feedback.bad-move.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle-feedback.bad-move.body`)}
            </Typography>
        </MobileFeedbackWrapper>
    )
}

export const MobilePuzzleFeedback_GoodMove = () => {
    const {t} = useTranslation();

    return (
        <MobileFeedbackWrapper>
            <Typography variant={'h5'}>
                {t(`puzzle-feedback.good-move.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle-feedback.good-move.body`)}
            </Typography>
        </MobileFeedbackWrapper>
    )
}

export const MobilePuzzleFeedback_Solved = () => {
    const {t} = useTranslation();

    return (
        <MobileFeedbackWrapper>
            <Check sx={{ color: 'green'}}/>

            <Typography variant={'h5'}>
                {t(`puzzle-feedback.solved.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle-feedback.solved.body`)}
            </Typography>
        </MobileFeedbackWrapper>
    )
}

export const MobilePuzzleFeedback = ({feedback, puzzle}: MobilePuzzleFeedbackAttrs) => {
    if (feedback == "start") {
        return <MobilePuzzleFeedback_Start feedback={feedback} puzzle={puzzle}/>
    }

    else if (feedback == "good_move") {
        return <MobilePuzzleFeedback_GoodMove />
    }

    else if (feedback == "bad_move") {
        return <MobilePuzzleFeedback_BadMove/>
    }

    else if (feedback == "solved") {
        return <MobilePuzzleFeedback_Solved/>
    }

    // TODO: Never, unless feedback has only 'start', good_move, bad_move, solved
    throw new Error("feedback is not supposed to have more than 'start', good_move, bad_move, solved")
}