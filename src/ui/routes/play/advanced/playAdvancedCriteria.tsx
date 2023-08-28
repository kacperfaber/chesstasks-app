import {PlayService} from "../../../../services/play/playService";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {useLoaderData} from "react-router-dom";
import {AdvancedPlayCriteria} from "./advancedPlayCriteria";
import {PlayPuzzleContainer} from "../../../components/puzzle/play/playPuzzleContainer";

export const PlayAdvancedCriteria = () => {
    // Loader data
    const playCriteria = useLoaderData() as AdvancedPlayCriteria;

    const updateBuffer = (setBuffer: (arr: Array<Puzzle>) => void) => {
        PlayService.searchPuzzles(playCriteria.ranking, playCriteria.themeIds)
            .then(setBuffer)
            .catch(() => alert("cannot fetch using searchPuzzles"));
    }

    return (
        <PlayPuzzleContainer
            onNextPuzzleRequested={() => {}}
            onGoodMove={() => {}}
            onBadMove={() => {}}
            onBufferNeedsUpdate={updateBuffer}/>
    )
}