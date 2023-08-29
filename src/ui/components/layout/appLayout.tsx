import {ReactNode, useState} from "react";
import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";
import {MobileNavigation, MobileNavigationItemValue} from "./navigation/mobile/mobileNavigation";
import {useMediaQuery, useTheme} from "@mui/material";
import {MobileAppLayout} from "./mobileAppLayout";
import {DesktopAppLayout} from "./desktopAppLayout";

interface AppLayoutArgs {
    children: ReactNode;
    title: string; // TODO;
    mobile?: MobileAppLayoutArgs,
    desktop?: DesktopAppLayoutArgs
}

export type DesktopAppLayoutArgs = {

}

export type MobileAppLayoutArgs = {
    selectedNav: MobileNavigationItemValue,
    showNav?: boolean
}

export const AppLayout = (args: AppLayoutArgs) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    if (isMobile) {
        const m = args.mobile!!;
        return (<MobileAppLayout children={args.children} mobile={{...m}}/>)
    }

    return (<DesktopAppLayout children={args.children} desktop={args.desktop!!}></DesktopAppLayout>)
}