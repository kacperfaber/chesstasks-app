import {ReactNode} from "react";
import {Paper} from "@mui/material";

export const PublicProfile_BasePaper = ({children}: {children: ReactNode}) => {
    return (<Paper sx={{padding: '25px', my: '10px'}}>{children}</Paper>);
}