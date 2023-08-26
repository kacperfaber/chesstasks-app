import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {BaseVisibility} from "../../../api/userPreferences/userPreferences";
import {useTranslation} from "react-i18next";

export const BaseVisibilityInput = ({value, setValue}: {value: BaseVisibility, setValue: (v: BaseVisibility) => void}) => {
    const {t} = useTranslation();

    const onChange = (e: React.MouseEvent<HTMLElement>, value: any) => {
        setValue(value as BaseVisibility);
    }

    return (
        <ToggleButtonGroup
            color="primary"
            value={value}
            exclusive={true}
            onChange={onChange}
        >
            <ToggleButton value={"ME"}>{t("settings.visibility.me")}</ToggleButton>
            <ToggleButton value={"ONLY_FRIENDS"}>{t("settings.visibility.only-friends")}</ToggleButton>
            <ToggleButton value={"EVERYONE"}>{t("settings.visibility.everyone")}</ToggleButton>
        </ToggleButtonGroup>
    )
}