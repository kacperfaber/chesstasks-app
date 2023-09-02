import {CenterWrapper} from "../wrappers/centerWrapper";
import {AppLayout} from "../layout/appLayout";
import {Avatar, Button, Typography} from "@mui/material";
import {Error} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../links";

export const ErrorElement = () => {
    const {t} = useTranslation();
    const nav = useNavigate();
    return (
        <AppLayout title={''}>
            <CenterWrapper>
                <Avatar>
                    <Error/>
                </Avatar>

                <Typography variant={'h5'}>
                    {t("error-element.title")}
                </Typography>

                <Typography variant={'body2'} color={'text.secondary'}>
                    {t("error-element.body")}
                </Typography>

                <Button onClick={() => nav(Links.Index)} variant={'contained'}>
                    {t("error-element.go-home")}
                </Button>
            </CenterWrapper>
        </AppLayout>
    )
}