import {PuzzleControllerResult} from "../../../../services/puzzle/puzzleController";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {NextPuzzleType, PlayPuzzle} from "./playPuzzle";
import {useEffect, useState} from "react";

export type PlayPuzzleContainerAttrs = {
    onGoodMove?: (p: Puzzle, r: PuzzleControllerResult) => void;
    onBadMove?: (p: Puzzle, r: PuzzleControllerResult) => void;
    onNextPuzzleRequested?: (nextPuzzleType: NextPuzzleType) => void;
    onBufferNeedsUpdate?: (setBuffer: (arr: Array<Puzzle>) => void) => void;
}

export const PlayPuzzleContainer = (attrs: PlayPuzzleContainerAttrs) => {
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle>();
    const [index, setIndex] = useState(0);
    const [buffer, setBuffer] = useState<Array<Puzzle>>();

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
        setCurrentPuzzle(buffer?.[0])
    }, [buffer]);

    const nextPuzzleRequested = (nextPuzzleType: NextPuzzleType) => {
        setIndex(old => old + 1);
        attrs.onNextPuzzleRequested?.(nextPuzzleType);
    }

    return (
        <>
            {
                currentPuzzle ? <PlayPuzzle puzzle={currentPuzzle} onNextPuzzleRequested={nextPuzzleRequested}/> : null
            }
        </>
    )
}