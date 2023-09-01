import {Box, Grid, Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {ResponsiveLogin_LoginTab} from "./tabs/login/loginTab";
import {ResponsiveLogin_RegisterTab} from "./tabs/register/registerTab";

export type ResponsiveLoginTabs = "login" | "register";

export const ResponsiveLogin = () => {
    const {t} = useTranslation();
    const [tab, setTab] = useState<ResponsiveLoginTabs>("login");

    const onTabChange = (e: React.SyntheticEvent, value: any) => {
        const v = value as ResponsiveLoginTabs;
        setTab(v);
    }

    return (
        <Box sx={{height: '100%'}}>
            <Grid container sx={{height: '100%'}}>
                <Grid item md={1} lg={2} xl={3}></Grid>

                <Grid item xs={12} md={10} lg={8} xl={6} sx={{height: '100%'}}>
                    <Box>
                        <Tabs value={tab} onChange={onTabChange}>
                            <Tab label={t("_all.login-in")} value={"login"}/>
                            <Tab label={t("_all.register-in")} value={"register"}/>
                        </Tabs>
                    </Box>

                    {
                        tab == "login" ? <ResponsiveLogin_LoginTab/> : null
                    }

                    {
                        tab == "register" ? <ResponsiveLogin_RegisterTab goToLogin={() => setTab("login")}/> : null
                    }
                </Grid>
            </Grid>
        </Box>
    )
}