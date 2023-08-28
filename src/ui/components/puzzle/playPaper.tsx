import {Paper} from "@mui/material";
import {ReactNode} from "react";

export type PlayPaperAttrs = {
    children: ReactNode | null;
}

export const PlayPaper = ({children}: PlayPaperAttrs) => {
    return (
        <Paper sx={{marginTop: '5px', marginBottom: '5px', padding: '10px'}}>
            {children}
        </Paper>
    );
}