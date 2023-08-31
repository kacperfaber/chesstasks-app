import {ResponsiveLogin_FormWrapper} from "../formWrapper";
import {Button, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Check} from "@mui/icons-material";

export const ResponsiveLogin_Success = ({goLogin}: {goLogin: () => void}) => {
    const {t} = useTranslation();
    return (
        <ResponsiveLogin_FormWrapper>
            <Check sx={{color: 'green'}} />

            <Typography variant={'h5'}>
                {t("login.success")}
            </Typography>

            <Button variant={'contained'} onClick={goLogin}>
                {t("all.login-in")}
            </Button>
        </ResponsiveLogin_FormWrapper>
    )
}