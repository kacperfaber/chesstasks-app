import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {List, ListItemButton, ListItemIcon} from "@mui/material";
import {History, Home, People, Search, Style} from "@mui/icons-material";
import {TransparentListSubHeader} from "../../../base/list/transparentListSubHeader";
import {Links} from "../../../../links";
import {PrivacyNav} from "../../../../commons/privacy/privacyNav";

export function DefaultDrawerList() {
    const {t} = useTranslation();
    const nav = useNavigate();
    return (
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.home")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("_layout._desktop.drawer-list.puzzle-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.playSimpleWithoutCriteria())}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.random-puzzle")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.AllThemes)}>
                <ListItemIcon>
                    <Style/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.puzzle-by-theme")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.SearchAdvanced)}>
                <ListItemIcon>
                    <Style/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.puzzle-search-advanced")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("_layout._desktop.drawer-list.history-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.PuzzleHistory)}>
                <ListItemIcon>
                    <History/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.history")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("_layout._desktop.drawer-list.friends-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={() => nav(Links.friends(null))}>
                <ListItemIcon>
                    <People/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.friends")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.friends(null))}>
                <ListItemIcon>
                    <People/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.friend-requests")}
            </ListItemButton>

            <ListItemButton onClick={() => nav(Links.SearchUser)}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.search-user")}
            </ListItemButton>

            <TransparentListSubHeader>
                {t("_layout._desktop.drawer-list.privacy-title")}
            </TransparentListSubHeader>

            <ListItemButton onClick={PrivacyNav.rodoStatement}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.rodo-statement")}
            </ListItemButton>

            <ListItemButton onClick={PrivacyNav.privacyStatement}>
                <ListItemIcon>
                    <Search/>
                </ListItemIcon>
                {t("_layout._desktop.drawer-list.privacy-statement")}
            </ListItemButton>
        </List>
    )
}