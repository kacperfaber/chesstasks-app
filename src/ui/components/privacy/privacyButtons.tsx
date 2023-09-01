import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import React from "react";
import {PrivacyNav} from "../../../commons/privacy/privacyNav";

export const PrivacyButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={PrivacyNav.privacyStatement} variant={'text'}>{t("__privacy.privacy-statement")}</Button>
    );
}

export const RodoButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={PrivacyNav.rodoStatement}
                variant={'text'}>{t("__privacy.rodo-statement")}</Button>
    );
}
