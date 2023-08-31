import {Api} from "chessground/api";
import {UCI} from "./uci";

export function showCorrectAnswer(move: string, expectedMove: string, cg?: Api) {
    const [from, to] = UCI.toKeys(move);
    const [eFrom, eTo] = UCI.toKeys(expectedMove);

    cg?.setShapes([
        {
            orig: eFrom,
            dest: eTo,
            brush: "green"
        },

        {
            orig: from,
            dest: to,
            brush: "red"
        }
    ]);
}