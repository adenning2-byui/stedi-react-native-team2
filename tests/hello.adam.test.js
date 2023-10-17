import name from "../utils/name.adam.js";

test('should return "Adam"', () => {
    const result = name();
    expect(result).toBe("Adam");
});