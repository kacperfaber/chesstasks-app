import {Grid} from "@mui/material";
import {MobileFriendsScreen_RequestsList} from "./requestsList";

export function MobileFriendsScreen_RequestsTab() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <MobileFriendsScreen_RequestsList/>
            </Grid>
        </Grid>
    )
}