import {Key} from "chessground/types";

export class UCI {
    public static toKeys(uci: string): [Key, Key] {
        const from = (uci.charAt(0) + uci.charAt(1)) as Key;
        const to= (uci.charAt(2) + uci.charAt(3)) as Key;
        return [from, to];
    }

    public static fromKeys(orig: Key, key: Key): string {
        return `${orig}${key}`;
    }
}