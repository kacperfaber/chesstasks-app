import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    }
])