import {Drawer, List, ListItem} from "@mui/material";
import {AppDrawer_CurrentUser} from "./currentUser";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

export const AppDrawer = (args: AppDrawerArgs) => {
    // TODO: Instead this use data from 'currentUserContext'
    const user: {username: string | undefined} = {username: undefined};

    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            <AppDrawer_CurrentUser login={ () => {}} logout={ () => {}} username={user?.username}/>
            <List>
                <ListItem button>Home</ListItem>
                <ListItem button>Chess</ListItem>
            </List>
        </Drawer>
    )
}