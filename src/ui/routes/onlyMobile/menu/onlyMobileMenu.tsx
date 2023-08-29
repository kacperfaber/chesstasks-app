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
                    {t("layout.mobile.menu.home")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("layout.mobile.menu.puzzle-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.playSimpleWithoutCriteria())}>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.random-puzzle")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.AllThemes)}>
                    <ListItemIcon>
                        <Style/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.puzzle-by-theme")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.SearchAdvanced)}>
                    <ListItemIcon>
                        <Style/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.puzzle-search-advanced")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("layout.mobile.menu.history-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.PuzzleHistory)}>
                    <ListItemIcon>
                        <History/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.history")}
                </ListItemButton>

                <TransparentListSubHeader>
                    {t("layout.mobile.menu.friends-title")}
                </TransparentListSubHeader>

                <ListItemButton onClick={() => nav(Links.AllFriends)}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.friends")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.AllFriendRequests)}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.friend-requests")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.SearchUser)}>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("layout.mobile.menu.search-user")}
                </ListItemButton>
            </List>
        </AppLayout>
    )
}