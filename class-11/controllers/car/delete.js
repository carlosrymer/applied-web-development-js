const fs = require('fs');
const { carDatabaseFilePath } = require('../../config');

module.exports = (id) => {
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

	existingCars.splice(index, 1)

	fs.writeFileSync('car_database.json', JSON.stringify(existingCars));
	return car;
};