import {HttpUtils} from "../../src/api/httpUtils";

// TODO: This test is using reqres.in api/httpUtils.ts > httpUtils > getAsync

describe('api/httpUtils.ts', function () {
    describe("httpUtils", function () {
        describe("getAsync", function() {
            interface ReqresUserResponse {
                data: {
                    id: number;
                    email: string;
                };
            }

            test("does not throw", async function() {
                await HttpUtils.getAsync("https://reqres.in/api/users/2");
            });

            test("returns expected data", async function() {
                const user = await HttpUtils.getAsync<ReqresUserResponse>("https://reqres.in/api/users/2")
                expect(user.data.id).toBe(2);
                expect(user.data.email).toBe("janet.weaver@reqres.in");
            });
        });
    });
});