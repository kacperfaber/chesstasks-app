import {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {PlayService} from "../../../../../../services/play/playService";
import {AuthenticationService} from "../../../../../../services/authentication/authenticationService";
import {User} from "../../../../../../api/user";

export const MobilePlayRankingDialog = ({open, onClose}: {open: boolean, onClose: () => void}) => {
    const {t} = useTranslation();
    const [rank, setRank] = useState<number>()

    useEffect(() => {
        const then = (curr: User | undefined) => {
            if (curr) {
                PlayService.getUserRanking(curr.id)
                    .then((d) => setRank(d.ranking))
                    .catch(() => {}) // TODO
            }
        }

        AuthenticationService.getCurrentOrNull()
            .then(then)
            .catch(() => {}) // TODO
    })

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Typography variant={'body2'}>{t("puzzle._mobile._comps.puzzle-ranking-dialog.title")}</Typography>
                <Typography variant={'h5'}>{rank}</Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>{t("_all.close")}</Button>
            </DialogActions>
        </Dialog>
    )
}