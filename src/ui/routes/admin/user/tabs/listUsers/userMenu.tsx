import {User} from "../../../../../../api/user";
import {useTranslation} from "react-i18next";
import {Dialog, DialogContent, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

export type UserMenuAction = "delete" | "none";

export interface ListUserTab_TableComponent_UserMenuAttrs {
    user?: User;
    onClose: (user: User | undefined, act: UserMenuAction) => void;
}

export const ListUserTab_TableComponent_UserMenu = ({user, onClose}: ListUserTab_TableComponent_UserMenuAttrs) => {
    const {t} = useTranslation();

    return (
        <Dialog open={user != undefined} onClose={() => onClose(undefined, "none")}>
            <DialogContent>
                <Typography variant={'h5'}>
                    {t("_admin.manage-users.list-user-tab._comps.user-menu.title", {u: user})}
                </Typography>

                <Typography variant={'body2'} color={'text.secondary'}>
                    {t("_admin.manage-users.list-user-tab._comps.user-menu.body", {u: user})}
                </Typography>

                <List sx={{marginTop: '15px'}}>
                    <ListItemButton onClick={() => onClose(user, "delete")}>
                        <ListItemIcon>
                            <Delete/>
                        </ListItemIcon>

                        <ListItemText
                            primary={t("_admin.manage-users.list-user-tab._comps.user-menu.delete-action")}/>
                    </ListItemButton>
                </List>
            </DialogContent>
        </Dialog>
    )
}