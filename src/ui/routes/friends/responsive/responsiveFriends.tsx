import {AppLayout} from "../../../components/layout/appLayout";
import {useMediaQuery, useTheme} from "@mui/material";
import {MobileFriendsScreen} from "./mobile/mobileFriendsScreen";

export const ResponsiveFriends = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppLayout title={''}>
            {isMobile ? <MobileFriendsScreen/> : null}
        </AppLayout>
    )
}