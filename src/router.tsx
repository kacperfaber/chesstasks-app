import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])