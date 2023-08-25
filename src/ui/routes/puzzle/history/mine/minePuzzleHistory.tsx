import {AppLayout} from "../../../../components/layout/appLayout";
import {Grid, Typography} from "@mui/material";
import {MinePuzzleHistory_PuzzleHistoryList} from "./puzzleHistoryList";
import {useTranslation} from "react-i18next";

export const MinePuzzleHistory = () => {
    const {t} = useTranslation();
    return (
        <AppLayout title={t("mine-puzzle-history.navbar-title")}>
            <Grid container spacing={3}>
                <Grid item xs={0} xl={1}></Grid>

                <Grid item xs={12} xl={10}>
                    <Typography variant={'h5'}>{t("mine-puzzle-history.title")}</Typography>
                    <Typography color={'text.secondary'} variant={'body2'}>{t("mine-puzzle-history.body")}</Typography>

                    <div style={{marginTop: '10px'}}>
                        <MinePuzzleHistory_PuzzleHistoryList/>
                    </div>
                </Grid>
            </Grid>
        </AppLayout>
    );
}