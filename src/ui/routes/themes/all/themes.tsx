import {AppLayout} from "../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Grid} from "@mui/material";
import {AllTheme_List} from "./allTheme_List";

export const AllThemes = () => {
    const {t} = useTranslation();
    return (
        <AppLayout title={''}>
            <Grid container>
                <AllTheme_List/>
            </Grid>
        </AppLayout>
    );
}