import {PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";
import {getColourToPlay} from "../../../../../../commons/puzzle/getColourToPlay";
import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Check, Close} from "@mui/icons-material";
import styled from "styled-components";

export type ResponsivePuzzleFeedbackAttrs = {
    puzzle: Puzzle,
    feedback: PuzzleFeedbackValue,
}

const ResponsiveWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ResponsivePuzzleFeedback_Start = ({puzzle, feedback}: ResponsivePuzzleFeedbackAttrs) => {
    const {t} = useTranslation();

    const col = getColourToPlay(puzzle.fen);

    return (
        <ResponsiveWrapper>
            <Typography variant={'h5'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.find-best-move-for-${col}`)}
            </Typography>
        </ResponsiveWrapper>
    )
}

export const ResponsivePuzzleFeedback_BadMove = () => {
    const {t} = useTranslation();

    return (
        <ResponsiveWrapper>
            <Close sx={{color: 'red'}}/>

            <Typography variant={'h5'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.bad-move.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.bad-move.body`)}
            </Typography>
        </ResponsiveWrapper>
    )
}

export const ResponsivePuzzleFeedback_GoodMove = () => {
    const {t} = useTranslation();

    return (
        <ResponsiveWrapper>
            <Typography variant={'h5'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.good-move.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.good-move.body`)}
            </Typography>
        </ResponsiveWrapper>
    )
}

export const ResponsivePuzzleFeedback_Solved = () => {
    const {t} = useTranslation();

    return (
        <ResponsiveWrapper>
            <Check sx={{ color: 'green'}}/>

            <Typography variant={'h5'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.solved.title`)}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t(`puzzle._responsive._comps.puzzle-feedback.solved.body`)}
            </Typography>
        </ResponsiveWrapper>
    )
}

export const ResponsivePuzzleFeedback = ({feedback, puzzle}: ResponsivePuzzleFeedbackAttrs) => {
    if (feedback == "start") {
        return <ResponsivePuzzleFeedback_Start feedback={feedback} puzzle={puzzle}/>
    }

    else if (feedback == "good_move") {
        return <ResponsivePuzzleFeedback_GoodMove />
    }

    else if (feedback == "bad_move") {
        return <ResponsivePuzzleFeedback_BadMove/>
    }

    else if (feedback == "solved") {
        return <ResponsivePuzzleFeedback_Solved/>
    }

    // TODO: Never, unless feedback has only 'start', good_move, bad_move, solved
    throw new Error("feedback is not supposed to have more than 'start', good_move, bad_move, solved")
}