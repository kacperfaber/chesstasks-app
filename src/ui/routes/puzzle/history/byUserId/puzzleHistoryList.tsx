import {List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {PuzzleHistory} from "../../../../../api/puzzleHistory/puzzleHistory";
import {PuzzleHistoryService} from "../../../../../services/puzzleHistory/puzzleHistoryService";
import {t} from "i18next";
import {ViewOnlyBoard} from "../../../../components/chess/board/viewOnlyBoard";
import {getDate} from "../../../../../commons/getDate";
import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {PuzzleService} from "../../../../../services/puzzle/puzzleService";

const PuzzleHistoryByUserId_PuzzleHistoryList_RenderError = () => {
    return (<Typography>{t("puzzle-history-by-user-id.probably-hidden")}</Typography>);
}

const PuzzleHistoryByUserId_PuzzleHistoryList_Item = ({puzzleHistory}: { puzzleHistory: PuzzleHistory }) => {
    const [puzzle, setPuzzle] = useState<Puzzle>();

    useEffect(() => {
        PuzzleService.getPuzzle(puzzleHistory.puzzleId)
            .then(setPuzzle)
            .catch(() => {
            }) // TODO
    }, []);

    const primaryText = () => {
        return puzzleHistory.success ? t("puzzle-history-by-user-id.list.item.success-title") : t("puzzle-history-by-user-id.list.item.failed-title")
    }

    return (
        puzzle ?
            <ListItem>
                <ListItemAvatar>
                    <ViewOnlyBoard fen={puzzle.fen}/>
                </ListItemAvatar>

                <ListItemButton onClick={() => { /* TODO: Nav to puzzle page */
                }}>
                    <ListItemText secondary={getDate(puzzleHistory.createdAt)}
                                  primary={primaryText()}/>
                </ListItemButton>
            </ListItem>
            : <></>
    );
};

const PuzzleHistoryByUserId_PuzzleHistoryList_RenderList = ({puzzleHist}: { puzzleHist: PuzzleHistory[] }) => {
    return (
        <List>
            {
                puzzleHist.map(item => <PuzzleHistoryByUserId_PuzzleHistoryList_Item puzzleHistory={item}
                                                                                     key={item.id}/>
                )
            }
        </List>)
}

export const PuzzleHistoryByUserId_PuzzleHistoryList = ({userId}: { userId: number }) => {
    const [hist, setHist] = useState<PuzzleHistory[]>();
    const [fetch, setFetch] = useState<"err" | "ok">();


    useEffect(() => {
        PuzzleHistoryService.getPuzzleHistory(userId)
            .then(setHist)
            .then(() => setFetch("ok"))
            .catch(() => {
                setFetch("err")
            })
    }, []);

    return (
        (fetch == "ok" && hist) ? <PuzzleHistoryByUserId_PuzzleHistoryList_RenderList puzzleHist={hist}/> :
            <PuzzleHistoryByUserId_PuzzleHistoryList_RenderError/>
    )
}