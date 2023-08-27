import {Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {RegisterService} from "../../../../services/register/registerService";
import {Links} from "../../../../links";

const Register_InputGroup = ({defaultValue, label, setValue, type, readonly}: {
    setValue: (x: string) => void,
    label: string,
    type: "password" | "email" | "text",
    readonly?: boolean,
    defaultValue?: string
}) => {
    return (
        <div style={{marginTop: '5px'}}>
            <Typography variant={"body2"}>{label}</Typography>
            <TextField defaultValue={defaultValue ?? ""} InputProps={{readOnly: readonly ?? false}} type={type} variant={'filled'} onChange={(e) => setValue(e.target.value)} label={label}/>
        </div>
    )
}

export const Register_InputBasicData = ({increaseStep}: { increaseStep: () => void }) => {
    const {t} = useTranslation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const performRegister = () => {
        RegisterService.register({username, emailAddress: email, password})
            .then(increaseStep)
            .catch(() => alert("Cannot register")); // TODO: use snackbars
    }

    return (<>
        <Register_InputGroup type={'text'} setValue={setUsername}
                             label={t("login.register-section.input-basic-data.labels.username")}/>
        <Register_InputGroup type={'email'} setValue={setEmail}
                             label={t("login.register-section.input-basic-data.labels.email")}/>
        <Register_InputGroup type={'password'} setValue={setPassword}
                             label={t("login.register-section.input-basic-data.labels.password")}/>

        <Button onClick={performRegister}
                variant={'contained'}>{t("login.register-section.input-basic-data.submit")}</Button>
    </>);
}

export const Register_InputVerificationCode = ({nextStep }: { nextStep: () => void }) => {
    const {t} = useTranslation();
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");

    const performVerification = () => {
        RegisterService.confirm({emailAddress: email, code: code})
            .then(nextStep)
            .catch(() => alert("bad code")); // TODO: Use snackbars
    }

    return (<>
        <Register_InputGroup type={'email'} setValue={setEmail}
                             label={t("login.register-section.input-verification-code.labels.email")}/>
        <Register_InputGroup type={'text'} setValue={setCode}
                             label={t("login.register-section.input-verification-code.labels.code")}/>
        <Button onClick={performVerification}
                variant={'contained'}>{t("login.register-section.input-verification-code.submit")}</Button>
    </>);
}

export const Register_Success = () => {
    const {t} = useTranslation();
    const nav = useNavigate();

    const loginClick = () => {
        nav(Links.Login);
    }

    return (
        <>
            <Typography variant={'h5'}>{t("login.register-section.success.title")}</Typography>
            <Typography variant={'body2'}
                        color={'text.secondary'}>{t("login.register-section.success.body")}</Typography>
            <Button onClick={loginClick} variant={'contained'}>{t("login.register-section.success.login-in")}</Button>
        </>
    )
}