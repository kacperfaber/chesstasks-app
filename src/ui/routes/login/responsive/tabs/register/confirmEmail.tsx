import {Avatar, Button, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {RegisterService} from "../../../../../../services/register/registerService";
import {ResponsiveLogin_FormWrapper} from "../formWrapper";
import {AccountCircle, Email} from "@mui/icons-material";

export const ResponsiveLogin_ConfirmEmail = ({nextStep}: { nextStep: () => void }) => {
    const {t} = useTranslation();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    const submit = () => {
        RegisterService.confirm({emailAddress: email, code: code})
            .then(nextStep)
            .catch(() => alert("bad code")); // TODO: Use snackbars
    }

    return (
        <ResponsiveLogin_FormWrapper>
            <Avatar>
                <Email/>
            </Avatar>

            <Typography variant={'h5'}>{t("login._responsive.register-tab._comps.confirm-email.title")}</Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("register.confirm-email.body")}
            </Typography>

            <TextField
                label={t("login._responsive.register-tab._comps.confirm-email.email")}
                sx={{width: '100%'}}
                required={true}
                type={email}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}/>

            <TextField
                required={true}
                sx={{width: '100%'}}
                label={t("login._responsive.register-tab._comps.confirm-email.code")}
                value={code}
                onChange={(e) => setCode(e.currentTarget.value)}/>

            <Button onClick={submit} variant={'contained'}>{t("login._responsive.register-tab._comps.confirm-email.submit")}</Button>
        </ResponsiveLogin_FormWrapper>
    )
}