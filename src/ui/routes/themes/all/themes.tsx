import {AppLayout} from "../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Grid} from "@mui/material";
import {AllThemeList} from "./allThemeList";

export const AllThemes = () => {
    const {t} = useTranslation();
    return (
        <AppLayout title={t("all-themes.navbar-title")}>
            <Grid container>
                <AllThemeList/>
            </Grid>
        </AppLayout>
    );
}