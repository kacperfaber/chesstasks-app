import {IconButton, SvgIcon} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuButtonArgs {
    onClick: () => void;
}

export const MenuButton = (args: MenuButtonArgs) => {
    return (
        <IconButton onClick={args.onClick} edge={'start'} sx={{mr: 2}}>
            <MenuIcon/>
        </IconButton>
    );
}