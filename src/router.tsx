import {createBrowserRouter} from "react-router-dom";
import {Home} from "./ui/routes/home/home";
import {Login} from "./ui/routes/login/login";
import {Links} from "./links";
import {AllFriends} from "./ui/routes/friends/all/allFriends";
import {AllFriendRequests} from "./ui/routes/friends/requests/all/allFriendRequests";
import {PublicUserById} from "./ui/routes/user/public/publicUserById";
import {
    advancedCriteriaLoader,
    playCriteriaLoader,
    puzzleIdLoader,
    respFriendsScreenLoader,
    userIdLoader
} from "./ui/routes/loaders";
import {SearchUser} from "./ui/routes/user/search/searchUser";
import {PuzzleHistoryByUserId} from "./ui/routes/puzzle/history/byUserId/puzzleHistoryByUserId";
import {MinePuzzleHistory} from "./ui/routes/puzzle/history/mine/minePuzzleHistory";
import {Settings} from "./ui/routes/settings/settings";
import {PuzzleById} from "./ui/routes/puzzle/byId/puzzleById";
import {AllThemes} from "./ui/routes/themes/all/themes";
import {SimplePlay} from "./ui/routes/play/simplePlay";
import {PlayAdvancedCriteria} from "./ui/routes/play/advanced/playAdvancedCriteria";
import {SearchPuzzleAdvanced} from "./ui/routes/puzzle/search/advanced/searchPuzzleAdvanced";
import {OnlyMobileMenu} from "./ui/routes/onlyMobile/menu/onlyMobileMenu";
import {ResponsiveFriends} from "./ui/routes/friends/responsive/responsiveFriends";
import {AdminManageUsers} from "./ui/routes/admin/user/adminManageUsers";
import {AdminManagePuzzles} from "./ui/routes/admin/puzzle/adminManagePuzzles";
import {ErrorElement} from "./ui/components/error/errorElement";

export const Router = createBrowserRouter([
    {
        path: Links.Index,
        element: <Home/>,
        errorElement: <ErrorElement/>
    },
    {
        path: Links.Login,
        element: <Login/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.AllFriends,
        element: <AllFriends/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.AllFriendRequests,
        element: <AllFriendRequests/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PublicUserById,
        loader: userIdLoader,
        element: <PublicUserById/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.SearchUser,
        element: <SearchUser/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PuzzleHistoryByUserId,
        loader: userIdLoader,
        element: <PuzzleHistoryByUserId/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PuzzleById,
        loader: puzzleIdLoader,
        element: <PuzzleById/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PuzzleHistory,
        element: <MinePuzzleHistory/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.Settings,
        element: <Settings/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.AllThemes,
        element: <AllThemes/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PlaySimple,
        loader: playCriteriaLoader,
        element: <SimplePlay/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.PlayAdvanced,
        loader: advancedCriteriaLoader,
        element: <PlayAdvancedCriteria/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.SearchAdvanced,
        element: <SearchPuzzleAdvanced/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.OnlyMobile.Menu,
        element: <OnlyMobileMenu/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.Friends,
        loader: respFriendsScreenLoader,
        element: <ResponsiveFriends/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.Admin.ManageUsers,
        element: <AdminManageUsers/>,
        errorElement: <ErrorElement/>
    },

    {
        path: Links.Admin.ManagePuzzles,
        element: <AdminManagePuzzles/>,
        errorElement: <ErrorElement/>
    }
])