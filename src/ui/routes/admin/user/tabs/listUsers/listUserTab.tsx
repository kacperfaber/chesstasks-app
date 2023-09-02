import {useEffect, useState} from "react";
import {User} from "../../../../../../api/user";
import {ListUserTab_TableComponent} from "./tableComponent";
import {UserAdminService} from "../../../../../../services/admin/userAdminService";
import {Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

export const AdminManageUsers_ListUserTab = () => {
    const [users, setUsers] = useState<User[]>();

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const {t} = useTranslation();


    useEffect(() => {
        UserAdminService.allUsersFiltered({usernameLike: "", emailLike: ""}, limit, skip)
            .then(setUsers)
            .catch(() => alert("Nie mozna pobrac danych adminowskich o uzytkownikach"))
    }, [skip]);

    return (
        <>
            <ListUserTab_TableComponent data={users ?? []}/>

            <Box sx={{padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Button disabled={skip == 0} onClick={() => setSkip(old => old - limit)} variant={'contained'}>
                    <ArrowLeft/>
                    {t("_admin.manage-users.list-user-tab.previous-page")}
                </Button>

                <Button onClick={() => setSkip(old => old + limit)} variant={'contained'}>
                    {t("_admin.manage-users.list-user-tab.next-page")}
                    <ArrowRight/>
                </Button>
            </Box>
        </>
    )
}