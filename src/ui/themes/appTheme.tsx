import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";

export const AppTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#3f51b5',
            },
            secondary: {
                main: 'rgba(0,62,245,0.65)',
            },
            background: {
                default: '#121212',
            },
        },
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fontSize: '2rem'
                    }
                }
            }
        },
    }
);

export const AppThemeProvider = ({children}: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={AppTheme}>
            <>
                <CssBaseline/>
                {children}
            </>
        </ThemeProvider>
    );
}