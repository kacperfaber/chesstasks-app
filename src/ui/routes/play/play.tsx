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
    const playCriteria = useLoaderData() as PlayCriteria;

    const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle>();

    const nextPuzzleRequested = () => {
        // Delete from buffer

        // Get puzzle:

        // if buffer is empty, fetch new buffer

        PlayService.getPuzzles(undefined, undefined, undefined)
            .then(data => setCurrentPuzzle(data[1]));
    }

    useEffect(() => {
        console.log("calling useEffect on Play")

        PlayService.getPuzzles(undefined, undefined, undefined)
            .then(data => setCurrentPuzzle(data[0]))
            .catch((err) => console.error(err));
    }, []);

    return (
        <AppLayout title={t("play.navbar-title")}>
            { currentPuzzle ? <PlayPuzzle key={currentPuzzle.id} onNextPuzzleRequested={nextPuzzleRequested} puzzle={currentPuzzle}/> : null }
        </AppLayout>
    )
}