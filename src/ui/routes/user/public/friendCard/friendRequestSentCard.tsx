import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {t} from "i18next";

export const FriendRequestSentCard = ({userId}: { userId: number }) => {
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