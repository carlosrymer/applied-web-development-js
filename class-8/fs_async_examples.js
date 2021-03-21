const fs = require('fs');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'file1.txt');
const filePath2 = path.resolve(__dirname, 'file2.txt');

// console.log('Path we will write to for file1: ', filePath1);
// console.log('Path we will write to for file2: ', filePath2);

fs.writeFile(filePath1, 'whatever', (err) => {
	if (err) {
		return console.error(err);
	}

	fs.writeFile(filePath2, 'whatever', (err) => {
		if (err) {
			return console.error(err);
		}

		fs.readFile(filePath1, (err, result1) => {
			if (err) {
				return console.error(err);
			}

			fs.readFile(filePath2, (err, result2) => {
				if (err) {
					return console.error(err);
				}

				if (result1.toString() === result2.toString()) {
					console.log('YES! The file contents match.');
				} else {
					console.log('NO! The file contents DO NOT match.');
				}
			});
		});
	});
});