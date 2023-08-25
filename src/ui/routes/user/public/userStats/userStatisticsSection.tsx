import {PublicProfile_BasePaper} from "../publicProfileBasePaper";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {SimpleStatistics} from "../../../../../api/statistics/simpleStatistics";
import {StatisticsService} from "../../../../../services/statistics/statisticsService";

export const UserStatisticsSection = ({userId}: {userId: number}) => {
    const {t} = useTranslation();

    const [stats, setStats] = useState<SimpleStatistics>();

    useEffect(() => {
        StatisticsService.getSimpleStatistics(userId)
            .then(setStats)
            .catch(() => {});
    }, []);

    return (
        <PublicProfile_BasePaper>
            <Typography variant={'h5'}>{t("public-user-by-id.statistics.title")}</Typography>

            <Typography sx={{display: 'inline'}} variant={'h5'}>{stats?.totalSolved}</Typography>

            <Typography sx={{display: 'inline'}} variant={'h5'}>/</Typography>

            <Typography sx={{display: 'inline'}} variant={'h5'}>{stats?.totalFails}</Typography>
        </PublicProfile_BasePaper>
    )
}