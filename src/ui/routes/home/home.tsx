import {AppLayout} from "../../components/layout/appLayout";
import {useCurrentUser} from "../../components/hooks/user/useCurrentUser";
import {User} from "../../../api/user";
import {CenterWrapper} from "../../components/wrappers/centerWrapper";
import {Avatar, Button, Typography} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../links";

export const Home_Welcome = ({user}: {user: User}) => {
    const {t} = useTranslation();
    const nav = useNavigate();

    const play = () => nav(Links.playSimple(undefined));

    return (
        <CenterWrapper>
            <Avatar>
                <EmojiPeopleIcon/>
            </Avatar>

            <Typography variant={'h4'}>
                {t("home._comps.welcome.title", {u: user})}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("home._comps.welcome.body")}
            </Typography>

            <Button onClick={play} variant={'contained'}>
                {t("home._comps.welcome.play")}
            </Button>
        </CenterWrapper>
    );
}

export function Home_Anonymous() {
    const {t} = useTranslation();
    const nav = useNavigate();

    const login = () => nav(Links.Login);

    return (
        <CenterWrapper>
            <Avatar>
                <PersonOffIcon/>
            </Avatar>

            <Typography variant={'h4'}>
                {t("home._comps.anonymous.title")}
            </Typography>

            <Typography variant={'body2'} color={'text.secondary'}>
                {t("home._comps.anonymous.body")}
            </Typography>

            <Button onClick={login} variant={'contained'}>
                {t("home._comps.anonymous.login-in")}
            </Button>
        </CenterWrapper>
    );
}

export const Home = () => {
    const currentUser = useCurrentUser();

    return (
        <AppLayout title={'Test'} mobile={{selectedNav: "home", showNav: true}}>

            { currentUser ? <Home_Welcome user={currentUser}/> : <Home_Anonymous/>}

        </AppLayout>
    )
}