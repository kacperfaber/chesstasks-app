import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {useEffect, useState} from "react";
import {NextPuzzleType} from "../feedback/puzzleFeedbackValue";
import {PlayPuzzleContainer_SuchEmpty} from "./suchEmpty";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export type PlayPuzzleContainerAttrs = {
    onGoodMove?: (p: Puzzle, r: PuzzleControllerResult) => void;
    onBadMove?: (p: Puzzle, r: PuzzleControllerResult) => void;
    onNextPuzzleRequested?: (nextPuzzleType: NextPuzzleType) => void;
    onBufferNeedsUpdate?: (setBuffer: (arr: Array<Puzzle>) => void) => void;

    render?: (puzzle: Puzzle, onNextPuzzleRequested: (nextPuzzleType: NextPuzzleType) => void) => void;
}

export const PlayPuzzleContainer = (attrs: PlayPuzzleContainerAttrs) => {
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle>();
    const [index, setIndex] = useState(0);
    const [buffer, setBuffer] = useState<Array<Puzzle>>();
    const {t} = useTranslation();

    const reloadBuffer = () => {
        attrs.onBufferNeedsUpdate?.(setBuffer);
    }

    const refreshCurrentPuzzle = () => {
        const nextPuzzle = buffer?.[index];

        if (nextPuzzle) {
            setCurrentPuzzle(nextPuzzle);
        }

        else {
            reloadBuffer();
        }
    }

    useEffect(() => {
        reloadBuffer();
    }, []);

    useEffect(() => {
        refreshCurrentPuzzle();
    }, [index]);

    useEffect(() => {
        setCurrentPuzzle(buffer?.[0]);
    }, [buffer]);

    const nextPuzzleRequested = (nextPuzzleType: NextPuzzleType) => {
        setIndex(old => old + 1);
        attrs.onNextPuzzleRequested?.(nextPuzzleType);
    }

    return (
        <>
            {
                <Backdrop open={(buffer?.length ?? 0) == 0} sx={{zIndex: 999999, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography variant={'h5'}>
                      {t("play-puzzle-container._comps.loading.title")}
                    </Typography>

                    <Typography variant={'body2'}>
                      {t("play-puzzle-container._comps.loading.body")}
                    </Typography>

                    <CircularProgress color={"inherit"}/>
                </Backdrop>
            }

            {
                buffer?.length == 0 ? <PlayPuzzleContainer_SuchEmpty/> : null
            }

            {
                currentPuzzle ? attrs.render?.(currentPuzzle, nextPuzzleRequested) : null
            }
        </>
    )
}
