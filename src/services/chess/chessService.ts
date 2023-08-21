import {Dests, Key} from "chessground/types";
import {BoardObj} from "chlss";
import {groupByMapped} from "../../commons/groupBy";

export class ChessService {
    public static getDests(fen: string): Dests {
        const board = new BoardObj(fen);
        const legalUci = board.legalMovesUci();

        return groupByMapped(
            legalUci,
            x => (x.charAt(0) + x.charAt(1)) as Key,
            x => (x.charAt(2) + x.charAt(3)) as Key
        );
    }

    public static getDestsWithBoard(board: BoardObj): Dests {
        const legalUci = board.legalMovesUci();

        return groupByMapped(
            legalUci,
            x => (x.charAt(0) + x.charAt(1)) as Key,
            x => (x.charAt(2) + x.charAt(3)) as Key
        );
    }
}