import {useEffect, useState} from "react";
import {PuzzleHistory} from "../../../../../api/puzzleHistory/puzzleHistory";
import {PuzzleHistoryService} from "../../../../../services/puzzleHistory/puzzleHistoryService";
import {List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {ViewOnlyBoard} from "../../../../components/chess/board/viewOnlyBoard";
import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {PuzzleService} from "../../../../../services/puzzle/puzzleService";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../../links";
import {useTranslation} from "react-i18next";

export const MinePuzzleHistory_PuzzleHistoryListItem = ({puzzleHistory}: {puzzleHistory: PuzzleHistory}) => {
    const [puzzle, setPuzzle] = useState<Puzzle>();
    const nav = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        PuzzleService.getPuzzle(puzzleHistory.puzzleId)
            .then(setPuzzle)
            .catch(() => {}); // TODO
    }, []);

    const itemClicked = () => {
        nav(Links.puzzleById(puzzleHistory.puzzleId));
    }

    const tData = {p: puzzle, ph: puzzleHistory};

    const secondaryText = () => {
        if (puzzleHistory.success) {
            return t("puzzle-history._mine._comps.list-item.secondary.solved", tData);
        }
        return t("puzzle-history._mine._comps.list-item.secondary.failed", tData);
    }

    return (
        <ListItem>
            <ListItemAvatar>
                {puzzle ? <ViewOnlyBoard fen={puzzle.fen}/> : null}
            </ListItemAvatar>

            <ListItemButton onClick={itemClicked}>
                {puzzle ? <ListItemText primary={t("puzzle-history._mine._comps.list-item.primary", tData)} secondary={secondaryText()}/> : null}
            </ListItemButton>
        </ListItem>
    )
}

export const MinePuzzleHistory_PuzzleHistoryList = () => {
    const [history, setHistory] = useState<PuzzleHistory[]>();

    useEffect(() => {
        PuzzleHistoryService.getMinePuzzleHistory()
            .then(setHistory)
            .catch(() => {}) // TODO
    }, []);

    return (
        <List>
            {
                history?.map(historyItem => <MinePuzzleHistory_PuzzleHistoryListItem key={historyItem.id} puzzleHistory={historyItem}/>
                )
            }
        </List>
    );
}