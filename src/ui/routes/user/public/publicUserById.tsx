import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserService} from "../../../../services/user/userService";
import {PublicUser} from "../../../../api/user/publicUser";
import {AppLayout} from "../../../components/layout/appLayout";
import {Card, CardActionArea, Grid, Paper, Typography} from "@mui/material";
import {FriendRelation, FriendService} from "../../../../services/friends/friendService";
import {FriendStatusCard} from "./friendCard/friendStatusCard";
import {UserPuzzleHistorySection} from "./puzzleHistoryList/userPuzzleHistorySection";
import {PublicProfile_BasePaper} from "./publicProfileBasePaper";
import {useTranslation} from "react-i18next";
import {UserStatisticsSection} from "./userStats/userStatisticsSection";

export const PublicUserById = () => {
    const {t} = useTranslation();
    const loaderData = useLoaderData() as {userId: number};

    const [user, setUser] = useState<PublicUser | undefined>(undefined);

    useEffect(() => {
        UserService.getById(loaderData.userId)
            .then(setUser)
            .catch(() => {}) // TODO
    }, []);

    // TODO: Continue here, add history if is visible.

    return (
        <AppLayout title={t('public-user-by-id.navbar-title') + ": " + loaderData.userId.toString()}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <PublicProfile_BasePaper>
                        <Typography variant={'h4'}>{user?.username}</Typography>
                        <Typography color={'text.secondary'} variant={'body2'}>{t("public-user.body", {username: user?.username ?? "undefined"})}</Typography>
                    </PublicProfile_BasePaper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FriendStatusCard userId={loaderData.userId}/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <UserStatisticsSection userId={loaderData.userId}/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <UserPuzzleHistorySection userId={loaderData.userId}/>
                </Grid>
            </Grid>
        </AppLayout>
    )
}