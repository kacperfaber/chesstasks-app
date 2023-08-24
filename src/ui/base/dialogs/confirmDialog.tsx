import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export type ConfirmDialogResult = "confirmed" | "canceled";

export type ConfirmDialogAttrs = {
    title: string;
    body: string;
    confirmText: string;
    cancelText: string;
    onClose: (res: ConfirmDialogResult) => void;
    open: boolean;
}

export const ConfirmDialog = ({title, body, confirmText, cancelText, onClose, open}: ConfirmDialogAttrs) => {
    const close = (newRes: ConfirmDialogResult) => {
        onClose(newRes);
    }

    return (
        <Dialog open={open} onClose={() => close("canceled")}>
            <DialogTitle>
                {title}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {body}
                </DialogContentText>

                <DialogActions>
                    <Button autoFocus onClick={ () => close("canceled") }>{cancelText}</Button>
                    <Button autoFocus onClick={ () => close("confirmed") }>{confirmText}</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}