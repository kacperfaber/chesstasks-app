import React from 'react';
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {Router} from "./router";
import {AppContext} from "./ui/contexts/appContext";
import {AppThemeProvider} from "./ui/themes/appTheme";
import {Internationalization} from "./internationalization/internationalization";

function getRootElement(): HTMLElement {
    const root = document.getElementById("app");
    if (!root) throw Error("Root element #app not found.");
    return root;
}

function getRouterElement(): JSX.Element {
    return (
        <AppContext>
            <AppThemeProvider>
                <RouterProvider router={Router}></RouterProvider>
            </AppThemeProvider>
        </AppContext>
    );
}

Internationalization.setup()
startApp();

function startApp() {
    const root = createRoot(getRootElement());
    root.render(getRouterElement());
}
