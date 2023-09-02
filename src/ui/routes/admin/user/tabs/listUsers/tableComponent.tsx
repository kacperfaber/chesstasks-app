import {useTranslation} from "react-i18next";
import {User} from "../../../../../../api/user";
import {IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {getDate} from "../../../../../../commons/getDate";
import MenuIcon from "@mui/icons-material/menu";
import {ListUserTab_TableComponent_UserMenu, UserMenuAction} from "./userMenu";
import {useState} from "react";
import {ConfirmDeleteUserDialog} from "./confirmDeleteUserDialog";
import {ConfirmDialogResult} from "../../../../../base/dialogs/confirmDialog";
import {AdminService} from "../../../../../../services/admin/adminService";
import {UserAdminService} from "../../../../../../services/admin/userAdminService";

export type ListUserTab_TableComponentAttrs = {
    data: User[];
}

export const ListUserTab_TableComponentRow = ({showUserMenuFor, item}: {showUserMenuFor: (u: User) => void, item: User}) => {
    const getCreatedAtAsString = () => getDate(item.createdAt);

    return (
        <TableRow>
            <TableCell>
                {item.id}
            </TableCell>

            <TableCell>
                {item.username}
            </TableCell>

            <TableCell>
                {item.emailAddress}
            </TableCell>

            <TableCell>
                {getCreatedAtAsString()}
            </TableCell>

            <TableCell>
                <IconButton onClick={() => showUserMenuFor(item)}>
                    <MenuIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export const ListUserTab_TableComponent = ({data}: ListUserTab_TableComponentAttrs) => {
    const {t} = useTranslation();

    const headerName = (h: string) => {
        return t(`_admin.manage-users.list-user-tab.table.headers.${h}`);
    }

    const [menuForUser, setMenuForUser] = useState<User>();

    const [userToDelete, setUserToDelete] = useState<User>();

    const consumeMenuResult = (user: User | undefined, action: UserMenuAction) => {
        if (action == "delete") {
            setUserToDelete(user);
        }

        setMenuForUser(undefined);
    }

    const consumeConfirmDeleteUserDialogResult = (res: ConfirmDialogResult) => {
        if (res == "confirmed") {
            UserAdminService.deleteUser(userToDelete!!.id)
                .then(() => alert("deleted"))
                .catch(() => alert("could not delete user"))
                .finally(() => setUserToDelete(undefined));
        }

        else {
            setUserToDelete(undefined)
        }
    }

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {headerName("id")}
                            </TableCell>

                            <TableCell>
                                {headerName("username")}
                            </TableCell>

                            <TableCell>
                                {headerName("emailAddress")}
                            </TableCell>

                            <TableCell>
                                {headerName("createdAt")}
                            </TableCell>

                            <TableCell>
                                {headerName("actions")}
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data?.map(item => <ListUserTab_TableComponentRow showUserMenuFor={(i) => setMenuForUser(i)} item={item} key={item.id}/>)}
                    </TableBody>
                </Table>
            </TableContainer>

            <ListUserTab_TableComponent_UserMenu user={menuForUser} onClose={consumeMenuResult}/>

            <ConfirmDeleteUserDialog onClose={consumeConfirmDeleteUserDialogResult} open={userToDelete != undefined}/>
        </>
    )
}