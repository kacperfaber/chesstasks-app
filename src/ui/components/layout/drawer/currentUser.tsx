import styled from "styled-components";
import {Button} from "@mui/material";

interface AppDrawer_CurrentUserArgs {
    username: string | undefined,
    logout: () => void;
    login: () => void;
}

export const AppDrawer_CurrentUser = (args: AppDrawer_CurrentUserArgs) => {
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

    // TODO: When AppDrawer_CurrentUser is showing login button, there's no padding.

    // TODO: Add some kinda submenu, or drawer from down [ when user is logged in, we need to show to him some options like logout]

    return (<Block>
        <InlineBlock>
            {
                args.username ?
                    <InlineBlock>
                        <h3>{args.username}</h3>
                    </InlineBlock>
                    : <Button onClick={args.login} variant={'contained'} sx={{ my: "20px" }}>Login In</Button>
            }
        </InlineBlock>
    </Block>);
}