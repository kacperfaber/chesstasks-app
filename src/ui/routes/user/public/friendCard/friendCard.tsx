import {useEffect, useState} from "react";
import {Friendship} from "../../../../../api/friends/friendship";
import {FriendService} from "../../../../../services/friends/friendService";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {getDate} from "../../../../../commons/getDate";
import {ConfirmDialog, ConfirmDialogResult} from "../../../../base/dialogs/confirmDialog";
import {FriendCardAttrs} from "./friendCardAttrs";
import {useTranslation} from "react-i18next";

export const FriendsCard = ({userId, resetRelation}: FriendCardAttrs) => {
    const [friendship, setFriendship] = useState<Friendship>();
    const [dial, setDial] = useState(false);
    const {t} = useTranslation();

    useEffect(() => {
        FriendService.getAllFriends()
            .then(friends => friends.find(f => f.userId == userId || f.secondUserId == userId))
            .then(setFriendship)
            .catch(() => {
            }) //TODO
    });

    const onCardClick = () => {
        setDial(true);
    }

    const performDeleteFriend = () => {
        if (friendship?.id == undefined) {
            return;
        }

        FriendService.deleteFriend(friendship!!.id)
            .then(resetRelation)
            .catch(() => {
            }) // TODO
    };

    const onDialogClose = (res: ConfirmDialogResult) => {
        if (res == "confirmed") {
            performDeleteFriend();
        }

        setDial(false);
    }

    return (<>
        <Card>
            <CardActionArea onClick={onCardClick}>
                <CardContent>
                    <Typography variant={'h5'}>
                        {t("public-user-by-id.cards.friend.title")}
                    </Typography>

                    <Typography variant={'body2'} color={'text.secondary'}>
                        {t("public-user-by-id.cards.friend.body", {from: getDate(friendship?.createdAt ?? 0)})}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <ConfirmDialog
            title={t("public-user-by-id.cards.friend.delete-friend-dialog.title")}
            body={t("public-user-by-id.cards.friend.delete-friend-dialog.body")}
            confirmText={t("all.delete-friend")}
            cancelText={t("all.cancel")}
            onClose={onDialogClose}
            open={dial}/>
    </>)
}
