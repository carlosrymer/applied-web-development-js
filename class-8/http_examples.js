const fs = require('fs');
const path = require('path');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	const indexFile = fs.readFileSync(path.resolve(__dirname, 'index.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(indexFile);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});