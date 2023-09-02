import {AppLayout} from "../../../components/layout/appLayout";
import {useState} from "react";
import {Box, Grid, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import {AdminManageUsers_ListUserTab} from "./tabs/listUsers/listUserTab";
import {CreateUserTab} from "./tabs/createUser/createUserTab";

export type AdminManageUsersTabs = "list_users" | "create_user";

export const AdminManageUsers = () => {
    const {t} = useTranslation();
    const [tab, setTab] = useState<AdminManageUsersTabs>("list_users");

    const onTabChanged = (event: React.SyntheticEvent, value: any) => {
        const v = value as AdminManageUsersTabs;
        setTab(v);
    }

    return (
        <AppLayout title={''}>
            <Grid container>
                <Grid item xs={0} xl={1}></Grid>

                <Grid item xs={12} xl={10}>
                    <Box sx={{borderBottom: '1px', borderColor: 'divider'}}>
                        <Tabs value={tab} onChange={onTabChanged}>
                            <Tab label={t("_admin.manage-users.tabs.list-users")} value={"list_users"}></Tab>
                            <Tab label={t("_admin.manage-users.tabs.create-user")} value={"create_user"}></Tab>
                        </Tabs>
                    </Box>

                   <Box>
                       {
                           tab == "list_users" ? <AdminManageUsers_ListUserTab/> : null
                       }

                       {
                           tab == "create_user" ? <CreateUserTab/> : null
                       }
                   </Box>
                </Grid>
            </Grid>
        </AppLayout>
    )
}