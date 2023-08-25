import React, {useContext, useState} from "react";
import {Dialog, Drawer, List, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import {Delete, Visibility} from "@mui/icons-material";
import {FriendService} from "../../../../services/friends/friendService";
import {Friendship} from "../../../../api/friends/friendship";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import {screenNotImplemented} from "../../../../commons/notImplemented";
import {DeleteFriendConfirmDialog} from "../../../components/friends/delete/deleteFriendConfirmDialog";
import {AllFriendContext} from "../../../contexts/friends/allFriendContext";
import {useTranslation} from "react-i18next";
import {getFriendId} from "../../../../commons/getFriendId";
import {Links} from "../../../../links";
import {useNavigate} from "react-router-dom";

export const AllFriends_Menu = ({selectedFriend, onClose}: {selectedFriend: Friendship | null, onClose: () => void}) => {
    const {t} = useTranslation();
    const userCtx = useContext(CurrentUserContext);
    const allFriendsCtx = useContext(AllFriendContext);
    const nav = useNavigate();

    const [deleteConfirmDial, setDelConfirmDial] = useState(false);

    const deleteClicked = () => {
        setDelConfirmDial(true);
    };

    const performFriendDelete = () => {
        FriendService.deleteFriend(selectedFriend!!.id)
            .then(() => allFriendsCtx.setValue(undefined))
            .catch((err) => { console.log("cannot del friend"); allFriendsCtx.setValue(undefined); throw err }) // TODO
    };

    const seeProfile = () => {
        const friendId = getFriendId(userCtx.value!!.id, selectedFriend!!);
        nav(Links.publicUserById(friendId));
    }

    return (
        <React.Fragment>
            <Drawer PaperProps={{width: '100%'}} open={selectedFriend != null} onClose={onClose} anchor={'bottom'}>
                <Typography variant={'h5'}>
                    {selectedFriend ? FriendService.getFriendName(userCtx.value!!.id, selectedFriend) : null}
                </Typography>
                <Typography variant={'body2'}>
                    {t("all-friends.you-can-now-manage-friendship")}
                </Typography>

                <List>
                    <ListItemButton onClick={deleteClicked}>
                        <ListItemIcon>
                            <Delete/>
                        </ListItemIcon>

                        {t("all-friends.delete-friend")}
                    </ListItemButton>

                    <ListItemButton onClick={seeProfile}>
                        <ListItemIcon>
                            <Visibility/>
                        </ListItemIcon>

                        {t("all-friends.see-friend-profile")}
                    </ListItemButton>
                </List>
            </Drawer>

            <DeleteFriendConfirmDialog
                open={deleteConfirmDial}
                onConfirmed={() => { performFriendDelete(); setDelConfirmDial(false); }}
                onClose={() => setDelConfirmDial(false)}/>

        </React.Fragment>
    )
}