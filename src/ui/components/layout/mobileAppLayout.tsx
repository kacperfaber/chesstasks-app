import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";
import {MobileAppLayoutArgs} from "./appLayout";
import {ReactNode, useState} from "react";
import {MobileNavigation, MobileNavigationItemValue} from "./navigation/mobile/mobileNavigation";

export const MobileAppLayout = ({children, mobile}: {mobile: MobileAppLayoutArgs} & {children: ReactNode}) => {
    const [selectedMenu, setSelectedMenu] = useState<MobileNavigationItemValue>(mobile.selectedNav ?? "home");

    return (
        <>
            <ResponsiveAppToolbar/>

            <div style={{padding: '10px', height: '100%'}}>
                {children}
            </div>

            { mobile.showNav ?? false ? <MobileNavigation selected={selectedMenu} setSelected={setSelectedMenu}/> : null}
        </>
    )
}