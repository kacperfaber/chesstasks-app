import {AppLayout} from "../../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Fab, Grid, Typography} from "@mui/material";
import {SearchPuzzleAdvanced_ThemeList} from "./themeList/themeList";
import React, {useState} from "react";
import {RankingRangeHolder, RankingSlider} from "./rankingSlider";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";
import {ExpandMore, PlayArrowSharp, SearchSharp} from "@mui/icons-material";
import styled from "styled-components";

const SearchPuzzleAdvancedWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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

                    </Grid>

                    <Grid item xs={12}>

                    </Grid>

                    <Grid item xs={12}>

                    </Grid>
                </Grid>


                <SearchPuzzleAdvancedWrapper style={{textAlign: 'center', padding: '15px'}}>
                    <Avatar>
                        <SearchSharp/>
                    </Avatar>

                    <Typography variant={'h5'}>{t("search-advanced.title")}</Typography>
                    <Typography variant={'body2'} color={'text.secondary'}>{t("search-advanced.body")}</Typography>

                    <Box sx={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px'}}>
                        <RankingSlider holder={rankingHolder}/>
                    </Box>

                    <Box sx={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px'}}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                            <Typography variant={'h5'}>{t("search-advanced.select-themes")}</Typography>
                            <Typography variant={'body2'}
                                        color={'text.secondary'}>{t("search-advanced.selected-themes", {all: selectedThemes.length})}</Typography>
                        </Box>

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
                    </Box>
                </SearchPuzzleAdvancedWrapper>
            </AppLayout>

            <Fab onClick={play} sx={{position: 'absolute', right: 25, bottom: 75}} variant={'extended'} size={'medium'}
                 color={'primary'}>
                <PlayArrowSharp/>

                {t("_all.play")}
            </Fab>
        </>
    )
}