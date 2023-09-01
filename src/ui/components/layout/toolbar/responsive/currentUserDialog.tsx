import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useContext, useEffect} from "react";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {AuthenticationService} from "../../../../../services/authentication/authenticationService";
import {Delete} from "@mui/icons-material";

export const DesktopAppToolbar_CurrentUserDialog = ({open, onClose}: { open: boolean, onClose: () => void }) => {
    const {t} = useTranslation();

    const currentUserCtx = useContext(CurrentUserContext);

    const logout = () => {
        AuthenticationService.logout()
            .then(() => currentUserCtx.setValue(undefined))
            .catch(() => {}) // TODO
    }

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(currentUserCtx.setValue)
            .catch(() => {
            }) // TODO
    }, []);

    const closeClick = () => onClose();

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Typography variant={'h5'}>
                    {t("_layout._responsive._comps.current-user-dialog.title")}
                </Typography>

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar>
                                {currentUserCtx.value?.username?.charAt(0)?.toUpperCase()}
                            </Avatar>
                        </ListItemIcon>

                        <ListItemText
                            primary={currentUserCtx.value?.username}
                            secondary={t("_layout._responsive._comps.current-user-dialog.this-user-logged-in")}/>
                    </ListItemButton>

                    <ListItemButton onClick={logout}>
                        <ListItemIcon>
                            <Delete/>
                        </ListItemIcon>

                        <ListItemText
                            primary={t("_all.logout")}/>
                    </ListItemButton>
                </List>
            </DialogContent>

            <DialogActions>
                <Button variant={'text'} onClick={closeClick}>
                    {t("_all.close")}
                </Button>
            </DialogActions>
        </Dialog>
    )
}