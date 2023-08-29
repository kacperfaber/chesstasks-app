import {AppLayout} from "../../../../components/layout/appLayout";
import {useTranslation} from "react-i18next";
import {Button, Grid} from "@mui/material";
import {SearchPuzzleAdvanced_ThemeList} from "./themeList/themeList";
import {useState} from "react";
import {RankingRangeHolder, RankingSlider} from "./rankingSlider";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";

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
        <AppLayout title={t("search-puzzle-advanced.navbar-title")} mobile={{selectedNav: "search-advanced", showNav: true}}>
            <Grid container>
                <Grid item xs={12}>
                    <RankingSlider holder={rankingHolder} value={{from: 1500, to: 2500}}/>
                </Grid>

                <Grid item xs={12}>
                    <Button onClick={play} variant={'contained'}>Play</Button>
                </Grid>

                <Grid item xs={12}>
                    <SearchPuzzleAdvanced_ThemeList
                        selected={selectedThemes}
                        select={selectTheme}
                        unselect={unselectTheme}/>
                </Grid>
            </Grid>
        </AppLayout>
    </>
    )
}