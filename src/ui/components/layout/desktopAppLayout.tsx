import {DesktopAppLayoutArgs, MobileAppLayoutArgs} from "./appLayout";
import {ReactNode} from "react";
import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";

export const DesktopAppLayout = ({children}: {desktop: DesktopAppLayoutArgs} & { children: ReactNode }) => {
    return (
        <>
            <ResponsiveAppToolbar/>

            <div style={{padding: '10px'}}>
                {children}
            </div>
        </>
    )
}