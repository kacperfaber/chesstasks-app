import {AppLayout} from "../../../../components/layout/appLayout";
import {t} from "i18next";
import {useLoaderData} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import {PuzzleHistoryByUserId_PuzzleHistoryList} from "./puzzleHistoryList";
import {UserService} from "../../../../../services/user/userService";
import {useEffect, useState} from "react";

export const PuzzleHistoryByUserId = () => {
    const loaderData = useLoaderData() as {userId: number};
    const [username, setUsername] = useState<string>();

    useEffect(() => {
        UserService.getById(loaderData.userId)
            .then(user => setUsername(user.username))
            .catch(() => {}) // TODO
    }, []);

    return (
        <AppLayout title={t("puzzle-history-by-user-id.navbar-title")}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>{t("puzzle-history-by-user-id.title")}</Typography>
                    <Typography variant={'body2'}>{t("puzzle-history-by-user-id.body", {username})}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <PuzzleHistoryByUserId_PuzzleHistoryList userId={loaderData.userId}/>
                </Grid>
            </Grid>
        </AppLayout>
    )
}