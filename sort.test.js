const sort = require("./sort.js");

test("it should sorted array correctly", () => {
	expect(sort([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test("it should sorted array that have negative number correctly", () => {
	expect(sort([1, 2, 4, 3, -5, -3, 2, 1])).toEqual([4, 3, 2, 2, 1, 1, -3, -5]);
});

test("it should sorted empty array correctly", () => {
	expect(sort([])).toEqual([]);
});

test("it should sorted single element array correctly", () => {
	expect(sort([52])).toEqual([52]);
});
