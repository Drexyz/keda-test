const sort = require("./sort.js");

// Test #2
const maxsubarray = (arr, n) => {
	if (arr.length < n || n < 0) return null;

	const sumArrs = [];

	const startSum = arr.slice(0, n).reduce((acc, curr) => acc + curr, 0);
	sumArrs.push(startSum);

	for (let i = n; i < arr.length; i++) {
		const newSum = sumArrs[i - n] - arr[i - n] + arr[i];
		sumArrs.push(newSum);
	}

	return sort(sumArrs)[0];
};

module.exports = maxsubarray;
