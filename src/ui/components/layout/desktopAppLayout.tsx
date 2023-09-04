import {DesktopAppLayoutArgs} from "./appLayout";
import {ReactNode, useContext, useEffect, useState} from "react";
import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";
import {DesktopDrawer} from "./drawer/desktop/desktopDrawer";
import {CurrentUserContext} from "../../contexts/authentication/currentUserContext";
import {AuthenticationService} from "../../../services/authentication/authenticationService";


export const DesktopAppLayout = ({children}: {desktop: DesktopAppLayoutArgs} & { children: ReactNode }) => {
    const [drawer, setDrawer] = useState(false);

    const userCtx = useContext(CurrentUserContext);

    const onMenuButton = () => {
        setDrawer(true);
    }

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(userCtx.setValue)
            .catch(() => {}) // TODO
    });

    return (
        <>
            <ResponsiveAppToolbar menuButton={userCtx.value ? onMenuButton : undefined}/>

            <div style={{padding: '10px', height: '100%'}}>
                {children}
            </div>

            {userCtx.value ? <DesktopDrawer isOpen={drawer} onClose={() => setDrawer(false)}/> : null}
        </>
    )
}