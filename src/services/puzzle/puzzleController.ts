import {Puzzle} from "../../api/puzzles/puzzle";

type PuzzleControllerMove = {
    computerMove: string;
    userMove: string;
}

function toMvs(moves: string): PuzzleControllerMove[] {
    const r: PuzzleControllerMove[] = [];
    let moveList = moves.split(" ");

    for (let x = 0; x < moveList.length; x+=2) {
        r.push({computerMove: moveList[x], userMove: moveList[x+1]});
    }

    return r;
}

export type PuzzleControllerResult = {
    move: string;
    finished: boolean;
    isOk: boolean;
    nextComputerMove: string | undefined;
    moves?: string[];
    expected: string;
}

export class PuzzleController {
    puzzle: Puzzle;
    moves: Array<PuzzleControllerMove>;
    index = 0;

    constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
        this.moves = toMvs(puzzle.moves);
    }

    start(): string {
        return this.moves[0].computerMove;
    }

    getBlock(): PuzzleControllerMove {
        return this.moves[this.index];
    }

    isFinished(): boolean {
        return this.index == (this.moves.length - 1);
    }

    goToNext(uci: string, expected: string): PuzzleControllerResult {
        this.index++;
        const block = this.getBlock();
        return {
            nextComputerMove: block.computerMove,
            finished: false,
            move: uci,
            isOk: true,
            expected
        }
    }

    getPushedMoves(includeThisOne: string): string[] {
        const arr: string[] = [];
        for (let x = 0; x < this.index; x++) {
            const {computerMove, userMove} = this.moves[x];
            arr.push(computerMove, userMove);
        }
        arr.push(this.moves[this.index].computerMove, includeThisOne);
        return arr;
    }

    pushMove(uci: string): PuzzleControllerResult {
        const {userMove, computerMove} = this.getBlock();
        if (userMove == uci) {
            let fin = this.isFinished();

            if (fin) {
                return {
                    isOk: true,
                    move: uci,
                    finished: fin,
                    nextComputerMove: undefined,
                    expected: userMove
                }
            }

            return this.goToNext(uci, userMove);
        }

        return {
            isOk: false,
            finished: false,
            move: uci,
            nextComputerMove: undefined,
            moves: this.getPushedMoves(uci),
            expected: userMove
        }
    }

}