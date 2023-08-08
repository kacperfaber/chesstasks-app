import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";

export const AppTheme = createTheme({palette: {mode: "dark"}});

export const AppThemeProvider = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProvider theme={AppTheme}>
            <>
                <CssBaseline/>
                {children}
            </>
        </ThemeProvider>
    );
}