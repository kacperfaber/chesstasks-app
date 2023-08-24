import {useEffect, useState} from "react";
import {Friendship} from "../../../../../api/friends/friendship";
import {FriendService} from "../../../../../services/friends/friendService";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {t} from "i18next";
import {getDate} from "../../../../../commons/getDate";

export const FriendsCard = ({userId, resetRelation}: {userId: number, resetRelation: () => void}) => {
    const [friendship, setFriendship] = useState<Friendship>();
    const [dial, setDial] = useState(false);

    useEffect(() => {
        FriendService.getAllFriends()
            .then(friends => friends.find(f => f.userId == userId || f.secondUserId == userId))
            .then(setFriendship)
            .catch(() => {}) //TODO
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
            .catch(() => {}) // TODO
    };

    return <>
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

        <Dialog open={dial} onClose={() => setDial(false)}>
            <DialogTitle>
                {t("public-user-by-id.want-you-to-delete-this-friend")}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {t("all.this-operation-cannot-be-undo")}
                </DialogContentText>

                <DialogActions>
                    <Button autoFocus onClick={() => setDial(false)}>{t("all.cancel")}</Button>
                    <Button onClick={() => { performDeleteFriend(); setDial(false); }}>{t("all.delete-friend")}</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </>;
}