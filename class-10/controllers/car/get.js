const fs = require('fs');
const { carDatabaseFilePath } = require('../../config');

module.exports = (id) => {
	const existingCars = JSON.parse(fs.readFileSync(carDatabaseFilePath));
	
	const car = existingCars.find((car) => car.id === parseInt(id));

	return car;
};