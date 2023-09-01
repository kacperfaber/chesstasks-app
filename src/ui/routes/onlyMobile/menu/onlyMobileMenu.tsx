import {AppLayout} from "../../../components/layout/appLayout";
import {List, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import {History, Home, People, Search, Style} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {TransparentListSubHeader} from "../../../base/list/transparentListSubHeader";
import {Links} from "../../../../links";
import {useTranslation} from "react-i18next";

export const OnlyMobileMenu = () => {
    const nav = useNavigate();
    const {t} = useTranslation();

    return (
        <AppLayout title={''} mobile={{selectedNav: 'menu', showNav: true}}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.home")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("_layout._mobile.drawer-list.puzzle-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.playSimpleWithoutCriteria())}>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.random-puzzle")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.AllThemes)}>
                    <ListItemIcon>
                        <Style/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.puzzle-by-theme")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.SearchAdvanced)}>
                    <ListItemIcon>
                        <Style/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.puzzle-search-advanced")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("_layout._mobile.drawer-list.history-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.PuzzleHistory)}>
                    <ListItemIcon>
                        <History/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.history")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("_layout._mobile.drawer-list.friends-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.friends("friends"))}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.friends")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.friends("requests"))}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.friend-requests")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.SearchUser)}>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("_layout._mobile.drawer-list.search-user")}
                </ListItemButton>
            </List>
        </AppLayout>
    )
}