import {groupBy} from "../../src/services/chess/groupBy";

describe('groupBy.ts', function () {
    describe("groupBy", function () {
        test(`does not throw`, function () {
            expect(() => groupBy([5, 10], (x) => x)).not.toThrow();
        });

        test('expected map length', function () {
            expect(groupBy([5, 10, 15, 20], x => x == 10 || x == 20).size).toBe(2);
        });

        test('expected items length', function () {
            expect(groupBy([5, 10, 5, 15, 5, 30], x => x).get(5)?.length).toBe(3);
        });
    })
});