import React from 'react';
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {Router} from "./router";

function getRootElement(): HTMLElement {
    const root = document.getElementById("app");
    if (!root) throw Error("Root element #app not found.");
    return root;
}

function getRouterElement(): JSX.Element {
    return (<React.StrictMode>
        <RouterProvider router={Router}></RouterProvider>
    </React.StrictMode>);
}

const root = createRoot(getRootElement());
root.render(getRouterElement());