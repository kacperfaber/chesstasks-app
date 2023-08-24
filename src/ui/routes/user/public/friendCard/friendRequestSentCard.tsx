import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {t} from "i18next";
import {FriendCardAttrs} from "./friendCardAttrs";

export const FriendRequestSentCard = ({userId}: FriendCardAttrs) => {
    return (<Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant={'h5'}>
                        {t("public-user-by-id.cards.request-sent.title")}
                    </Typography>

                    <Typography variant={'body2'} color={'text.secondary'}>
                        {t("public-user-by-id.cards.request-sent.body")}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}