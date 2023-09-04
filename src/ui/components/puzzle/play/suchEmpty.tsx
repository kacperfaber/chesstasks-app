import {useNavigate} from "react-router-dom";
import {CenterWrapper} from "../../../components/wrappers/centerWrapper";
import {Avatar, Button, Typography} from "@mui/material";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import {useTranslation} from "react-i18next";
import {Links} from "../../../../links";

export const PlayPuzzleContainer_SuchEmpty = () => {
    const nav = useNavigate();
    const {t} = useTranslation();

    const goBack = () => nav(Links.Index);

    return (
        <CenterWrapper>
            <Avatar>
                <FilterNoneIcon/>
            </Avatar>

            <Typography variant={'h5'}>
                {t("play-puzzle-container._comps.such-empty.title")}
            </Typography>

            <Typography variant={'body2'}>
                {t("play-puzzle-container._comps.such-empty.body")}
            </Typography>

            <Button variant={'contained'} onClick={goBack}>
                {t("play-puzzle-container._comps.such-empty.go-back")}
            </Button>
        </CenterWrapper>
    )
}