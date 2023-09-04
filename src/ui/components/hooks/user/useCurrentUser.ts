import {useContext, useEffect} from "react";
import {CurrentUserContext} from "../../../contexts/authentication/currentUserContext";
import {AuthenticationService} from "../../../../services/authentication/authenticationService";
import {User} from "../../../../api/user";

export function useCurrentUser(): User | undefined {
    const userCtx = useContext(CurrentUserContext);

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(userCtx.setValue)
            .catch(() => {});
    }, []);

    return userCtx.value;
}