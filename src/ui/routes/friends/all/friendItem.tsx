import {Friendship} from "../../../../api/friends/friendship";
import {Divider, IconButton, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import React from "react";
import {FriendService} from "../../../../services/friends/friendService";
import {useTranslation} from "react-i18next";

interface FriendItemAttrs {
    currentUserId: number;
    friend: Friendship;
    itemClicked: (friend: Friendship) => void;
    moreClicked: (friend: Friendship) => void;
}

export const AllFriends_ListItem = ({currentUserId, friend, itemClicked, moreClicked}: FriendItemAttrs) => {
    const {t} = useTranslation();

    return <>
        <ListItem key={friend.id} secondaryAction={
            <IconButton onClick={() => moreClicked(friend)}>
                <MoreVert/>
            </IconButton>
        }>
            <ListItemButton onClick={() => itemClicked(friend)}>
                <ListItemText
                    primary={FriendService.getFriendName(currentUserId, friend)}
                    secondary={t("all-friends.click-to-see-user-profile")}
                />
            </ListItemButton>
        </ListItem>

        <Divider/>
    </>
}