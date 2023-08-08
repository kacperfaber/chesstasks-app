import {AppBar, Toolbar} from "@mui/material";
import {MenuButton} from "./menuButton";

export const AppToolbar = () => {
    return (
        <AppBar position={'static'}>
            <Toolbar variant={'dense'}>
                <MenuButton onClick={ () => { /* TODO: MenuButton click not implemented yet.  */} }></MenuButton>
            </Toolbar>
        </AppBar>
    )
}