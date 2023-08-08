import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";

export const AppTheme = createTheme(
    {
        palette: {mode: "dark"},
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fontSize: '2rem'
                    }
                }
            },
            MuiDrawer: {
                defaultProps: {
                    PaperProps: {
                        sx: {
                            width: '50%',
                            '@media (min-width: 600px)': {
                                width: '30%'
                            }
                        }
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