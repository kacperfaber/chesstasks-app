import {AppLayout} from "../../../components/layout/appLayout";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {DefaultDrawerList} from "../../../components/layout/drawer/defaultDrawerList";

export const OnlyMobileMenu = () => {
    const nav = useNavigate();
    const {t} = useTranslation();

    return (
        <AppLayout title={''} mobile={{selectedNav: 'menu', showNav: true}}>
            <DefaultDrawerList/>
        </AppLayout>
    )
}