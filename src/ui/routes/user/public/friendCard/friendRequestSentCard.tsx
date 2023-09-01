import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {FriendCardAttrs} from "./friendCardAttrs";
import {useTranslation} from "react-i18next";

export const FriendRequestSentCard = ({userId}: FriendCardAttrs) => {
    const {t} = useTranslation();
    return (<Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant={'h5'}>
                        {t("public-user._comps.request-sent.title")}
                    </Typography>

                    <Typography variant={'body2'} color={'text.secondary'}>
                        {t("public-user._comps.request-sent.body")}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}