import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {t} from "i18next";
import {useState} from "react";
import {FriendService} from "../../../../../services/friends/friendService";
import {ConfirmDialog, ConfirmDialogResult} from "../../../../base/dialogs/confirmDialog";

export const NoRelationCard = ({userId, resetRelation}: { userId: number, resetRelation: () => void }) => {
    const [dial, setDial] = useState(false);

    const onCardClick = () => {
        setDial(true);
    };

    const sendFriendRequest = () => {
        // TODO: resetRelation does not make any effect.

        FriendService.sendFriendRequest(userId)
            .then(resetRelation)
            .catch((err) => {
                throw err
            }) // TODO
    }

    const onDialogClose = (res: ConfirmDialogResult) => {
        if (res == "confirmed") {
            sendFriendRequest();
        }
        setDial(false);
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

            <ConfirmDialog title={t("public-user-by-id.want-you-to-send-friend-request")}
                           body={t("public-user-by-id.if-you-want-to-send")}
                           confirmText={t("public-user-by-id.send-friend-request")}
                           cancelText={t("all.cancel")}
                           onClose={onDialogClose}
                           open={dial}/>
        </>
    )
}