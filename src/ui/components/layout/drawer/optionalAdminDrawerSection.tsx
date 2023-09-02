import {TransparentListSubHeader} from "../../../base/list/transparentListSubHeader";
import {useAdminStatus} from "../../hooks/admin/useAdmin";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {ListItemButton, ListItemIcon} from "@mui/material";
import {CardGiftcard, VerifiedUser} from "@mui/icons-material";
import {Links} from "../../../../links";

export function OptionalAdminDrawerSection() {
    const isAdmin = useAdminStatus();
    const {t} = useTranslation();
    const nav = useNavigate();

    if (!isAdmin) return (<></>);

    const manageUsers = () => {
        nav(Links.Admin.manageUsers());
    }

    const managePuzzles = () => {
        nav(Links.Admin.managePuzzles());
    }

    return (
        <>
            <TransparentListSubHeader>{t("_layout._default.drawer-list._admin.title")}</TransparentListSubHeader>

            <ListItemButton onClick={manageUsers}>
                <ListItemIcon>
                    <VerifiedUser/>
                </ListItemIcon>

                {t("_layout._default.drawer-list._admin.manage-user")}
            </ListItemButton>

            <ListItemButton onClick={managePuzzles}>
                <ListItemIcon>
                    <CardGiftcard/>
                </ListItemIcon>

                {t("_layout._default.drawer-list._admin.manage-puzzle")}
            </ListItemButton>
        </>
    )
}