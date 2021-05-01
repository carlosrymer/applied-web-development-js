const fs = require('fs');
const { carDatabaseFilePath } = require('../../config');

module.exports = (id, updates) => {
	const existingCars = JSON.parse(fs.readFileSync(carDatabaseFilePath));
	let index;

	const car = existingCars.find((car, i) => {
		const isCar = car.id === parseInt(id);

		if (isCar) {
			index = i;

			return isCar;
		}

		return false;
	});

	if (!car) {
		return car;
	}

	const updatedCar = {
		...updates,
		id: car.id
	};

	existingCars.splice(index, 1, updatedCar)

	fs.writeFileSync(carDatabaseFilePath, JSON.stringify(existingCars));
	return updates;
};