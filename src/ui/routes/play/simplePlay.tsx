import {useLoaderData} from "react-router-dom";
import {SimplePlayCriteria} from "./simplePlayCriteria";
import {Puzzle} from "../../../api/puzzles/puzzle";
import {AppLayout} from "../../components/layout/appLayout";
import {PlayService} from "../../../services/play/playService";
import {PlayPuzzleContainer} from "../../components/puzzle/play/playPuzzleContainer";
import {useTranslation} from "react-i18next";

export const SimplePlay = () => {
    const {t} = useTranslation();

    // Loader data
    const simplePlayCriteria = useLoaderData() as SimplePlayCriteria;

    const reloadBuffer = (setBuffer: (arr: Puzzle[]) => void) => {
        PlayService.getPuzzles(undefined, simplePlayCriteria.themeId, simplePlayCriteria.database)
            .then(setBuffer)
            .catch(() => alert("could not fetch data"));
    }

    return (
        <AppLayout title={t("play.navbar-title")} mobile={{selectedNav: "random-puzzles", showNav: true}}>
            <PlayPuzzleContainer onBufferNeedsUpdate={reloadBuffer}/>
        </AppLayout>
    )
}