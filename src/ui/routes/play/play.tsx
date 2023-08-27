import {useLoaderData} from "react-router-dom";
import {PlayCriteria} from "./playCriteria";
import {useTranslation} from "react-i18next";
import {PlayPuzzle} from "../../components/puzzle/play/playPuzzle";
import {useEffect, useState} from "react";
import {Puzzle} from "../../../api/puzzles/puzzle";
import {AppLayout} from "../../components/layout/appLayout";
import {PlayService} from "../../../services/play/playService";

export const Play = () => {
    const {t} = useTranslation();

    // TODO: PlayCriteria is not used.
    const playCriteria = useLoaderData() as PlayCriteria;

    const [buffer, setBuffer] = useState<Array<Puzzle>>();

    const [index, setIndex] = useState(0);

    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle>();

    const nextPuzzleRequested = () => {
        setIndex(old => old + 1);
    }

    const reloadBuffer = () => {
        PlayService.getPuzzles(undefined, undefined, undefined)
            .then(data => {
                setBuffer(data);
                setCurrentPuzzle(data[0])
            })
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