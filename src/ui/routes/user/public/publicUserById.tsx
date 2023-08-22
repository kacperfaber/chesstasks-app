import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserService} from "../../../../services/user/userService";
import {PublicUser} from "../../../../api/user/publicUser";
import {AppLayout} from "../../../components/layout/appLayout";
import {t} from "i18next";
import {Grid, Typography} from "@mui/material";

export const PublicUserById = () => {
    const loaderData = useLoaderData() as {userId: number};

    const [user, setUser] = useState<PublicUser | undefined>(undefined);

    useEffect(() => {
        UserService.getById(loaderData.userId)
            .then(setUser)
            .catch(() => {}) // TODO
    });

    // TODO: Continue here, add history if is visible.

    return (
        <AppLayout title={t('public-user-by-id.navbar-title') + ": " + loaderData.userId.toString()}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>{user?.username}</Typography>
                    <Typography variant={'body2'}>{t("public-user-by-id.body", {username: user?.username ?? "undefined"})}</Typography>
                </Grid>


            </Grid>
        </AppLayout>
    )
}