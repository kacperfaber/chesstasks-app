import {AppLayout} from "../../../../components/layout/appLayout";
import {Grid, List} from "@mui/material";
import {TransparentListSubHeader} from "../../../../base/list/transparentListSubHeader";
import {AllFriendRequests_SentRequestList} from "./sentRequestList";
import {AllFriendRequests_ReceivedRequestList} from "./receivedFriendRequests";
import {useTranslation} from "react-i18next";

export const AllFriendRequests = () => {
    const {t} = useTranslation();
    return (
        <AppLayout title={t("all-friend-requests.navbar-title")}>
            <Grid container>
                <Grid item xs={12}>
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
                </Grid>
            </Grid>
        </AppLayout>
    )
};