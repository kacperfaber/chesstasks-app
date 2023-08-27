import {useContext, useEffect} from "react";
import {ThemeService} from "../../../../services/theme/themeService";
import {AllThemeContext} from "../../../contexts/theme/allThemeContext";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Theme} from "../../../../api/theme/theme";
import {ViewOnlyBoard} from "../../../components/chess/board/viewOnlyBoard";

export const AllTheme_ListItem = ({theme}: { theme: Theme }) => {
    const onClick = () => {
        /* TODO*/ alert("there's no /play endpoint takes criteria like theme");
    };

    // TODO: CardContent.body should be puzzle description, translated...

    return (
        <Grid item xs={6} xl={1}>
            <Card>
                <CardActionArea onClick={onClick}>
                    <CardMedia>
                        <ViewOnlyBoard fen={"r1bq1rk1/4bppp/p1np1n2/1p2p3/2B1PP2/1NN1B3/PPPQ2PP/2KR3R b - - 0 11"}/>
                    </CardMedia>

                    <CardContent>
                        <Typography variant={'h5'}>{theme.name}</Typography>

                        <Typography variant={'body2'} color={'text.secondary'}>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export const AllThemeList = () => {
    const allThemeCtx = useContext(AllThemeContext);

    useEffect(() => {
        ThemeService.getAllThemes()
            .then(allThemeCtx.setValue)
            .catch(() => {
            }) // TODO
    }, []);

    return (
        <Grid container spacing={3}>
            {
                allThemeCtx.value?.map(theme => <AllTheme_ListItem key={theme.id} theme={theme}/>)
            }
        </Grid>
    )
}