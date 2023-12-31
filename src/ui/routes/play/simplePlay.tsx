import {useLoaderData} from "react-router-dom";
import {SimplePlayCriteria} from "./simplePlayCriteria";
import {Puzzle} from "../../../api/puzzles/puzzle";
import {AppLayout} from "../../components/layout/appLayout";
import {PlayService} from "../../../services/play/playService";
import {PlayPuzzleContainer} from "../../components/puzzle/play/playPuzzleContainer";
import {useTranslation} from "react-i18next";
import {useMediaQuery, useTheme} from "@mui/material";
import {MobilePlayPuzzle} from "../../components/puzzle/play/mobile/mobilePlayPuzzle";
import {DesktopPlayPuzzle} from "../../components/puzzle/play/desktop/desktopPlayPuzzle";
import {NextPuzzleType} from "../../components/puzzle/feedback/puzzleFeedbackValue";
import {useState} from "react";
import {PuzzleService} from "../../../services/puzzle/puzzleService";

export const SimplePlay = () => {
    const {t} = useTranslation();

    // Loader data
    const simplePlayCriteria = useLoaderData() as SimplePlayCriteria;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [startPuzzleShown, setStartPuzzleShown] = useState(false);

    const reloadBuffer = (setBuffer: (arr: Puzzle[]) => void) => {
        if (simplePlayCriteria.startFrom && !startPuzzleShown) {
            PuzzleService.getPuzzle(simplePlayCriteria.startFrom)
                .then((puzzle) => setBuffer([puzzle]))
                .then(() => setStartPuzzleShown(true))
                .catch(() => alert("Couldn't fetch puzzle to start."));

            return;
        }

        PlayService.getPuzzles(undefined, simplePlayCriteria.themeId, simplePlayCriteria.database)
            .then(setBuffer)
            .catch(() => alert("could not fetch data"));
    }

    const renderPuzzleResponsive = (puzzle: Puzzle, onNextPuzzleRequested: (type: NextPuzzleType) => void) => {
        return isMobile
            ? <MobilePlayPuzzle key={puzzle.id} puzzle={puzzle} onNextPuzzleRequested={onNextPuzzleRequested}/>
            : <DesktopPlayPuzzle key={puzzle.id} puzzle={puzzle} onNextPuzzleRequested={onNextPuzzleRequested}/>
    }

    return (
        <AppLayout title={t("")} mobile={{selectedNav: "random-puzzles", showNav: false}}>
            <PlayPuzzleContainer render={renderPuzzleResponsive} onBufferNeedsUpdate={reloadBuffer}/>
        </AppLayout>
    )
}