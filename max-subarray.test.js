const maxSubArray = require("./max-subarray");

test("it should return max sum subarray #1", () => {
	expect(maxSubArray([100, 200, 300, 400], 2)).toBe(700);
});

test("it should return max sum subarray #2", () => {
	expect(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test("it should return max sum subarray #3", () => {
	expect(maxSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test("it should return max sum subarray #4", () => {
	expect(maxSubArray([1, 2, 3], 3)).toBe(6);
});

test("it should return null when array length is less than inputted number", () => {
	expect(maxSubArray([1, 2, 3], 5)).toBe(null);
});

test("it should return 0 when inputted number is 0", () => {
	expect(maxSubArray([1, 2, 3], 0)).toBe(0);
});

test("it should return null when inputted number is less than 0", () => {
	expect(maxSubArray([1, 2, 3], -2)).toBe(null);
});
