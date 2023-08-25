import {AppLayout} from "../../components/layout/appLayout";
import {useTranslation} from "react-i18next";

export const Settings = () => {
    const {t} = useTranslation();

    // TODO: Settings page not implemented

    return (<AppLayout title={t("settings.navbar-title")}>
        <h5>not implemented</h5>
    </AppLayout>);
}