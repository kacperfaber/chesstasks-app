import {BoardObj, Colour} from "chlss";
import {Colours} from "chlss/dist/colour";

export function getColourToPlay(fen: string): Colour {
    return Colours.inverseColour(new BoardObj(fen).getColour());
}