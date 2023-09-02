import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {UserAdminService} from "../../../../../../services/admin/userAdminService";
import {ResponsiveLogin_FormWrapper} from "../../../../login/responsive/tabs/formWrapper";
import {Avatar, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

export type CreateUserResult = "Fail" | "CodeSent" | "Ok" | undefined;

export const CreateUserTab = () => {
    const {t} = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [skipVerification, setSkipVerification] = useState(false);
    const [result, setResult] = useState<CreateUserResult>();

    const submit = () => {
        let body = {
            username, password, emailAddress: email, skipVerification
        };

        UserAdminService.registerUser(body)
            .then((r) => setResult(r))
            .catch(() => alert("Could not register this user."))
            .catch(() => setResult("Fail"));
    }

    return (
        <ResponsiveLogin_FormWrapper>
            <Avatar>
                <AccountCircle/>
            </Avatar>

            <Typography variant={'h5'}>
                {t("_admin.manage-users.create-user-tab.title")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("_admin.manage-users.create-user-tab.body")}
            </Typography>

            <TextField
                error={result == "Fail"}
                sx={{width: '100%'}}
                label={t("_admin.manage-users.create-user-tab.username-label")}
                required={true}
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}/>

            <TextField
                error={result == "Fail"}
                sx={{width: '100%'}}
                label={t("_admin.manage-users.create-user-tab.email-label")}
                type={'email'}
                required={true}
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}/>

            <TextField
                error={result == "Fail"}
                sx={{width: '100%'}}
                label={t("_admin.manage-users.create-user-tab.password-label")}
                type={'password'}
                required={true}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}/>

            <FormControlLabel required control={<Checkbox checked={skipVerification} onChange={(e, v) => setSkipVerification(v)}/>} label={t("_admin.manage-users.create-user-tab.skip-verification-label")} />

            <Button variant={'contained'} onClick={submit}>{t("_admin.manage-users.create-user-tab.submit")}</Button>
        </ResponsiveLogin_FormWrapper>
    )
}