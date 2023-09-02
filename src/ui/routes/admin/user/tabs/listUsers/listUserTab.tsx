import {useEffect, useState} from "react";
import {User} from "../../../../../../api/user";
import {ListUserTab_TableComponent} from "./tableComponent";
import {UserAdminService} from "../../../../../../services/admin/userAdminService";

export const AdminManageUsers_ListUserTab = () => {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        UserAdminService.allUsersFiltered({usernameLike: "", emailLike: ""})
            .then(setUsers)
            .catch(() => alert("Nie mozna pobrac danych adminowskich o uzytkownikach"))
    });

    return (<ListUserTab_TableComponent data={users ?? []}/>)
}