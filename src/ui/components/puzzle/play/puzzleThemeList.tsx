import {Puzzle} from "../../../../api/puzzles/puzzle";
import {PlayPaper} from "../playPaper";
import {List, ListItemButton, ListItemText, Paper, Table, TableContainer, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {AllThemeContext} from "../../../contexts/theme/allThemeContext";
import {ThemeService} from "../../../../services/theme/themeService";
import {Theme} from "../../../../api/theme/theme";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../links";

export type PuzzleThemeListAttrs = {
    puzzle: Puzzle;
}

export const PuzzleThemeListItem = ({themeName, themeId}: {themeId: number, themeName: string}) => {
    const {t} = useTranslation();
    const nav = useNavigate();

    const click = () => {
        nav(Links.playSimple({themeId: themeId}));
    }

    return (
        <ListItemButton dense={true} onClick={click}>
            <ListItemText primary={themeName} secondary={t("puzzle-theme-list.more-this-theme-puzzles")}/>
        </ListItemButton>
    );
}

export const PuzzleThemeList = ({puzzle}: PuzzleThemeListAttrs) => {
    const {t} = useTranslation();

    const [themes, setThemes] = useState<{id: number, name: string}[]>();

    useEffect(() => {
        const then = (themes: Array<Theme>) => {
            const t = themes.map(th => {return {id: th.id, name: th.name}});
            setThemes(t);
        }

        ThemeService.getAllThemes()
            .then(then)
            .catch(() => {}) // TODO
    }, []);

    return (
        <PlayPaper>
            <Typography variant={'h5'}>{t("puzzle-theme-list.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("puzzle-theme-list.body")}</Typography>

            <List>
                {themes?.map(th => {
                    return (<PuzzleThemeListItem key={th.id} themeId={th.id} themeName={th.name}/>);
                })}
            </List>
        </PlayPaper>
    )
}