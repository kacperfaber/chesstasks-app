import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {useTranslation} from "react-i18next";
import React, {useContext, useEffect} from "react";
import {Links} from "../../../../../links";
import {useNavigate} from "react-router-dom";
import {Home, More, PlayArrow, Search} from "@mui/icons-material";
import {CurrentUserContext} from "../../../../contexts/authentication/currentUserContext";
import {AuthenticationService} from "../../../../../services/authentication/authenticationService";

export type MobileNavigationItemValue = "home" | "menu" | "random-puzzles" | "search-advanced";

export interface MobileNavigationAttrs {
    selected: MobileNavigationItemValue;
    setSelected: (v: MobileNavigationItemValue) => void;
}

export const MobileNavigation = ({selected, setSelected}: MobileNavigationAttrs) => {
    const {t} = useTranslation();
    const nav = useNavigate();
    const userCtx = useContext(CurrentUserContext);

    const consumeNewValue = (v: MobileNavigationItemValue) => {
        switch (v) {
            case "home":
                nav(Links.Index);
                break

            case "random-puzzles":
                nav(Links.playSimple(undefined));
                break;

            case "search-advanced":
                nav(Links.SearchAdvanced);
                break;

            case "menu":
                nav(Links.OnlyMobile.Menu)
                break
        }
    }

    useEffect(() => {
        AuthenticationService.getCurrentOrNull()
            .then(userCtx.setValue)
            .catch(() => {}) // TODO
    }, []);

    const onValueChange = (event: React.SyntheticEvent, value: any) => {
        setSelected(value as MobileNavigationItemValue);
        consumeNewValue(value as MobileNavigationItemValue);
    }

    // TODO: Mobile - BottomNavigation has no paper, and it looks like bg transparent.

    if (!userCtx.value) return null;

    return (
        <BottomNavigation style={{position: 'fixed', width: '100%', bottom: 0}} value={selected}
                          onChange={onValueChange}>
            <BottomNavigationAction value={"home"} icon={<Home/>}></BottomNavigationAction>
            <BottomNavigationAction value={"random-puzzles"} icon={<PlayArrow/>}></BottomNavigationAction>
            <BottomNavigationAction value={"search-advanced"} icon={<Search/>}></BottomNavigationAction>
            <BottomNavigationAction value={"menu"} icon={<More/>}></BottomNavigationAction>
        </BottomNavigation>
    )
}