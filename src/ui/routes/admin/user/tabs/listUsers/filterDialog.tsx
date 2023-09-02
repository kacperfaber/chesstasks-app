import {Button, Dialog, DialogActions, DialogContent, TextField, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {ChangeEvent, useState} from "react";

export interface ListUserTab_FilterDialogAttrs {
    emailLike: string;
    usernameLike: string;
    onClose: (usernameLike: string, emailLike: string, save: boolean) => void;
    open: boolean;
}

export const ListUserTab_FilterDialog = (attrs: ListUserTab_FilterDialogAttrs) => {
    const {t} = useTranslation();

    const [username, setUsername] = useState(attrs.usernameLike);
    const [email, setEmail] = useState(attrs.emailLike);

    const defaultOnClose = () => {
        attrs.onClose(attrs.usernameLike, attrs.emailLike, false);
    }

    const doClose = () => {
        attrs.onClose(username, email, true);
    }

    return (
        <Dialog open={attrs.open} onClose={defaultOnClose}>
            <DialogContent>
                <Typography variant={'h5'}>
                    {t("_admin.manage-users.list-user-tab._comps.filter-dialog.title")}
                </Typography>

                <Typography variant={'body2'} color={'text.secondary'}>
                    {t("_admin.manage-users.list-user-tab._comps.filter-dialog.body")}
                </Typography>

                <TextField
                    value={username}
                    label={t("_admin.manage-users.list-user-tab._comps.filter-dialog.username-like-label")}
                    onChange={(ev) => setUsername(ev.target.value)}/>

                <TextField
                    value={email}
                    label={t("_admin.manage-users.list-user-tab._comps.filter-dialog.email-address-like-label")}
                    onChange={(ev) => setEmail(ev.target.value)}/>
            </DialogContent>

            <DialogActions>
                <Button variant={'contained'} onClick={defaultOnClose}>
                    {t("_all.cancel")}
                </Button>

                <Button variant={'contained'} onClick={doClose}>
                    {t("_admin.manage-users.list-user-tab._comps.filter-dialog.save")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}