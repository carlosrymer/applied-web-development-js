const connection = require('../../model/connection');

const queryString = 'SELECT * FROM cars WHERE id = ?';

module.exports = (id) => {
	return new Promise((resolve, reject) => {
		connection.query(queryString, [id], (err, results) => {
			if (err) {
				return reject(err);
			}

			//const car = results && results[0];

			return resolve(car);
		});
	});
};