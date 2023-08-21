import {AppToolbar} from "./toolbar/toolbar";
import {AppDrawer} from "./drawer/appDrawer";
import {ReactNode, useState} from "react";
import {AppContext} from "../../contexts/appContext";
import {AppThemeProvider} from "../../themes/appTheme";

interface AppLayoutArgs {
    children: ReactNode;
    title: string;
}

export const AppLayout = (args: AppLayoutArgs) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () =>
    {
        setIsOpen(false);
    }

    return (
        <>
            <AppToolbar title={args.title}  menuButton={{onClick: () => setIsOpen(true)}}></AppToolbar>

            <AppDrawer isOpen={isOpen} onClose={onClose}></AppDrawer>

            {args.children}
        </>
    );
}