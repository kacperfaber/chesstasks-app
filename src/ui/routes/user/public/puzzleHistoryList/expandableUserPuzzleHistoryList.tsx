import {PuzzleHistory} from "../../../../../api/puzzleHistory/puzzleHistory";
import {Button, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {t} from "i18next";
import {useEffect, useState} from "react";
import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {PuzzleService} from "../../../../../services/puzzle/puzzleService";
import {ViewOnlyBoard} from "../../../../components/chess/board/viewOnlyBoard";
import {getDate} from "../../../../../commons/getDate";

export const ExpandablePuzzleHistoryList_Item = ({puzzleHistory}: { puzzleHistory: PuzzleHistory }) => {
    const [puzzle, setPuzzle] = useState<Puzzle>();

    useEffect(() => {
        PuzzleService.getPuzzle(puzzleHistory.puzzleId)
            .then(setPuzzle)
            .catch(() => {})
    }, []);

    const itemPrimaryText = puzzleHistory.success ?
        t("public-user-by-id.puzzle-history.item.solved") :
        t("public-user-by-id.puzzle-history.item.not-solved")

    // TODO: PuzzleHistoryItem - click does nothing

    return (
        puzzle ?
            <ListItem>
                <ListItemAvatar>
                    <ViewOnlyBoard fen={puzzle.fen}/>
                </ListItemAvatar>

                <ListItemButton>
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