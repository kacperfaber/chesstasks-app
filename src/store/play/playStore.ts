import {Puzzle} from "../../api/puzzles/puzzle";
import {PuzzleDatabase} from "../../api/puzzles/puzzleDatabase";

type CurrentPlayStoreCriteria = {
    rankingOffset: number | undefined;
    themeId: number | undefined;
    database: PuzzleDatabase | undefined;
}

export class PlayStore {
    public static puzzles: Array<Puzzle> | undefined = undefined;

    public static currentSearchCriteria: CurrentPlayStoreCriteria | undefined = undefined;

    public static setPuzzles(puzzles: Array<Puzzle> | undefined, currentSearchCriteria: CurrentPlayStoreCriteria | undefined) {
        PlayStore.puzzles = puzzles;
        PlayStore.currentSearchCriteria = currentSearchCriteria;
    }

    public static hasPuzzles(): boolean {
        return this.puzzles != undefined && this.puzzles.length > 0;
    }

    public static getRandomPuzzleOrNull(): Puzzle | undefined {
        const puzzle = PlayStore.puzzles?.find(() => true);
        if (!puzzle) return undefined;
        PlayStore.deletePuzzleById(puzzle.id);
        return puzzle;
    }

    public static deletePuzzleById(id: number) {
        PlayStore.puzzles = PlayStore.puzzles?.filter(x => x.id != id);
    }
}