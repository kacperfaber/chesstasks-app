import {PuzzleHistory} from "../../../../../api/puzzleHistory/puzzleHistory";
import {Button, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {useEffect, useState} from "react";
import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {PuzzleService} from "../../../../../services/puzzle/puzzleService";
import {ViewOnlyBoard} from "../../../../components/chess/board/viewOnlyBoard";
import {getDate} from "../../../../../commons/getDate";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";
import {useTranslation} from "react-i18next";

export const ExpandablePuzzleHistoryList_Item = ({puzzleHistory}: { puzzleHistory: PuzzleHistory }) => {
    const [puzzle, setPuzzle] = useState<Puzzle>();
    const {t} = useTranslation();

    useEffect(() => {
        PuzzleService.getPuzzle(puzzleHistory.puzzleId)
            .then(setPuzzle)
            .catch(() => {})
    }, []);

    const itemPrimaryText = puzzleHistory.success ?
        t("public-user._comps.puzzle-history.item-solved") :
        t("public-user._comps.puzzle-history.item-not-solved")

    const nav = useNavigate();

    return (
        puzzle ?
            <ListItem>
                <ListItemAvatar>
                    <ViewOnlyBoard fen={puzzle.fen}/>
                </ListItemAvatar>

                <ListItemButton onClick={() => nav(Links.puzzleById(puzzleHistory.puzzleId))}>
                    <ListItemText primary={itemPrimaryText}
                                  secondary={getDate(puzzleHistory.createdAt)}/>
                </ListItemButton>
            </ListItem>
            :
            <></>
    )
}

export interface ExpandablePuzzleHistoryListAttrs {
    puzzleHistory: PuzzleHistory[];
    limit: number;
    moreClicked: () => void;
}

export const ExpandableUserPuzzleHistoryList = ({puzzleHistory, limit, moreClicked}: ExpandablePuzzleHistoryListAttrs) => {
    const {t} = useTranslation();
    return (
        <>
            {
                puzzleHistory?.slice(0, limit).map(historyItem =>
                    <ExpandablePuzzleHistoryList_Item key={historyItem.id} puzzleHistory={historyItem}/>
                )
            }

            <Button onClick={moreClicked} sx={{mt: '20px'}}>{t("public-user-by-id.puzzle-history.more")}</Button>
        </>
    )
}