import {PlayService} from "../../../../services/play/playService";
import {Puzzle} from "../../../../api/puzzles/puzzle";
import {useLoaderData} from "react-router-dom";
import {AdvancedPlayCriteria} from "./advancedPlayCriteria";
import {PlayPuzzleContainer} from "../../../components/puzzle/play/playPuzzleContainer";
import {NextPuzzleType} from "../../../components/puzzle/play/playPuzzle";
import {useMediaQuery, useTheme} from "@mui/material";
import {MobilePlayPuzzle} from "../../../components/puzzle/play/mobile/mobilePlayPuzzle";
import {DesktopPlayPuzzle} from "../../../components/puzzle/play/desktop/desktopPlayPuzzle";
import {AppLayout} from "../../../components/layout/appLayout";

export const PlayAdvancedCriteria = () => {
    // Loader data
    const playCriteria = useLoaderData() as AdvancedPlayCriteria;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const updateBuffer = (setBuffer: (arr: Array<Puzzle>) => void) => {
        PlayService.searchPuzzles(playCriteria.ranking, playCriteria.themeIds)
            .then(setBuffer)
            .catch(() => alert("cannot fetch using searchPuzzles"));
    }

    const renderPuzzleComp = (puzzle: Puzzle, onNextPuzzleRequested: (type: NextPuzzleType) => void) => {
        return isMobile
            ? <MobilePlayPuzzle puzzle={puzzle} onNextPuzzleRequested={onNextPuzzleRequested}/>
            : <DesktopPlayPuzzle puzzle={puzzle} onNextPuzzleRequested={onNextPuzzleRequested}/>
    }

    return (
        <AppLayout title={''} mobile={{}}>
            <PlayPuzzleContainer
                onNextPuzzleRequested={() => {}}
                onGoodMove={() => {}}
                onBadMove={() => {}}
                render={renderPuzzleComp}
                onBufferNeedsUpdate={updateBuffer}/>
        </AppLayout>
    )
}