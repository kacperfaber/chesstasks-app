import React, {useContext, useEffect} from "react";
import {AllFriendContext} from "../../../../../../contexts/friends/allFriendContext";
import {FriendService} from "../../../../../../../services/friends/friendService";
import {Grid, List} from "@mui/material";
import {AllFriends_ListItem} from "../../../../all/friendItem";
import {CurrentUserContext} from "../../../../../../contexts/authentication/currentUserContext";
import {UserService} from "../../../../../../../services/user/userService";
import {AuthenticationService} from "../../../../../../../services/authentication/authenticationService";
import {ResponsiveFriendsScreen} from "./friendsList";

export function ResponsiveFriendsScreen_FriendsTab() {
    const allFriends = useContext(AllFriendContext);
    const userCtx = useContext(CurrentUserContext);

    useEffect(() => {
        FriendService.getAllFriends()
            .then(allFriends.setValue)
            .catch(() => {}); // TODO

        AuthenticationService.getCurrentOrNull()
            .then(userCtx.setValue)
            .catch(() => {}) // TODO
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                {
                    allFriends.value && userCtx.value ? <ResponsiveFriendsScreen user={userCtx.value} friends={allFriends.value}/> : null
                }
            </Grid>
        </Grid>
    )
}