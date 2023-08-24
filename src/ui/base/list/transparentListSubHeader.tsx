import {ListSubheader} from "@mui/material";

export const TransparentListSubHeader = ({children}: { children: string }) => {
    return <ListSubheader style={{background: 'transparent'}}>{children}</ListSubheader>
}