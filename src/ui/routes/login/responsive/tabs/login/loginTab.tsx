import {Links} from "../../../../../../links";
import {AuthenticationService} from "../../../../../../services/authentication/authenticationService";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {CurrentUserContext} from "../../../../../contexts/authentication/currentUserContext";
import styled from "styled-components";
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {ResponsiveLogin_FormWrapper} from "../formWrapper";

const LoginFormWrapper = styled.div`
  width: 100%;
  height: 60%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResponsiveLogin_LoginTab = () => {
    const {t} = useTranslation();
    const nav = useNavigate();
    const userCtx = useContext(CurrentUserContext);

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const onSuccess = () => {
        nav(Links.Index);
    }

    const performAuth = () => {
        return AuthenticationService.auth(
            login,
            pass
        );
    }

    const submit = () => {
        performAuth()
            .then((user) => userCtx.setValue(user))
            .then(onSuccess)
            .catch(() => alert("cannot login")); // TODO
    }

    return (
        <ResponsiveLogin_FormWrapper>
            <Avatar>
                <AccountCircle/>
            </Avatar>

            <Typography variant={'h5'}>{t("login.title")}</Typography>

            <TextField onChange={(v) => setLogin(v.target.value)} sx={{width: '100%', my: '5px'}}
                       label={t('login.login-label')}
                       variant={'outlined'}></TextField>

            <TextField onChange={(v) => setPass(v.target.value)} sx={{width: '100%', my: '5px'}}
                       type={'password'}
                       label={t('login.password-label')}
                       variant={'outlined'}></TextField>

            <Button onClick={submit} variant={'contained'}>{t('login.submit')}</Button>
        </ResponsiveLogin_FormWrapper>
    )
}