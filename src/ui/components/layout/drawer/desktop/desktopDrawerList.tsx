import {List, ListItemButton, ListItemIcon} from "@mui/material";
import {History, Home, People, Search, Style} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {TransparentListSubHeader} from "../../../../base/list/transparentListSubHeader";
import {Links} from "../../../../../links";

export const DesktopDrawer_List = () => {
    const {t} = useTranslation();
    const nav = useNavigate();
    return (
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                {t("drawer.home")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("drawer.puzzle-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.playSimpleWithoutCriteria())}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("drawer.random-puzzle")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.AllThemes)}>
                <ListItemIcon>
                    <Style/>
                </ListItemIcon>
                {t("drawer.puzzle-by-theme")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.SearchAdvanced)}>
                <ListItemIcon>
                    <Style/>
                </ListItemIcon>
                {t("drawer.puzzle-search-advanced")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("drawer.history-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.PuzzleHistory)}>
                <ListItemIcon>
                    <History/>
                </ListItemIcon>
                {t("drawer.history")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("drawer.friends-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.friends(null))}>
                <ListItemIcon>
                    <People/>
                </ListItemIcon>
                {t("drawer.friends")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.friends(null))}>
                <ListItemIcon>
                    <People/>
                </ListItemIcon>
                {t("drawer.friend-requests")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.SearchUser)}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("drawer.search-user")}
            </ListItemButton>
        </List>
    )
}