import helloNathan from "../utils/helloNathan.js";

//auto test
it("outputs a name", () => {
    expect(helloNathan()).toBe("hello Nathan");
})
