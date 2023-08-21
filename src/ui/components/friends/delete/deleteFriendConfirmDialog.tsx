import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {t} from "i18next";

export type DeleteFriendConfirmDialogAttrs = {open: boolean, onConfirmed: () => void, onClose: () => void};

export const DeleteFriendConfirmDialog = ({open, onConfirmed, onClose}: DeleteFriendConfirmDialogAttrs) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {t("delete-friend-confirm-dialog.title")}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {t("delete-friend-confirm-dialog.text")}
                </DialogContentText>

                <DialogActions>
                    <Button autoFocus onClick={onClose}>{t("delete-friend-confirm-dialog.actions.cancel")}</Button>
                    <Button onClick={onConfirmed}>{t("delete-friend-confirm-dialog.actions.confirm")}</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}