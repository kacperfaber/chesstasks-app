import {AppBar, Badge, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {AccountCircle, Settings} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {DesktopAppToolbar_CurrentUserDialog} from "./currentUserDialog";
import {useContext, useEffect, useState} from "react";
import {Links} from "../../../../../links";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {AuthenticationService} from "../../../../../services/authentication/authenticationService";

export const DesktopAppToolbar_UserActions = () => {
    const nav = useNavigate();
    const [currentUserDialog, setCurrentUserDialog] = useState(false);

    const onAccountClicked = () => {
        setCurrentUserDialog(true);
    }

    const settingsClick = () => {
        nav(Links.Settings);
    }

    return (
        <>
            <IconButton onClick={settingsClick}>
                <Settings/>
            </IconButton>

            <IconButton onClick={onAccountClicked}>
                <AccountCircle/>
            </IconButton>

            <DesktopAppToolbar_CurrentUserDialog open={currentUserDialog}
                                                 onClose={() => setCurrentUserDialog(false)}/>
        </>
    )
}

export const DesktopAppToolbar_AnonymousActions = () => {
    const {t} = useTranslation();
    const nav = useNavigate();

    return (
        <Button onClick={() => nav(Links.Login)} variant={'contained'}>{t("all.login-in")}</Button>
    )
}

export const ResponsiveAppToolbar = () => {
    const {t} = useTranslation();

    const userCtx = useContext(CurrentUserContext);

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(userCtx.setValue)
            .catch(() => {
            }) // TODO
    }, []);

    return (
        <>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant={'h5'}>
                        {t("layout.navbar.title")}
                    </Typography>

                    <Box sx={{flexGrow: 1}}></Box>

                    {
                        userCtx.value ? <DesktopAppToolbar_UserActions/> : <DesktopAppToolbar_AnonymousActions/>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}