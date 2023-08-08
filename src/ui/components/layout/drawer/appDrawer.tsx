import {Drawer, List, ListItem} from "@mui/material";
import {AppDrawer_CurrentUser} from "./currentUser";
import {useContext} from "react";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

export const AppDrawer = (args: AppDrawerArgs) => {
    // TODO: Instead this use data from 'currentUserContext'
    const userContext = useContext(CurrentUserContext);

    const notImpl = () => { throw Error("AppDrawer.login and AppDrawer.logout not implemented.") };

    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            <AppDrawer_CurrentUser login={ notImpl } logout={ notImpl } username={userContext.value?.username}/>
            <List>
                <ListItem button>Home</ListItem>
                <ListItem button>Chess</ListItem>
            </List>
        </Drawer>
    )
}