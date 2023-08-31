import {AppLayout} from "../../components/layout/appLayout";
import {Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {LoginSection} from "./loginSection";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../links";
import {RegisterSection} from "./register/registerSection";
import {ResponsiveLogin} from "./responsive/login";

export const Login = () => {
    const {t} = useTranslation();
    const nav = useNavigate();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    /*
        <Grid container spacing={4}>
                <Grid item xs={12} xl={6}>
                    <LoginSection/>
                </Grid>

                <Grid item xs={12} xl={6}>
                    <RegisterSection/>
                </Grid>
            </Grid>
     */

    return (
        <AppLayout title={t("login.navbar-title")}>
            <ResponsiveLogin/>
        </AppLayout>
    );
};