import {AppLayout} from "../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Backdrop, Button, Grid, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {HistoryVisibility, StatisticsVisibility} from "../../../api/userPreferences/userPreferences";
import {UserPreferencesService} from "../../../services/userPreferences/userPreferencesService";
import {CurrentUserContext} from "../../contexts/authentication/currentUserContext";
import {BaseVisibilityInput} from "../../components/settings/baseVisibilityInput";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../links";

export const Settings = () => {
    const {t} = useTranslation();

    const userCtx = useContext(CurrentUserContext);

    const [historyVisibility, setHistoryVisibility] = useState<HistoryVisibility>();
    const [statisticsVisibility, setStatisticsVisibility] = useState<StatisticsVisibility>();

    const [histProcessing, setHistProcess] = useState(false);
    const [statsProcessing, setStatsProcess] = useState(false);

    useEffect(() => {
        UserPreferencesService.getHistoryVisibility()
            .then(setHistoryVisibility)
            .catch(() => {}) // TODO

        UserPreferencesService.getStatisticsVisibility()
            .then(setStatisticsVisibility)
            .catch(() => {}) // TODO
    }, []);

    const performSave = () => {
        if (historyVisibility && statisticsVisibility) {
            setStatsProcess(true);
            setHistProcess(true);

            UserPreferencesService.setHistoryVisibility(historyVisibility)
                .finally(() => setHistProcess(false))

            UserPreferencesService.setStatisticsVisibility(statisticsVisibility)
                .finally(() => setStatsProcess(false))
        }
    }

    const nav = useNavigate();

    const cancel = () => {
        nav(Links.Index);
    }

    // TODO: Settings page not implemented

    return (
        <>
            <AppLayout title={''}>
                { historyVisibility && statisticsVisibility ? <Grid container>
                    <Grid style={{marginBottom: '30px'}} item xs={12}>
                        <Typography variant={'h5'}>{t("settings._history.title")}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{t("settings._history.body")}</Typography>

                        <BaseVisibilityInput value={historyVisibility} setValue={setHistoryVisibility}/>
                    </Grid>

                    <Grid style={{marginBottom: '30px'}} item xs={12}>
                        <Typography variant={'h5'}>{t("settings._stats.title")}</Typography>
                        <Typography variant={'body2'} color={'text.secondary'}>{t("settings._stats.body")}</Typography>

                        <BaseVisibilityInput value={statisticsVisibility} setValue={setStatisticsVisibility}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant={'contained'} onClick={performSave}>{t("settings.save")}</Button>
                        <Button variant={'contained'} onClick={cancel}>{t("_all.cancel")}</Button>
                    </Grid>
                </Grid> : null }
            </AppLayout>

            <Backdrop open={statsProcessing || histProcessing}/>
        </>
    );
}