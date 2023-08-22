import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListSubheader} from "@mui/material";
import {AppDrawer_CurrentUser} from "./currentUser";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import {t} from "i18next";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../links";
import {History, Home, LocalPizza, People, Person, Search, Style} from "@mui/icons-material";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

const TransparentListSubheader = ({children}: {children: string}) => {
    return <ListSubheader sx={{bgcolor: 'transparent', my: '10px'}}>{children}</ListSubheader>;
}

export const AppDrawer = (args: AppDrawerArgs) => {
    // TODO: Instead this use data from 'currentUserContext'
    const userContext = useContext(CurrentUserContext);

    const nav = useNavigate();

    const notImpl = () => { throw Error("AppDrawer.login and AppDrawer.logout not implemented.") };

    // TODO: use another drawer, when user is not signed in.

    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            <AppDrawer_CurrentUser login={ () => nav(Links.Login) } logout={ notImpl } username={userContext.value?.username}/>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    {t("drawer.home")}
                </ListItemButton>

                <TransparentListSubheader>
                    {t("drawer.puzzle-title")}
                </TransparentListSubheader>

                <ListItemButton>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("drawer.random-puzzle")}
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <Style/>
                    </ListItemIcon>
                    {t("drawer.puzzle-by-theme")}
                </ListItemButton>

                <TransparentListSubheader>
                    {t("drawer.history-title")}
                </TransparentListSubheader>

                <ListItemButton>
                    <ListItemIcon>
                        <History/>
                    </ListItemIcon>
                    {t("drawer.history")}
                </ListItemButton>

                <TransparentListSubheader>
                    {t("drawer.friends-title")}
                </TransparentListSubheader>

                <ListItemButton onClick={() => nav(Links.AllFriends)}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("drawer.friends")}
                </ListItemButton>

                <ListItemButton onClick={() => nav(Links.AllFriendRequests)}>
                    <ListItemIcon>
                        <People/>
                    </ListItemIcon>
                    {t("drawer.friend-requests")}
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    {t("drawer.search-user")}
                </ListItemButton>
            </List>
        </Drawer>
    )
}