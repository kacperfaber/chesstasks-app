import {List} from "@mui/material";
import {TransparentListSubHeader} from "../../../../../../base/list/transparentListSubHeader";
import {AllFriendRequests_SentRequestList} from "../../../../requests/all/sentRequestList";
import {AllFriendRequests_ReceivedRequestList} from "../../../../requests/all/receivedFriendRequests";
import {useTranslation} from "react-i18next";

export const ResponsiveFriendsScreen_RequestsList = () => {
    const {t} = useTranslation();
    return (
        <List>
            <TransparentListSubHeader>
                {t("all.sent-friend-requests")}
            </TransparentListSubHeader>

            <AllFriendRequests_SentRequestList/>

            <TransparentListSubHeader>
                {t("all.received-friend-requests")}
            </TransparentListSubHeader>

            <AllFriendRequests_ReceivedRequestList/>
        </List>
    )
}