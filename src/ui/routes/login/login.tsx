import {AppLayout} from "../../components/layout/appLayout";
import {Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../links";
import {ResponsiveLogin} from "./responsive/login";

export const Login = () => {
    const {t} = useTranslation();

    return (
        <AppLayout title={''}>
            <ResponsiveLogin/>
        </AppLayout>
    );
};