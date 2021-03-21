const fs = require('fs');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'file1.txt');
const filePath2 = path.resolve(__dirname, 'file2.txt');

console.log('Path we will write to for file1: ', filePath1);
console.log('Path we will write to for file2: ', filePath2);

fs.writeFileSync(filePath1, 'whatever'); // Create file1.txt with 'whatever'
fs.writeFileSync(filePath2, 'whatever'); // Create file2.txt with 'whatever'

if (fs.readFileSync(filePath1).toString() === fs.readFileSync(filePath2).toString()) {
	console.log('YES! The file contents match.');
} else {
	console.log('NO! The file contents DO NOT match.');
}

// Alter file 1 by appending 'something'
fs.appendFileSync(filePath1, 'something');

if (fs.readFileSync(filePath1).toString() === fs.readFileSync(filePath2).toString()) {
	console.log('YES! The file contents match.');
} else {
	console.log('NO! The file contents DO NOT match.');
}

// Delete the two files to save space
fs.rmSync(filePath1);
fs.rmSync(filePath2);