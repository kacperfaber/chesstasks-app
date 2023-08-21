import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";
import {Links} from "./links";

export const Router = createBrowserRouter([
    {
        path: Links.Index,
        element: <Home/>
    },
    {
        path: Links.Login,
        element: <Login/>
    }
])