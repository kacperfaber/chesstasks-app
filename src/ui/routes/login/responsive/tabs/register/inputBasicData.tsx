import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {RegisterService} from "../../../../../../services/register/registerService";
import {Avatar, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {ResponsiveLogin_FormWrapper} from "../formWrapper";
import {AccountCircle, Email} from "@mui/icons-material";

export const ResponsiveLogin_InputBasicData = ({nextStep}: {nextStep: () => void}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const {t} = useTranslation();

    const submit = () => {
        RegisterService.register({username, emailAddress: email, password})
            .then(nextStep)
            .catch(() => alert("Cannot register")); // TODO: use snackbars
    }

    return (
        <ResponsiveLogin_FormWrapper>
            <Avatar>
                <AccountCircle/>
            </Avatar>

            <Typography variant={'h5'}>{t("register.register.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("register.register.body")}</Typography>

            <TextField
                sx={{width: '100%'}}
                label={t("register.username")}
                required={true}
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}/>

            <TextField
                sx={{width: '100%'}}
                required={true}
                label={t("register.email")}
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}/>

            <TextField
                sx={{width: '100%'}}
                required={true}
                label={t("register.password")}
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}/>

            <FormControlLabel required control={<Checkbox checked={agree} onChange={(e, v) => setAgree(v)}/>} label={t("register.i-agree")} />

            <Button disabled={!agree} variant={'contained'} onClick={submit}>{t("register.submit")}</Button>
        </ResponsiveLogin_FormWrapper>
    )
}