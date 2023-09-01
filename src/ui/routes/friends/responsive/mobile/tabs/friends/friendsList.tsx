import {Divider, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Friendship} from "../../../../../../../api/friends/friendship";
import {User} from "../../../../../../../api/user";
import {MoreVert} from "@mui/icons-material";
import {FriendService} from "../../../../../../../services/friends/friendService";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {getFriendId} from "../../../../../../../commons/getFriendId";
import {Links} from "../../../../../../../links";
import {AllFriends_Menu} from "../../../../all/allFriendsMenu";

export interface ResponsiveFriendsScreen_FriendsListAttrs {
    friends: Array<Friendship>;
    user: User;
}

export function ResponsiveFriendsScreen({friends, user}: ResponsiveFriendsScreen_FriendsListAttrs) {
    const {t} = useTranslation();
    const nav = useNavigate();
    const [selectedFriend, setSelectedFriend] = useState<Friendship | null>(null);

    const moreClicked = (friend: Friendship) => {
        setSelectedFriend(friend);
    }

    const itemClicked = (friend: Friendship) => {
        const friendId = getFriendId(user.id, friend);
        nav(Links.publicUserById(friendId));
    }

    return (
        <>
            <List>
                {friends.map(friend => (<ListItem key={friend.id} secondaryAction={
                        <IconButton onClick={() => moreClicked(friend)}>
                            <MoreVert/>
                        </IconButton>
                    }>
                        <ListItemButton onClick={() => itemClicked(friend)}>
                            <ListItemText
                                primary={FriendService.getFriendName(user.id, friend)}
                                secondary={t("friends._responsive.friend-list.click-to-see-user-profile")}
                            />
                        </ListItemButton>

                        <Divider/>
                    </ListItem>

                ))}
            </List>

            <AllFriends_Menu selectedFriend={selectedFriend} onClose={() => setSelectedFriend(null)}/>
        </>
    )
}