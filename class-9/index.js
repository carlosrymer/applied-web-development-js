const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/info', (req, res) => {
	const computerDetails = {
		os: 'MacOS',
		memory: '8GB',
		diskSpace: '500GB',
		cpu: '4 cores (2.5GHz)'
	};
    res.render('info', computerDetails);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});