import {CurrentUserContext} from "./authentication/currentUserContext";
import {AllFriendContext} from "./friends/allFriendContext";
import {ReceivedFriendRequestsContext} from "./friends/receivedFriendRequestsContext";
import {SentFriendRequestsContext} from "./friends/sentFriendRequestsContext";
import {AllThemeContext} from "./theme/allThemeContext";
import React, {ReactNode, useEffect, useState} from "react";
import {User} from "../../api/user";
import {Friendship} from "../../api/friends/friendship";
import {FriendRequest} from "../../api/friends/friendRequest";
import {AuthenticationService} from "../../services/authentication/authenticationService";

// TODO: Is it really needs to look like this?

export interface AppContextAttrs {
    children: ReactNode;
}

export const AppContext: React.FC<AppContextAttrs> = (props) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const [allFriends, setAllFriends] = useState<Array<Friendship> | undefined>(undefined);

    const [receivedFriendRequests, setReceivedFriendRequests] = useState<Array<FriendRequest> | undefined>(undefined);

    const [friendRequests, setSentFriendRequest] = useState<Array<FriendRequest> | undefined>(undefined);

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(setUser)
            .catch(() => {}) // TODO
    });

    return (<CurrentUserContext.Provider value={{value: user, setValue: setUser}}>
        <AllFriendContext.Provider value={{value: allFriends, setValue: setAllFriends}}>
            <ReceivedFriendRequestsContext.Provider value={{value: receivedFriendRequests, setValue: setReceivedFriendRequests}}>
                <SentFriendRequestsContext.Provider value={{value: friendRequests, setValue: setSentFriendRequest}}>
                    <AllThemeContext.Provider value={undefined}>

                        {props.children}

                    </AllThemeContext.Provider>
                </SentFriendRequestsContext.Provider>
            </ReceivedFriendRequestsContext.Provider>
        </AllFriendContext.Provider>
    </CurrentUserContext.Provider>);
}