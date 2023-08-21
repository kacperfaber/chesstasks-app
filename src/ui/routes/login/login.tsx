import {AppLayout} from "../../components/layout/appLayout";
import {t} from "i18next";
import {Button, Grid, Typography} from "@mui/material";
import {LoginSection} from "./loginSection";
import {screenNotImplemented} from "../../../commons/notImplemented";

export const Login = () => {
    return (
        <AppLayout title={t("login.navbar-title")}>
            <Grid container spacing={4}>
                <Grid item xs={12} xl={6}>
                    <LoginSection/>
                </Grid>

                <Grid item xs={12} xl={6}>
                    <Typography variant={'h6'}>{t("login.register-section.title")}</Typography>
                    <Typography variant={'body2'}>{t("login.register-section.body")}</Typography>

                    <Button onClick={screenNotImplemented("/register")} variant={'contained'}>{t("all.register-in")}</Button>
                </Grid>
            </Grid>
        </AppLayout>
    );
};