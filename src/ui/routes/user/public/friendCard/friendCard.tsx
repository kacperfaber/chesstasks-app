import {useEffect, useState} from "react";
import {Friendship} from "../../../../../api/friends/friendship";
import {FriendService} from "../../../../../services/friends/friendService";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {t} from "i18next";
import {getDate} from "../../../../../commons/getDate";
import {ConfirmDialog, ConfirmDialogResult} from "../../../../base/dialogs/confirmDialog";

export const FriendsCard = ({userId, resetRelation}: { userId: number, resetRelation: () => void }) => {
    const [friendship, setFriendship] = useState<Friendship>();
    const [dial, setDial] = useState(false);

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
                        {t("public-user-by-id.you-are-friends")}
                    </Typography>

                    <Typography variant={'body2'} color={'text.secondary'}>
                        {t("public-user-by-id.you-are-friends-from", {from: getDate(friendship?.createdAt ?? 0)})}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <ConfirmDialog
            title={t("public-user-by-id.want-you-to-delete-this-friend")}
            body={t("all.this-operation-cannot-be-undo")}
            confirmText={t("all.delete-friend")}
            cancelText={t("all.cancel")}
            onClose={onDialogClose}
            open={dial}/>
    </>)
}
