import {Puzzle} from "../../../../../api/puzzles/puzzle";
import {Board} from "../board";
import {Api} from "chessground/api";
import {Key} from "chessground/types";
import {UCI} from "../../../../../commons/uci";
import {useState} from "react";
import {BoardObj} from "chlss";
import {PuzzleController, PuzzleControllerResult} from "../../../../../services/puzzle/puzzleController";
import {ChessService} from "../../../../../services/chess/chessService";
import {makeBoardViewOnly} from "../../../../../commons/makeBoardViewOnly";

export interface PuzzleBoardAttrs {
    onGoodMove?: (result: PuzzleControllerResult, controller: PuzzleController, api?: Api) => void;
    onBadMove?: (result: PuzzleControllerResult, controller: PuzzleController, api?: Api) => void;
}

export const PuzzleBoard = ({puzzle, onBadMove, onGoodMove}: {puzzle: Puzzle} & PuzzleBoardAttrs) => {
    const [boardObj] = useState(new BoardObj(puzzle.fen));
    const [puzzleController] = useState(new PuzzleController(puzzle));

    const onUserMove = (orig: Key, dest: Key, cg: Api | undefined) => {
        const uci = UCI.fromKeys(orig, dest);
        const result = puzzleController.pushMove(uci);

        if (result.isOk) {
            onGoodMove?.(result, puzzleController, cg);

            if (!result.finished && result.nextComputerMove) {
                const [orig, dest] = UCI.toKeys(result.nextComputerMove)
                cg?.move(orig, dest);
            }

            if (result.finished) {
                makeBoardViewOnly(cg);
            }
        }

        else {
            makeBoardViewOnly(cg);
            onBadMove?.(result, puzzleController, cg);
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
        cg.set({orientation: boardObj.getColour() == "white" ? "black" : "white"})
        cg.move(from, to);
    }

    return (
        <Board fen={puzzle.fen} onUserMove={onUserMove} onMove={onMove} onInit={onInit}/>
    );
}
