// HTTPS
const https = require('https');

const nytHomepage = https.get('https://www.nytimes.com', (req, res) => {
	console.log('RECEIVED NYT RESPONSE');
});

console.log('STARTED NYT REQUEST');

const ucboeHomepage = https.get('https://ucboe.us', (req, res) => {
	console.log('RECEIVED UCBOE RESPONSE');
});

console.log('STARTED UCBOE REQUEST');

// FILE SYSTEM
const fs = require('fs');

fs.readFile('./README.md', (err, body) => {
	console.log('FINISHED READING FILE', body);
});

console.log('STARTED READING FILE');