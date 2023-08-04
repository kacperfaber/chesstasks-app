import {PuzzleDatabase} from "./puzzleDatabase";

export interface Puzzle {
    id: number;
    fen: string;
    moves: Array<string>;
    database: PuzzleDatabase;
    themes: Array<string>;
    ranking: number;
    ownerId: number;
    openingId: number;
    createdAt: number;
}