import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {RegisterService} from "../../../../../../services/register/registerService";
import {Avatar, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {ResponsiveLogin_FormWrapper} from "../formWrapper";
import {AccountCircle, Email} from "@mui/icons-material";

export type ResponsiveLogin_InputBasicDataAgreeAttrs = {
    rodo: boolean;
    setRodo: (x: boolean) => void;

    privacy: boolean;
    setPrivacy: (x: boolean) => void;
}

const PrivacyButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={() => window.location.replace("/privacy.txt")} variant={'text'}>{t("__privacy.privacy-statement")}</Button>
    );
}

const RodoButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={() => window.location.replace("/rodo.txt")} variant={'text'}>{t("__privacy.rodo-statement")}</Button>
    );
}

export const ResponsiveLogin_InputBasicDataAgree = ({rodo, setRodo, privacy, setPrivacy}: ResponsiveLogin_InputBasicDataAgreeAttrs) => {
    const {t} = useTranslation();
    return (
        <>
            <FormControlLabel required control={<Checkbox checked={privacy} onChange={(e, v) => setPrivacy(v)}/>} label={<>{t("__privacy.register-privacy-statement")}<PrivacyButton/></>} />
            <FormControlLabel required control={<Checkbox checked={rodo} onChange={(e, v) => setRodo(v)}/>} label={<>{t("__privacy.register-rodo-statement")}<RodoButton/></>} />
        </>
    )
}

export const ResponsiveLogin_InputBasicData = ({nextStep}: {nextStep: () => void}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [privacy, setPrivacy] = useState(false);
    const [rodo, setRodo] = useState(false);
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

            <Typography variant={'h5'}>{t("login._responsive.register-tab._comps.input-basic-data.title")}</Typography>
            <Typography variant={'body2'} color={'text.secondary'}>{t("login._responsive.register-tab._comps.input-basic-data.body")}</Typography>

            <TextField
                sx={{width: '100%'}}
                label={t("login._responsive.register-tab._comps.input-basic-data.username")}
                required={true}
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}/>

            <TextField
                sx={{width: '100%'}}
                required={true}
                label={t("login._responsive.register-tab._comps.input-basic-data.email")}
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}/>

            <TextField
                sx={{width: '100%'}}
                required={true}
                label={t("login._responsive.register-tab._comps.input-basic-data.password")}
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}/>

            <ResponsiveLogin_InputBasicDataAgree rodo={rodo} setRodo={setRodo} privacy={privacy} setPrivacy={setPrivacy}/>

            <Button disabled={(!privacy) || (!rodo)} variant={'contained'} onClick={submit}>{t("login._responsive.register-tab._comps.input-basic-data.submit")}</Button>
        </ResponsiveLogin_FormWrapper>
    )
}