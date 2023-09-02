import {ConfirmDialog, ConfirmDialogResult} from "../../../../../base/dialogs/confirmDialog";
import {useTranslation} from "react-i18next";

export interface ConfirmDeleteUserDialogAttrs {
    onClose: (res: ConfirmDialogResult) => void;
    open: boolean;
}

export const ConfirmDeleteUserDialog = ({open, onClose}: ConfirmDeleteUserDialogAttrs) => {
    const {t} = useTranslation();
    return (
        <ConfirmDialog title={t("_admin.manage-users.list-user-tab._comps.confirm-delete-user-dialog.title")}
                       body={t("_admin.manage-users.list-user-tab._comps.confirm-delete-user-dialog.body")}
                       confirmText={t("_all.confirm")}
                       cancelText={t("_all.close")}
                       onClose={onClose} open={open}/>
    )
}