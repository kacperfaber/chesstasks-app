import {useContext, useEffect, useState} from "react";
import {SentFriendRequestsContext} from "../../../../contexts/friends/sentFriendRequestsContext";
import {FriendRequest} from "../../../../../api/friends/friendRequest";
import {IconButton, ListItem, ListItemButton, ListItemText, Menu, MenuItem} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import {t} from "i18next";
import {getDate} from "../../../../../commons/getDate";
import {FriendService} from "../../../../../services/friends/friendService";

export const AllFriendRequests_SentRequestItem = ({req}: { req: FriendRequest }) => {
    const [menuAnchor, setMenuAnchor] = useState<Element | undefined>(undefined);

    const moreClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchor(e.currentTarget);
    };

    const performDeleteFriendReq = () => {
        // TODO: There's no method to cancel sent friend request.
    };

    return (
        <>
            <ListItem key={req.id} secondaryAction={
                <IconButton onClick={(e) => moreClicked(e)}>
                    <MoreVert/>
                </IconButton>
            }>
                <ListItemButton>
                    <ListItemText
                        primary={req.targetUserName}
                        secondary={t("all-friend-requests.request-sent-at", {at: getDate(req.createdAt)})}/>
                </ListItemButton>
            </ListItem>

            <Menu anchorEl={menuAnchor} open={menuAnchor != undefined} onClose={() => setMenuAnchor(undefined)}>
                <MenuItem onClick={performDeleteFriendReq}>
                    {t("all.cancel")}
                </MenuItem>
            </Menu>
        </>
    );

}

export const AllFriendRequests_SentRequestList = () => {
    const sentRequests = useContext(SentFriendRequestsContext);

    useEffect(() => {
        FriendService.getSentRequests()
            .then(sentRequests.setValue)
            .catch(() => {}) // TODO
    });

    return (<>
        {
            sentRequests.value?.map(request =>
                <AllFriendRequests_SentRequestItem req={request}></AllFriendRequests_SentRequestItem>
            )
        }
    </>);
}