import {Grid} from "@mui/material";
import {ResponsiveFriendsScreen_RequestsList} from "./requestsList";

export function ResponsiveFriendsScreen_RequestsTab() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveFriendsScreen_RequestsList/>
            </Grid>
        </Grid>
    )
}