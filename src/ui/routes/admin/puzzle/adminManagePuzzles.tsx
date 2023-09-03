import {AppLayout} from "../../../components/layout/appLayout";
import {Box, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {AdminManagePuzzles_ManagePuzzleTab} from "./tabs/managePuzzle/managePuzzleTab";

export type AdminManagePuzzlesTab = "manage_puzzle";

export const AdminManagePuzzles = () => {
    const {t} = useTranslation();
    const [tab, setTab] = useState<AdminManagePuzzlesTab>("manage_puzzle");

    const onTabChange = (ev: React.SyntheticEvent, value: any) => {
        const v = value as AdminManagePuzzlesTab;
        setTab(v);
    }

    return (<AppLayout title={''}>
        <Box>
            <Tabs value={tab} onChange={onTabChange}>
                <Tab label={t("_admin.manage-puzzles.tabs.manage-puzzles")} value={'manage_puzzle'}/>
            </Tabs>
        </Box>

        <Box marginTop={'15px'}>
            { tab == "manage_puzzle" ? <AdminManagePuzzles_ManagePuzzleTab/> : null}
        </Box>
    </AppLayout>);
}