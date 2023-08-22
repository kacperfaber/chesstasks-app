import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";
import {Links} from "./links";
import {AllFriends} from "./ui/routes/friends/all/allFriends";
import {AllFriendRequests} from "./ui/routes/friends/requests/all/allFriendRequests";

export const Router = createBrowserRouter([
    {
        path: Links.Index,
        element: <Home/>
    },
    {
        path: Links.Login,
        element: <Login/>
    },

    {
        path: Links.AllFriends,
        element: <AllFriends/>
    },

    {
        path: Links.AllFriendRequests,
        element: <AllFriendRequests/>
    }
])