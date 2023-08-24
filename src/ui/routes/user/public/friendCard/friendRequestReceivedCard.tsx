import {useEffect, useState} from "react";
import {Friendship} from "../../../../../api/friends/friendship";
import {FriendService} from "../../../../../services/friends/friendService";
import {
    Button,
    Card,
    CardActionArea,
    CardContent, Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {t} from "i18next";

export const FriendRequestReceivedCard = ({resetRelation, userId}: {userId: number, resetRelation: () => void}) => {
    const [friendship, setFriendship] = useState<Friendship>();
    const [dial, setDial] = useState(false);

    const performReject = () => {
        FriendService.rejectFriendRequest(userId)
            .then(resetRelation)
            .catch(() => {}) // TODO
    }

    const performAccept = () => {
        FriendService.acceptFriendRequest(userId)
            .then(resetRelation)
            .catch(() => {}) // TODO
    }

    useEffect(() => {
        FriendService.getAllFriends()
            .then(friends => friends.find(x => x.userId == userId || x.secondUserId == userId))
            .then(setFriendship)
            .catch(() => {}) // TODO
    }, []);

    const onCardClick = () => {
        setDial(true);
    }

    return (
        <>
            <Card>
                <CardActionArea onClick={onCardClick}>
                    <CardContent>
                        <Typography variant={'h5'}>
                            {t("public-user-by-id.this-user-sent-friend-request")}
                        </Typography>

                        <Typography variant={'body2'} color={'text.secondary'}>
                            {t("public-user-by-id.click-to-accept-or-reject")}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog open={dial} onClose={() => setDial(false)}>
                <DialogTitle>
                    {t("public-user-by-id.received-friend-request")}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {t("public-user-by-id.decide-what-will-you-do-with-this-request")}
                    </DialogContentText>

                    <DialogActions>
                        <Button autoFocus onClick={() => setDial(false)}>{t("all.cancel")}</Button>
                        <Button onClick={() => { performReject(); setDial(false)}}>{t("public-user-by-id.reject-friend-request")}</Button>
                        <Button onClick={() => { performAccept(); setDial(false); }}>{t("public-user-by-id.accept-friend-request")}</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}