import {useContext, useEffect, useState} from "react";
import {ReceivedFriendRequestsContext} from "../../../../contexts/friends/receivedFriendRequestsContext";
import {FriendService} from "../../../../../services/friends/friendService";
import {IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Close, Done, MoreVert} from "@mui/icons-material";
import {FriendRequest} from "../../../../../api/friends/friendRequest";
import {getDate} from "../../../../../commons/getDate";
import {t} from "i18next";
import {AllFriendContext} from "../../../../contexts/friends/allFriendContext";

const AllFriendRequests_ReceivedListItem = ({req, resetCtx}: { req: FriendRequest; resetCtx: () => void }) => {
    const [menuAnchor, setMenuAnchor] = useState<Element | undefined>(undefined);

    const performAccept = () => {
        FriendService.acceptFriendRequest(req.senderId)
            .then(() => resetCtx())
            .catch(() => {
            }) // TODO
    }

    const performReject = () => {
        FriendService.rejectFriendRequest(req.senderId)
            .then(() => resetCtx())
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
    const allFriendCtx = useContext(AllFriendContext);

    const resetCtx = () => {
        receivedCtx.setValue(undefined);
        allFriendCtx.setValue(undefined)
    }

    useEffect(() => {
        console.log("useEffect called");

        FriendService.getReceivedRequests()
            .then(receivedCtx.setValue)
            .catch(() => {
            }) // TODO;
    });

    return (
        <>
            {
                receivedCtx.value?.map(req => <AllFriendRequests_ReceivedListItem resetCtx={resetCtx} key={req.id}
                                                                                  req={req}/>)
            }
        </>
    )
};