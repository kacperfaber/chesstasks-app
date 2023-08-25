import styled from "styled-components";
import {Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Logout, MoreVert, Settings} from "@mui/icons-material";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Links} from "../../../../links";
import {useNavigate} from "react-router-dom";

interface AppDrawer_CurrentUserArgs {
    username: string | undefined,
    logout: () => void;
    login: () => void;
}

export const AppDrawer_CurrentUser = (args: AppDrawer_CurrentUserArgs) => {
    const {t} = useTranslation();
    const nav = useNavigate();

    const Block = styled.div`
      width: 100%;
      background-color: #454545;
    `;

    const InlineBlock = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;

    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | undefined>(undefined);

    // TODO: When AppDrawer_CurrentUser is showing login button, there's no padding.

    // TODO: Add some kinda submenu, or drawer from down [ when user is logged in, we need to show to him some options like logout]

    return (<Block>
        <InlineBlock>
            {
                args.username ?
                    <InlineBlock>
                        <h3 style={{marginRight: '10px'}}>{args.username}</h3>

                        <Menu onClose={() => setMenuAnchor(undefined)} open={menuAnchor != undefined} anchorEl={menuAnchor}>
                            <MenuItem onClick={args.logout}>
                                <ListItemIcon>
                                    <Logout/>
                                </ListItemIcon>

                                <ListItemText primary={t("all.logout")}></ListItemText>
                            </MenuItem>

                            <Divider/>

                            <MenuItem onClick={() => nav(Links.Settings)}>
                                <ListItemIcon>
                                    <Settings/>
                                </ListItemIcon>

                                <ListItemText primary={t("all.settings")}></ListItemText>
                            </MenuItem>
                        </Menu>

                        <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
                            <MoreVert/>
                        </IconButton>
                    </InlineBlock> : <Button onClick={args.login} variant={'contained'} sx={{ my: "20px" }}>Login In</Button>
            }
        </InlineBlock>
    </Block>);
}