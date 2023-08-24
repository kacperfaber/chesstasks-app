import {AppLayout} from "../../../../components/layout/appLayout";
import {t} from "i18next";
import {useLoaderData} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import {PuzzleHistoryByUserId_PuzzleHistoryList} from "./puzzleHistoryList";

export type PuzzleHistoryByUserIdAttrs = {
    userId: number;
}

export const PuzzleHistoryByUserId = () => {
    const loaderData = useLoaderData() as {userId: number};

    return (
        <AppLayout title={t("puzzle-history-by-user-id.navbar-title")}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>{t("puzzle-history-by-user-id.title")}</Typography>
                    <Typography variant={'body2'}>{t("puzzle-history-by-user-id.body")}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <PuzzleHistoryByUserId_PuzzleHistoryList userId={loaderData.userId}/>
                </Grid>
            </Grid>
        </AppLayout>
    )
}