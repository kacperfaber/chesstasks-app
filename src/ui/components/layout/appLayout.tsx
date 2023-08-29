import {ReactNode, useState} from "react";
import {ResponsiveAppToolbar} from "./toolbar/responsive/responsiveAppToolbar";

interface AppLayoutArgs {
    children: ReactNode;
    title: string; // TODO;
}

export const AppLayout = (args: AppLayoutArgs) => {
    return (
        <>
            <ResponsiveAppToolbar/>

            <div style={{padding: '25px'}}>
                {args.children}
            </div>
        </>
    );
}