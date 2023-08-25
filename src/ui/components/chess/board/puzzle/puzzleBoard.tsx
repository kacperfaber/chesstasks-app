import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {Board} from "../board";
import {Api} from "chessground/api";
import {Key} from "chessground/types";
import {UCI} from "../../../../../commons/uci";
import {useState} from "react";
import {BoardObj} from "chlss";
import {PuzzleController, PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {ChessService} from "../../../../../services/chess/chessService";

export interface PuzzleBoardAttrs {
    onGoodMove?: (result: PuzzleControllerResult) => void;
    onBadMove?: (result: PuzzleControllerResult) => void;
}

export const PuzzleBoard = ({puzzle, onBadMove, onGoodMove}: {puzzle: Puzzle} & PuzzleBoardAttrs) => {
    const [boardObj] = useState(new BoardObj(puzzle.fen));
    const [puzzleController] = useState(new PuzzleController(puzzle));

    const onUserMove = (orig: Key, dest: Key, cg: Api | undefined) => {
        const uci = UCI.fromKeys(orig, dest);
        const result = puzzleController.pushMove(uci);

        if (result.isOk) {
            onGoodMove?.(result);

            if (!result.finished && result.nextComputerMove) {
                const [orig, dest] = UCI.toKeys(result.nextComputerMove)
                cg?.move(orig, dest);
            }
        }

        else {
            // TODO: Undo last move, because it's bad and give user another try from this move.

            onBadMove?.(result);
        }
    };

    const onMove = (orig: Key, dest: Key, cg: Api | undefined) => {
        const uci = UCI.fromKeys(orig, dest);
        boardObj.pushUci(uci);

        cg?.set({
            movable: {
                dests: ChessService.getDestsWithBoard(boardObj)
            }
        });
    };

    const onInit = (cg: Api) => {
        const moveToPush = puzzleController.start();
        const [from, to] = UCI.toKeys(moveToPush);
        cg.move(from, to);
    }

    return (
        <Board fen={puzzle.fen} onUserMove={onUserMove} onMove={onMove} onInit={onInit}/>
    );
}