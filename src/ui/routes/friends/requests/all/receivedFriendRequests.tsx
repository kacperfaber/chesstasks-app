import {useContext, useEffect, useState} from "react";
import {ReceivedFriendRequestsContext} from "../../../../contexts/friends/receivedFriendRequestsContext";
import {FriendService} from "../../../../../services/friends/friendService";
import {IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Close, Done, MoreVert} from "@mui/icons-material";
import {FriendRequest} from "../../../../../api/friends/friendRequest";
import {getDate} from "../../../../../commons/getDate";
import {t} from "i18next";

const AllFriendRequests_ReceivedListItem = ({req}: { req: FriendRequest }) => {
    const [menuAnchor, setMenuAnchor] = useState<Element | undefined>(undefined);

    const receivedCtx = useContext(ReceivedFriendRequestsContext);

    const performAccept = () => {
        FriendService.acceptFriendRequest(req.senderId)
            .then(() => receivedCtx.setValue(undefined))
            .catch(() => {
            }) // TODO
    }

    const performReject = () => {
        FriendService.rejectFriendRequest(req.senderId)
            .then(() => receivedCtx.setValue(undefined))
            .catch(() => {
            }) // TODO
    }

    return (
        <>

            <ListItem secondaryAction={
                <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
                    <MoreVert/>
                </IconButton>
            }>

                <ListItemButton>
                    <ListItemText
                        primary={req.senderUserName}
                        secondary={t('all-friend-requests.request-received-at', {at: getDate(req.createdAt)})}
                    />
                </ListItemButton>

            </ListItem>

            <Menu anchorEl={menuAnchor} open={menuAnchor != undefined} onClose={() => setMenuAnchor(undefined)}>
                <MenuItem onClick={performAccept}>
                    <ListItemIcon>
                        <Done fontSize={'small'}/>
                    </ListItemIcon>

                    <ListItemText>
                        {t("all.friend-request-accept")}
                    </ListItemText>

                </MenuItem>

                <MenuItem onClick={performReject}>
                    <ListItemIcon>
                        <Close fontSize={'small'}/>
                    </ListItemIcon>

                    <ListItemText>
                        {t("all.friend-request-reject")}
                    </ListItemText>
                </MenuItem>
            </Menu>

        </>
    )
}

export const AllFriendRequests_ReceivedRequestList = () => {
    const receivedCtx = useContext(ReceivedFriendRequestsContext);

    useEffect(() => {
        FriendService.getReceivedRequests()
            .then(receivedCtx.setValue)
            .catch(() => {
            }) // TODO;
    });

    return (
        <>
            {
                receivedCtx.value?.map(req => <AllFriendRequests_ReceivedListItem req={req}/>)
            }
        </>
    )
};