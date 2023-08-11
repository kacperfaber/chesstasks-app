import {AppBar, Toolbar, Typography} from "@mui/material";
import {MenuButton} from "./menuButton";
import {ReactNode} from "react";
import styled from "styled-components";

interface AppToolbarArgs {
    menuButton: {
        onClick: () => void
    };
    title: string;
}

export const AppToolbar = (args: AppToolbarArgs) => {
    return (
        <AppBar position={'static'}>
            <Toolbar variant={'dense'}>
                <MenuButton onClick={args.menuButton.onClick}></MenuButton>

                <Typography variant={'h5'}>
                    {args.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}