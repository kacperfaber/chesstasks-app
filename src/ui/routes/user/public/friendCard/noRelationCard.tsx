import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {useState} from "react";
import {FriendService} from "../../../../../services/friends/friendService";
import {ConfirmDialog, ConfirmDialogResult} from "../../../../base/dialogs/confirmDialog";
import {FriendCardAttrs} from "./friendCardAttrs";
import {useTranslation} from "react-i18next";

export const NoRelationCard = ({userId, resetRelation}: FriendCardAttrs) => {
    const [dial, setDial] = useState(false);
    const {t} = useTranslation();

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
                            {t("public-user-by-id.cards.no-relation.title")}
                        </Typography>

                        <Typography variant={'body2'} color={'text.secondary'}>
                            {t("public-user-by-id.cards.no-relation.body")}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <ConfirmDialog title={t("public-user-by-id.cards.no-relation.send-request-dialog.title")}
                           body={t("public-user-by-id.cards.no-relation.send-request-dialog.body")}
                           confirmText={t("public-user-by-id.cards.no-relation.send-request-dialog.send-request")}
                           cancelText={t("all.cancel")}
                           onClose={onDialogClose}
                           open={dial}/>
        </>
    )
}