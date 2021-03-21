const fs = require('fs/promises');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'file1.txt');
const filePath2 = path.resolve(__dirname, 'file2.txt');

console.log('BEGIN');

let fileResult1;

fs.writeFile(filePath1, 'whatever')
	.then(() => fs.writeFile(filePath2, 'whatever'))
	.then(() => fs.readFile(filePath1))
	.then((result) => fileResult1 = result)
	.then(() => fs.readFile(filePath2))
	.then((result) => {
		if (result.toString() === fileResult1.toString()) {
			console.log('YES! They match.');
		} else {
			console.log('NO! They DO NOT match.');
		}
	})
	.catch((e) => console.error(e));

console.log('PROCESSING');