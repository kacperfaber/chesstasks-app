import {ChessService} from "../../../src/services/chess/chessService";

describe('chessService.ts', function () {
    describe('chessService', function () {
        describe("getDests", function() {
            test("does not throw", function() {
                const fen = "8/8/P6P/8/6r1/8/5r2/k6K w - - 0 1";
                expect(() => ChessService.getDests(fen)).not.toThrow();
            });

            test("expected map keys length", function() {
                const fen = "8/8/P6P/8/6r1/8/5r2/k6K w - - 0 1";
                expect(ChessService.getDests(fen).size).toBe(2);
            });

            test("expected data returned - scenario 1", function() {
                const fen = "8/8/P6P/8/6r1/8/5r2/k6K w - - 0 1";
                const res = ChessService.getDests(fen);
                expect(res.get("a6")).toEqual(["a7"]);
                expect(res.get("h6")).toEqual(["h7"]);
            });
        });
    });
});