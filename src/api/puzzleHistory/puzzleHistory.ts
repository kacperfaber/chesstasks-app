export interface PuzzleHistory {
    id: number;
    puzzleId: number;
    userId: number;
    createdAt: number;
    moves: string;
    success: boolean;
}