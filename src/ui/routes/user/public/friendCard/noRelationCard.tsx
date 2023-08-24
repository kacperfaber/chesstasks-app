import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {t} from "i18next";
import {useState} from "react";
import {FriendService} from "../../../../../services/friends/friendService";

export const NoRelationCard = ({userId, resetRelation}: {userId: number, resetRelation: () => void}) => {
    const [dial, setDial] = useState(false);

    const onCardClick = () => {
        setDial(true);
    };

    const sendFriendRequest = () => {
        FriendService.sendFriendRequest(userId)
            .then(resetRelation)
            .catch(() => {}) // TODO
    }

    return (<>
            <Card>
                <CardActionArea onClick={onCardClick}>
                    <CardContent>
                        <Typography variant={'h5'}>
                            {t("public-user-by-id.you-re-not-friends")}
                        </Typography>

                        <Typography variant={'body2'} color={'text.secondary'}>
                            {t("public-user-by-id.click-to-send-friend-request")}
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
                        <Button onClick={() => {sendFriendRequest();setDial(false);}}>
                            {t("public-user-by-id.send-friend-request")}
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}