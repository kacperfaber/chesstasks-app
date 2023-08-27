import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";
import {Links} from "./links";
import {AllFriends} from "./ui/routes/friends/all/allFriends";
import {AllFriendRequests} from "./ui/routes/friends/requests/all/allFriendRequests";
import {PublicUserById} from "./ui/routes/user/public/publicUserById";
import {puzzleIdLoader, userIdLoader} from "./ui/routes/loaders";
import {SearchUser} from "./ui/routes/user/search/searchUser";
import {PuzzleHistoryByUserId} from "./ui/routes/puzzle/history/byUserId/puzzleHistoryByUserId";
import {MinePuzzleHistory} from "./ui/routes/puzzle/history/mine/minePuzzleHistory";
import {Settings} from "./ui/routes/settings/settings";
import {PuzzleById} from "./ui/routes/puzzle/byId/puzzleById";
import {AllThemes} from "./ui/routes/themes/all/themes";

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
    },

    {
        path: Links.SearchUser,
        element: <SearchUser/>
    },

    {
        path: Links.PuzzleHistoryByUserId,
        loader: userIdLoader,
        element: <PuzzleHistoryByUserId/>
    },

    {
        path: Links.PuzzleById,
        loader: puzzleIdLoader,
        element: <PuzzleById/>
    },

    {
        path: Links.PuzzleHistory,
        element: <MinePuzzleHistory/>
    },

    {
        path: Links.Settings,
        element: <Settings/>
    },

    {
        path: Links.AllThemes,
        element: <AllThemes/>
    }
])