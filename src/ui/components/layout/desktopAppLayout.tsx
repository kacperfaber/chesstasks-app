import {DesktopAppLayoutArgs} from "./appLayout";
import {ReactNode, useState} from "react";
import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";
import {DesktopDrawer} from "./drawer/desktop/desktopDrawer";
import {IconButton} from "@mui/material";


export const DesktopAppLayout = ({children}: {desktop: DesktopAppLayoutArgs} & { children: ReactNode }) => {
    const [drawer, setDrawer] = useState(false);

    const onMenuButton = () => {
        setDrawer(true);
    }

    return (
        <>
            <ResponsiveAppToolbar menuButton={onMenuButton}/>

            <div style={{padding: '10px', height: '100%'}}>
                {children}
            </div>

            <DesktopDrawer isOpen={drawer} onClose={() => setDrawer(false)}/>
        </>
    )
}