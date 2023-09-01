import {Box, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {ResponsiveFriendsScreen_FriendsTab} from "./tabs/friends/friendsTab";
import {ResponsiveFriendsScreen_RequestsTab} from "./tabs/requests/requestsTab";
import {useLoaderData} from "react-router-dom";

export type MobileFriendsScreenTabs = "friends" | "requests";

export const ResponsiveFriendsScreen = () => {
    const {t} = useTranslation();
    const initialTab = useLoaderData() as MobileFriendsScreenTabs;
    const [tab, setTab] = useState<MobileFriendsScreenTabs>(initialTab);

    const onTabChange = (e: React.SyntheticEvent, value: any) => {
        const v = value as MobileFriendsScreenTabs;
        setTab(v);
    }

    return (
        <Box>
            <Box sx={{width: '100%', borderBottom: '1px', borderColor: 'divider'}}>
                <Tabs value={tab} onChange={onTabChange} variant={'fullWidth'}>
                    <Tab label={t("_all.friends")} value={"friends"}></Tab>
                    <Tab label={t("_all.friend-requests")} value={"requests"}></Tab>
                </Tabs>
            </Box>

            { tab == "friends" ? <ResponsiveFriendsScreen_FriendsTab/> : null}

            { tab == "requests" ? <ResponsiveFriendsScreen_RequestsTab/> : null}

        </Box>
    )
}