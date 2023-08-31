import {Box, Grid, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {MobileLogin_LoginTab} from "./tabs/login/loginTab";
import {MobileLogin_RegisterTab} from "./tabs/register/registerTab";

export type MobileLoginTabs = "login" | "register";

export const MobileLogin = () => {
    const {t} = useTranslation();
    const [tab, setTab] = useState<MobileLoginTabs>("login");

    const onTabChange = (e: React.SyntheticEvent, value: any) => {
        const v = value as MobileLoginTabs;
        setTab(v);
    }

    return (
        <Box sx={{height: '100%'}}>
            <Box>
                <Tabs value={tab} onChange={onTabChange}>
                    <Tab label={t("all.login-in")} value={"login"}/>
                    <Tab label={t("all.register-in")} value={"register"}/>
                </Tabs>
            </Box>

            {
                tab == "login" ? <MobileLogin_LoginTab/> : null
            }

            {
                tab == "register" ? <MobileLogin_RegisterTab/> : null
            }
        </Box>
    )
}