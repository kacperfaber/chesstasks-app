import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import React from "react";

export const PrivacyButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={() => window.location.replace("/privacy.txt")} variant={'text'}>{t("__privacy.privacy-statement")}</Button>
    );
}

export const RodoButton = () => {
    const {t} = useTranslation();
    return (
        <Button onClick={() => window.location.replace("/rodo.txt")}
                variant={'text'}>{t("__privacy.rodo-statement")}</Button>
    );
}
