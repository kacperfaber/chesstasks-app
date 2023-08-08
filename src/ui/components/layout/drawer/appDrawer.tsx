import {Drawer, List, ListItem} from "@mui/material";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

export const AppDrawer = (args: AppDrawerArgs) => {
    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            <List>
                <ListItem button>Home</ListItem>
                <ListItem button>Chess</ListItem>
            </List>
        </Drawer>
    )
}