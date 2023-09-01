import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useTranslation} from "react-i18next";

export type DeleteFriendConfirmDialogAttrs = {open: boolean, onConfirmed: () => void, onClose: () => void};

export const DeleteFriendConfirmDialog = ({open, onConfirmed, onClose}: DeleteFriendConfirmDialogAttrs) => {
    const {t} = useTranslation();

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {t("friends._comps.delete-friend-confirm-dialog.title")}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {t("friends._comps.delete-friend-confirm-dialog.body")}
                </DialogContentText>

                <DialogActions>
                    <Button autoFocus onClick={onClose}>{t("_all.cancel")}</Button>
                    <Button onClick={onConfirmed}>{t("friends._comps.delete-friend-confirm-dialog.confirm")}</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}