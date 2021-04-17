const fs = require('fs');
const { carDatabaseFilePath } = require('../../config');

module.exports = (car) => {
	const existingCars = JSON.parse(fs.readFileSync(carDatabaseFilePath));
	let id;
	let list;

	if (existingCars.length) {
		id = existingCars.slice(-1).pop().id + 1;
		list = existingCars;
	} else {
		id = 1;
		list = [];
	}

	const newCar = {
		id,
		...car
	};

	list.push(newCar);
	fs.writeFileSync(carDatabaseFilePath, JSON.stringify(list));

	return id;
};