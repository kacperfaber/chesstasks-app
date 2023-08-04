import {CurrentUserContext} from "./authentication/currentUserContext";
import {AllFriendContext} from "./friends/allFriendContext";
import {ReceivedFriendRequestsContext} from "./friends/receivedFriendRequestsContext";
import {SentFriendRequestsContext} from "./friends/sentFriendRequestsContext";
import {AllThemeContext} from "./theme/allThemeContext";
import React, {ReactNode} from "react";

// TODO: Is it really needs to look like this?

export interface AppContextAttrs {
    children: ReactNode;
}

export const AppContext: React.FC<AppContextAttrs> = (props) => {
    return (<CurrentUserContext.Provider value={undefined}>
        <AllFriendContext.Provider value={undefined}>
            <ReceivedFriendRequestsContext.Provider value={undefined}>
                <SentFriendRequestsContext.Provider value={undefined}>
                    <AllThemeContext.Provider value={undefined}>

                        {props.children}

                    </AllThemeContext.Provider>
                </SentFriendRequestsContext.Provider>
            </ReceivedFriendRequestsContext.Provider>
        </AllFriendContext.Provider>
    </CurrentUserContext.Provider>);
}