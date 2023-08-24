import {useEffect, useState} from "react";
import {PuzzleHistory} from "../../../../../api/puzzleHistory/puzzleHistory";
import {CircularProgress, Paper, Typography} from "@mui/material";
import {t} from "i18next";
import {PuzzleHistoryService} from "../../../../../services/puzzleHistory/puzzleHistoryService";
import {ExpandableUserPuzzleHistoryList} from "./expandableUserPuzzleHistoryList";
import {PublicProfile_BasePaper} from "../publicProfileBasePaper";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";

const RenderPuzzleHistoryList = ({puzzleHistory, userId}: { puzzleHistory: PuzzleHistory[]; userId: number }) => {
    const nav = useNavigate();

    const onMoreClicked = () => {
        nav(Links.puzzleHistoryByUserId(userId))
    };

    return (<ExpandableUserPuzzleHistoryList limit={5} puzzleHistory={puzzleHistory} moreClicked={onMoreClicked}/>)
}

const RenderInfo = () => {
    return (
        <Typography variant={'body2'} color={'text.secondary'}>
            {t("public-user-by-id.puzzle-history.probably-hidden")}
        </Typography>
    )
}

export const UserPuzzleHistorySection = ({userId}: { userId: number }) => {
    const [history, setHistory] = useState<PuzzleHistory[]>();
    const [fetch, setFetch] = useState<"error" | "ok">();

    useEffect(() => {
        PuzzleHistoryService.getPuzzleHistory(userId)
            .then(setHistory)
            .then(() => setFetch("ok"))
            .catch(() => {
                setFetch("error")
            }) // TODO;
    }, []);

    return (
        <>
            <PublicProfile_BasePaper>
                <Typography variant={'h5'}>{t("public-user-by-id.puzzle-history.title")}</Typography>

                {
                    fetch == undefined ? <CircularProgress/> : <></>
                }

                {
                    (fetch == "ok" && history) ? <RenderPuzzleHistoryList userId={userId} puzzleHistory={history}/> : <RenderInfo/>
                }
            </PublicProfile_BasePaper>
        </>
    )
}