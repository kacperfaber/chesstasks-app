import {AppLayout} from "../../../components/layout/appLayout";
import {t} from "i18next";
import React, {useContext, useEffect, useState} from "react";
import {AllFriendContext} from "../../../contexts/friends/allFriendContext";
import {Grid, List} from "@mui/material";
import {FriendService} from "../../../../services/friends/friendService";
import {Friendship} from "../../../../api/friends/friendship";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import {AllFriends_ListItem} from "./friendItem";
import {AllFriends_Menu} from "./allFriendsMenu";
import {screenNotImplemented} from "../../../../commons/notImplemented";
import {getFriendId} from "../../../../commons/getFriendId";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../links";

export const AllFriends = () => {
    const allFriends = useContext(AllFriendContext);

    const nav = useNavigate();

    const userCtx = useContext(CurrentUserContext);

    const [selectedFriend, setSelectedFriend] = useState<Friendship | null>(null);

    useEffect(() => {
        FriendService.getAllFriends()
            .then((friends) => {
                allFriends.setValue(friends);
            })
            .catch(); // TODO
    });

    const moreClicked = (friendship: Friendship) => {
        setSelectedFriend(friendship);
    };

    const itemClicked = (friend: Friendship) => {
        const friendId = getFriendId(userCtx.value!!.id, friend);
        nav(Links.publicUserById(friendId));
    };

    // TODO: If the allFriends is empty, show the Layout-Center text and button.

    return (
        <>
            <AppLayout title={t('all-friends.navbar-title')}>
                <Grid container>
                    <Grid item xs={12}>
                        {
                            allFriends.value ?
                                <List>
                                    {
                                        allFriends.value.map(friend =>
                                            <AllFriends_ListItem currentUserId={userCtx.value!!.id}
                                                                 key={`friend-${friend.id}`}
                                                                 friend={friend} itemClicked={itemClicked}
                                                                 moreClicked={moreClicked}/>)
                                    }
                                </List> : null
                        }
                    </Grid>
                </Grid>


            </AppLayout>

            <AllFriends_Menu selectedFriend={selectedFriend} onClose={() => setSelectedFriend(null)}/>
        </>
    );
}