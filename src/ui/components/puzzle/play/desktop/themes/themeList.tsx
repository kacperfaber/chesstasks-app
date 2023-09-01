import {PlayPaper} from "../../../playPaper";
import {Puzzle} from "../../../../../../api/puzzles/puzzle";
import {Button, Divider, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {isPuzzleFinished, PuzzleFeedbackValue} from "../../../feedback/puzzleFeedbackValue";
import {useTranslation} from "react-i18next";
import {Lock} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../../links";

export const DesktopPlayPuzzle_ThemeListItem = ({theme}: { theme: string }) => {
    const {t} = useTranslation();
    return (
        <>
            <ListItem secondaryAction={<Lock/>}>
                <ListItemButton onClick={() => {
                    console.error("navigation to theme from DesktopPlay is not implemented.")
                }}>
                    <ListItemText primary={theme}/>
                </ListItemButton>
            </ListItem>

            <Divider/>
        </>
    )
}

export const DesktopPlayPuzzle_List = ({puzzle}: { puzzle: Puzzle }) => {
    return (
        <List dense={true}>
            {puzzle.themes.map(theme => <DesktopPlayPuzzle_ThemeListItem key={theme} theme={theme}/>)}
        </List>
    );
}

export const DesktopPlayPuzzle_AllThemesButton = () => {
    const nav = useNavigate();
    const {t} = useTranslation();

    const click = () => nav(Links.AllThemes);

    return (
        <Button onClick={click} variant={'text'}>
            {t("puzzle._desktop._comps.all-themes._button.all-themes")}
        </Button>
    );
}

export const DesktopPlayPuzzle_ThemeList = ({feedback, puzzle}: { feedback: PuzzleFeedbackValue, puzzle: Puzzle }) => {
    const {t} = useTranslation();
    return (
        <PlayPaper>
            <Typography variant={'h5'}>
                {t("puzzle._desktop._comps.all-themes.title")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {isPuzzleFinished(feedback) ? t("puzzle._desktop._comps.all-themes.body-finished") : t("puzzle._desktop._comps.all-themes.body-not-finished")}
            </Typography>

            {
                isPuzzleFinished(feedback) ? <DesktopPlayPuzzle_List puzzle={puzzle}/> : <DesktopPlayPuzzle_AllThemesButton/>
            }
        </PlayPaper>
    )
}