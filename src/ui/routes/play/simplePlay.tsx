import {useLoaderData} from "react-router-dom";
import {SimplePlayCriteria} from "./simplePlayCriteria";
import {useTranslation} from "react-i18next";
import {PlayPuzzle} from "../../components/puzzle/play/playPuzzle";
import {useEffect, useState} from "react";
import {Puzzle} from "../../../api/puzzles/puzzle";
import {AppLayout} from "../../components/layout/appLayout";
import {PlayService} from "../../../services/play/playService";

export const SimplePlay = () => {
    // Loader data
    const simplePlayCriteria = useLoaderData() as SimplePlayCriteria;

    const {t} = useTranslation();
    const [buffer, setBuffer] = useState<Array<Puzzle>>();
    const [index, setIndex] = useState(0);
    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle>();

    const nextPuzzleRequested = () => {
        setIndex(old => old + 1);
    }

    const onNewBufferFetch = (data: Puzzle[]) => {
        setBuffer(data);
        setCurrentPuzzle(data[0])
    }

    const reloadBuffer = () => {
        PlayService.getPuzzles(undefined, undefined, undefined)
            .then(onNewBufferFetch)
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        reloadBuffer();
    }, []);

    useEffect(() => {
        const nextPuzzle = buffer?.[index];

        if (nextPuzzle) {
            setCurrentPuzzle(nextPuzzle);
        }

        else {
            reloadBuffer();
        }
    }, [index]);

    return (
        <AppLayout title={t("play.navbar-title")}>
            {currentPuzzle ? <PlayPuzzle key={currentPuzzle.id} onNextPuzzleRequested={nextPuzzleRequested}
                                         puzzle={currentPuzzle}/> : null}
        </AppLayout>
    )
}