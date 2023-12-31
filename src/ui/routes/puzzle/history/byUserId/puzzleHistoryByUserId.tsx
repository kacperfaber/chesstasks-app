import {AppLayout} from "../../../../components/layout/appLayout";
import {useLoaderData} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import {PuzzleHistoryByUserId_PuzzleHistoryList} from "./puzzleHistoryList";
import {UserService} from "../../../../../services/user/userService";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export const PuzzleHistoryByUserId = () => {
    const loaderData = useLoaderData() as {userId: number};
    const [username, setUsername] = useState<string>();
    const {t} = useTranslation();

    useEffect(() => {
        UserService.getById(loaderData.userId)
            .then(user => setUsername(user.username))
            .catch(() => {}) // TODO
    }, []);

    return (
        <AppLayout title={t("")}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>{t("puzzle-history._by-user-id.title")}</Typography>
                    <Typography variant={'body2'}>{t("puzzle-history._by-user-id.body", {username})}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <PuzzleHistoryByUserId_PuzzleHistoryList userId={loaderData.userId}/>
                </Grid>
            </Grid>
        </AppLayout>
    )
}