import {useEffect, useState} from "react";
import {PlayService} from "../../../../services/play/playService";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {AppLayout} from "../../../components/layout/appLayout";
import {PlayPuzzle} from "../../../components/puzzle/play/playPuzzle";
import {useTranslation} from "react-i18next";
import {useLoaderData} from "react-router-dom";
import {AdvancedPlayCriteria} from "./advancedPlayCriteria";
import {stringify} from "ts-jest";

export const PlayAdvancedCriteria = () => {
    // Loader data
    const playCriteria = useLoaderData() as AdvancedPlayCriteria;

    return (
        <>
            {
                JSON.stringify(playCriteria)
            }
        </>
    )
}