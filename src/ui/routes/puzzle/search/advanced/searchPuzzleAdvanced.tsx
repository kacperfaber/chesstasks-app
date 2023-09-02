import {AppLayout} from "../../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography} from "@mui/material";
import {SearchPuzzleAdvanced_ThemeList} from "./themeList/themeList";
import React, {useState} from "react";
import {RankingRangeHolder, RankingSlider} from "./rankingSlider";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";
import {ExpandMore} from "@mui/icons-material";

// TODO: Make this component pretier.

export const SearchPuzzleAdvanced = () => {
    const {t} = useTranslation();
    const nav = useNavigate();
    const [selectedThemes, setSelectedThemes] = useState<number[]>([]);
    const [rankingHolder] = useState(new RankingRangeHolder([0, 0]));

    const selectTheme = (id: number) => {
        setSelectedThemes(old => [...old, id]);
    }

    const unselectTheme = (id: number) => {
        setSelectedThemes(old => old.filter(t => t != id));
    }

    const play = () => {
        nav(Links.playAdvanced({
            ranking: rankingHolder.getValue(),
            themeIds: selectedThemes
        }));
    }

    return (
        <>
        <AppLayout title={t("")} mobile={{selectedNav: "search-advanced", showNav: true}}>
            <Grid container>
                <Grid item xs={12}>
                    <RankingSlider holder={rankingHolder}/>
                </Grid>

                <Grid item xs={12}>
                    <Button onClick={play} variant={'contained'}>{t("_all.play")}</Button>
                </Grid>

                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            {t("search-advanced.puzzle-themes")}
                        </AccordionSummary>
                        <AccordionDetails>
                            <SearchPuzzleAdvanced_ThemeList
                                selected={selectedThemes}
                                select={selectTheme}
                                unselect={unselectTheme}/>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </AppLayout>
    </>
    )
}