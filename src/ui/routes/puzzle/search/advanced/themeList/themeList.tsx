import {Theme} from "../../../../../../api/theme/theme";
import {Checkbox, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useContext, useEffect} from "react";
import {AllThemeContext} from "../../../../../contexts/theme/allThemeContext";
import {ThemeService} from "../../../../../../services/theme/themeService";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export type SearchPuzzleAdvanced_ThemeListItemAttrs = {
    theme: Theme;
    isSelected: boolean;
    setSelected: (x: boolean) => void;
}

export type SearchPuzzleAdvanced_ThemeListAttrs = {
    selected: number[];
    unselect: (id: number) => void;
    select: (id: number)=>void;
}

export const SearchPuzzleAdvanced_ThemeListItem = ({theme, isSelected, setSelected}: SearchPuzzleAdvanced_ThemeListItemAttrs) => {
    const click = () => {
        setSelected(!isSelected)
    };

    return (
        <>
            <ListItemButton dense={true} onClick={click}>
                <ListItemIcon>
                    <Checkbox checked={isSelected} edge={'start'}/>
                </ListItemIcon>

                <ListItemText primary={theme.name}></ListItemText>
            </ListItemButton>

            <Divider/>
        </>
    )
}

export const SearchPuzzleAdvanced_ThemeList = (attrs: SearchPuzzleAdvanced_ThemeListAttrs) => {
    const ctx = useContext(AllThemeContext);

    const isItemSelected: (th: Theme) => boolean = (th: Theme) => {
        return attrs.selected.find(x => x == th.id) != undefined;
    }

    const setItemSelected = (th: Theme, x: boolean) => {
        x ? attrs.select(th.id) : attrs.unselect(th.id)
    }

    useEffect(() => {
        ThemeService.getAllThemes()
            .then(ctx.setValue)
            .catch(() => {});
    }, []);

    return (<List>
            {ctx?.value?.map(th => <SearchPuzzleAdvanced_ThemeListItem
                key={Math.random()}
                theme={th}
                isSelected={isItemSelected(th)}
                setSelected={(x) => setItemSelected(th, x)}
            />)}
        </List>);
}