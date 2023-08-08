import {AppBar, Toolbar} from "@mui/material";
import {MenuButton} from "./menuButton";

interface AppToolbarArgs {
    menuButton: {
        onClick: () => void
    }
}

export const AppToolbar = (args: AppToolbarArgs) => {
    return (
        <AppBar position={'static'}>
            <Toolbar variant={'dense'}>
                <MenuButton onClick={ args.menuButton.onClick }></MenuButton>
            </Toolbar>
        </AppBar>
    )
}