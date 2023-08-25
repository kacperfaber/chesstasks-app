import {useEffect, useState} from "react";
import {FriendRelation, FriendService} from "../../../../../services/friends/friendService";
import {
    Button,
    Card,
    CardActionArea,
    CardContent, Dialog,
    DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {t} from "i18next";
import {Friendship} from "../../../../../api/friends/friendship";
import {getDate} from "../../../../../commons/getDate";
import {FriendsCard} from "./friendCard";
import {FriendRequestReceivedCard} from "./friendRequestReceivedCard";
import {FriendRequestSentCard} from "./friendRequestSentCard";
import {NoRelationCard} from "./noRelationCard";



export const FriendStatusCard = ({userId}: {userId: number}) => {
    const [relation, setRelation] = useState<FriendRelation>();

    // TODO: When relation is updated to undefined, nothing is updated.

    const resetRel = () => { setRelation(undefined); };

    useEffect(() => {
       FriendService.getFriendRelation(userId)
           .then(setRelation)
           .catch(() => {}) // TODO
    }, [relation]);

    if (relation == "friends") {
        return <FriendsCard resetRelation={() => setRelation(undefined)} userId={userId}/>
    }

    else if (relation == "request_received") {
        return <FriendRequestReceivedCard userId={userId} resetRelation={resetRel}/>
    }

    else if (relation == "request_sent") {
        return <FriendRequestSentCard userId={userId} resetRelation={resetRel}/>
    }

    else if (relation == undefined) {
        return <NoRelationCard userId={userId} resetRelation={resetRel}/>
    }

    else if (relation == "yourself") {
        return null;
    }
}