import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListSubheader} from "@mui/material";
import {AppDrawer_CurrentUser} from "./currentUser";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../links";
import {History, Home, LocalPizza, People, Person, Search, Style} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {AuthenticationService} from "../../../../services/authentication/authenticationService";
import {AppDrawer_List} from "./appDrawerList";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

export const AppDrawer = (args: AppDrawerArgs) => {
    // TODO: Instead this use data from 'currentUserContext'
    const userContext = useContext(CurrentUserContext);

    const nav = useNavigate();

    const logout = () => {
        AuthenticationService.logout()
            .then(() => userContext.setValue(undefined))
            .catch(() => {});
    }

    // TODO: use another drawer, when user is not signed in.

    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            <AppDrawer_CurrentUser login={ () => nav(Links.Login) } logout={ logout } username={userContext.value?.username}/>

            {userContext.value ? <AppDrawer_List/> : null}
        </Drawer>
    )
}