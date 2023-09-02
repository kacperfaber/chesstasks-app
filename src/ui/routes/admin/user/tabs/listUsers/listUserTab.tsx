import {useEffect, useState} from "react";
import {User} from "../../../../../../api/user";
import {ListUserTab_TableComponent} from "./tableComponent";
import {UserAdminService} from "../../../../../../services/admin/userAdminService";
import {Box, Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ArrowLeft, ArrowRight, Filter} from "@mui/icons-material";
import {ListUserTab_FilterDialog} from "./filterDialog";

export const AdminManageUsers_ListUserTab = () => {
    const [users, setUsers] = useState<User[]>();

    const [usernameLike, setUsernameLike] = useState("");
    const [emailLike, setEmailLike] = useState("");

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);

    const {t} = useTranslation();

    const [filterDialogOpen, setFilterDialogOpen] = useState(false);

    const consumeFilterDialogResult = (username: string, email: string, save: boolean) => {
        if (save) {
            setEmailLike(email);
            setUsernameLike(username);
            fetchData(username, email);
        }
        setFilterDialogOpen(false);
    }

    const fetchData = (usernameLike?: string, emailLike?: string) => {
        UserAdminService.allUsersFiltered({usernameLike: usernameLike ?? "", emailLike: emailLike ?? ""}, limit, skip)
            .then(setUsers)
            .catch(() => alert("Nie mozna pobrac danych adminowskich o uzytkownikach"));
    }

    useEffect(() => {
        fetchData();
    }, [skip]);

    const showFilters = () => {
        setFilterDialogOpen(true);
    }

    return (
        <>
            <Box sx={{padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Button onClick={showFilters} variant={'contained'}>
                    <Filter/>
                    {t("_admin.manage-users.list-user-tab.show-filters")}
                </Button>
            </Box>

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

            <ListUserTab_FilterDialog emailLike={emailLike} usernameLike={usernameLike} onClose={consumeFilterDialogResult} open={filterDialogOpen}/>
        </>
    )
}