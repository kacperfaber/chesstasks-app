import {Button, Grid, Paper, Snackbar, TextField, Typography} from "@mui/material";
import {t} from "i18next";
import {useRef, useState} from "react";
import {AuthenticationService} from "../../../services/authentication/authenticationService";

export const LoginSection = () => {
    const [isError, setIsError] = useState(false);

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const onSuccess = () => {

    }

    const performAuth = () => {
        return AuthenticationService.authenticate(
            login,
            pass
        );
    }

    const submit = () => {
        performAuth().then(onSuccess).catch(() => setIsError(true));
    }

    return <>
        <Typography variant={'h6'}>{t("login.login-section.title")}</Typography>
        <Typography variant={'body2'}>{t("login.login-section.body")}</Typography>

        <Paper elevation={1} style={{padding: '10px', marginTop: '10px'}}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField onChange={(v) => setLogin(v.target.value)} sx={{my: '5px'}} label={t('login.login-label')} variant={'outlined'}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField onChange={(v) => setPass(v.target.value)} sx={{my: '5px'}} type={'password'} label={t('login.password-label')}
                               variant={'outlined'}></TextField>
                </Grid>
            </Grid>

            <Button onClick={submit} variant={'contained'}>{t('login.submit')}</Button>
        </Paper>

        <Snackbar
            open={isError}
            onClose={() => setIsError(false)}
            autoHideDuration={3000}
            message={t("login.login-failed.title")}
        ></Snackbar>
    </>;
}