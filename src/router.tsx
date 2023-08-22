import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";
import {Links} from "./links";
import {AllFriends} from "./ui/routes/friends/all/allFriends";
import {AllFriendRequests} from "./ui/routes/friends/requests/all/allFriendRequests";
import {PublicUserById} from "./ui/routes/user/public/publicUserById";
import {userIdLoader} from "./ui/routes/loaders";

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
    },

    {
        path: Links.PublicUserById,
        loader: userIdLoader,
        element: <PublicUserById/>
    }
])