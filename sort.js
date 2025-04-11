// Test #1
const sort = (arr) => {
	let sortedArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (sortedArr.length === 0) {
			sortedArr.push(arr[i]);
		} else {
			for (let x = 0; x <= sortedArr.length; x++) {
				if (x === sortedArr.length) {
					sortedArr.push(arr[i]);
					break;
				} else if (arr[i] > sortedArr[x]) {
					sortedArr.splice(x, 0, arr[i]);
					break;
				}
			}
		}
	}

	return sortedArr;
};

module.exports = sort;
