import {Box, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {MobileFriendsScreen_FriendsTab} from "./tabs/friends/friendsTab";
import {MobileFriendsScreen_RequestsTab} from "./tabs/requests/requestsTab";
import {useLoaderData} from "react-router-dom";

export type MobileFriendsScreenTabs = "friends" | "requests";

export const MobileFriendsScreen = () => {
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
                    <Tab label={t("friends.all-friends")} value={"friends"}></Tab>
                    <Tab label={t("friends.requests")} value={"requests"}></Tab>
                </Tabs>
            </Box>

            { tab == "friends" ? <MobileFriendsScreen_FriendsTab/> : null}

            { tab == "requests" ? <MobileFriendsScreen_RequestsTab/> : null}

        </Box>
    )
}