import {Api} from "chessground/api";

export function makeBoardViewOnly(cg: Api | undefined) {
    cg?.set({
       movable: {
           color: undefined
       }
    });
}