const sumEvenNumbers = require("./sum-even-numbers");

const testObject1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: "yup",
		},
	},
};

const testObject2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: "ball", ccc: 5 },
	d: 1,
	e: { e: { e: 4 }, ee: "car" },
};

test("it should return correct sum number from testObject1", () => {
	expect(sumEvenNumbers(testObject1)).toBe(6);
});

test("it should return correct sum number from testObject2", () => {
	expect(sumEvenNumbers(testObject2)).toBe(12);
});
