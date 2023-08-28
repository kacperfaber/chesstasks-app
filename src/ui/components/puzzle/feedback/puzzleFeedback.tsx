import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Colour} from "chlss";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {getColourToPlay} from "../../../../commons/puzzle/getColourToPlay";
import {useTranslation} from "react-i18next";
import {PlayPaper} from "../playPaper";

export type PuzzleFeedbackValue = "solved" | "good_move" | "bad_move" | "start";

export type PuzzleFeedbackAttrs = {
    value: PuzzleFeedbackValue;
    puzzle: Puzzle;
}

export const PuzzleFeedback_Start = ({color}: {color: Colour}) => {
    const {t} = useTranslation();

    const translateColor = () => {
        return t(`puzzle-feedback.find-best-move-for-${color}`);
    }

    return (
        <>
            <Typography variant={'h5'}>{t("puzzle-feedback.your-move")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{translateColor()}</Typography>
        </>
    );
}

export const PuzzleFeedback_Solved = () => {
    const {t} = useTranslation();

    return (
        <>
            <Typography variant={'h5'}>{t("puzzle-feedback.solved.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle-feedback.solved.body")}</Typography>
        </>
    );
}


export const PuzzleFeedback_BadMove = () => {
    const {t} = useTranslation();

    return (
        <>
            <Typography variant={'h5'}>{t("puzzle-feedback.bad-move.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle-feedback.bad-move.body")}</Typography>
        </>
    );
}

export const PuzzleFeedback_GoodMove = () => {
    const {t} = useTranslation();

    return (
        <>
            <Typography variant={'h5'}>{t("puzzle-feedback.good-move.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle-feedback.good-move.body")}</Typography>
        </>
    );
}

export const PuzzleFeedback = ({value, puzzle}: PuzzleFeedbackAttrs) => {
    const [colorToPlay, setColorToPlay] = useState<Colour>("white");

    useEffect(() => {
        setColorToPlay(getColourToPlay(puzzle.fen));
    }, []);

    return (
        <PlayPaper>
            <>
                {value == "start" ? <PuzzleFeedback_Start color={colorToPlay}/> : null}

                {value == "solved" ? <PuzzleFeedback_Solved/> : null}

                {value == "bad_move" ? <PuzzleFeedback_BadMove/> : null}

                {value == "good_move" ? <PuzzleFeedback_GoodMove/> : null}
            </>
        </PlayPaper>
    );
}