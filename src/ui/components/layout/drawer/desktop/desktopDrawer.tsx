import {Drawer} from "@mui/material";
import {useContext, useEffect} from "react";
import {AuthenticationService} from "../../../../../services/authentication/authenticationService";
import {DesktopDrawer_List} from "./desktopDrawerList";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";

interface AppDrawerArgs {
    isOpen: boolean;
    onClose: () => void;
}

export const DesktopDrawer = (args: AppDrawerArgs) => {
    const userContext = useContext(CurrentUserContext);

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(userContext.setValue)
            .catch(() => {});
    }, []);

    return (
        <Drawer anchor={'left'} open={args.isOpen} onClose={args.onClose}>
            {userContext.value ? <DesktopDrawer_List/> : null}
        </Drawer>
    )
}