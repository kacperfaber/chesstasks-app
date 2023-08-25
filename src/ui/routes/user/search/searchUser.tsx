import {AppLayout} from "../../../components/layout/appLayout";
import {
    Alert,
    Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import {UserService} from "../../../../services/user/userService";
import {useState} from "react";
import {SimpleUser} from "../../../../api/simpleUser";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../links";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

export const SearchUser_Item = ({simpleUser}: { simpleUser: SimpleUser }) => {
    const nav = useNavigate();
    const {t} = useTranslation();

    return (
        <>
            <ListItem>
                <ListItemButton onClick={() => nav(Links.publicUserById(simpleUser.id))}>
                    <ListItemText primary={simpleUser.username} secondary={t("search-user.click-to-see-profile")}/>
                </ListItemButton>
            </ListItem>

            <Divider/>
        </>
    );
}

export const SearchUser_Results = ({data}: {data: SimpleUser[]}) => {
    const {t} = useTranslation();
    return (<>
        <Grid item xs={12}>
            <Typography variant={'h5'}>
                {t("search-user.search-results")}
            </Typography>

            <List>
                {
                    data?.map(simpleUser => <SearchUser_Item key={simpleUser.id} simpleUser={simpleUser}/>)
                }
            </List>
        </Grid>
    </>);
};

// TODO: Use contexts - avoid reload states when returned from public user page.

// TODO: bootstrap view for big screens.

export const SearchUser = () => {
    const [query, setQuery] = useState("");
    const [err, setErr] = useState(false);
    const [data, setData] = useState<undefined | SimpleUser[]>(undefined);
    const {t} = useTranslation();

    const searchByUsername = () => {
        if (query == "") {
            setErr(true);
            return;
        }

        UserService.search(query)
            .then(setData)
            .then(() => setErr(false))
            .catch(() => setErr(true))
    };

    return (
        <AppLayout title={t('search-user.navbar-title')}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={'h5'}>{t("search-user.title")}</Typography>

                    <Typography variant={'body2'}>{t("search-user.body")}</Typography>

                    <TextField sx={{width: '100%', mt: '25px'}} label={t("search-user.query")} variant={'outlined'}
                               onChange={(e) => setQuery(e.target.value)}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <Button variant={'contained'} onClick={searchByUsername}>Search</Button>
                </Grid>

                {data ? <div style={{marginTop: '25px', width: '100%'}}><SearchUser_Results data={data !!}/></div> : null}
            </Grid>

            <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} open={err}
                      onClose={() => setErr(false)}>
                <Alert onClose={() => setErr(false)} severity="error" sx={{width: '100%'}}>
                    {t("search-user.error-message")}
                </Alert>
            </Snackbar>
        </AppLayout>
    )
};