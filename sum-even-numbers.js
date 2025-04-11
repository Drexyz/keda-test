const sumEvenNumbers = (obj) => {
	const extractedNumbers = [];

	const extractNumbers = (obj) => {
		for (const key in obj) {
			const value = obj[key];

			if (typeof value === "object" && value !== null) {
				extractNumbers(value);
			} else if (typeof value === "number") {
				extractedNumbers.push(value);
			}
		}
	};

	extractNumbers(obj);

	const evenNumbers = extractedNumbers.filter((num) => num % 2 === 0);

	return evenNumbers.reduce((acc, num) => acc + num, 0);
};

module.exports = sumEvenNumbers;
