const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const createCar = require('./controllers/car/create');
const deleteCar = require('./controllers/car/delete');
const getCar = require('./controllers/car/get');
const updateCar = require('./controllers/car/update');

app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(path.resolve('index.html'));
});

// Get a car
app.get('/car/:id', (req, res) => { // This is a controller
	const car = getCar(req.params.id);

	if (!car) {
		return res.status(404).send({message: 'Car Not Found'});
	}

	res.send(car);
});

// Get a car's color
app.get('/car/:id/color', (req, res) => {
	const car = getCar(req.params.id);

	if (!car) {
		return res.status(404).send({message: 'Car Not Found'});
	}

	res.send({color: car.color});
});

// Create a car
app.post('/car', (req, res) => {
	const id = createCar(req.body);
	res.send({id});
});

// Update a car
app.put('/car/:id', (req, res) => {
	const updatedCar = updatedCar(req.params.id, req.body);

	if (!updatedCar) {
		return res.status(404).send({message: 'Car Not Found'});
	}

	res.send(updatedCar);
});

// Delete a car
app.delete('/car/:id', (req, res) => {
	const car = deleteCar(req.params.id);

	if (!car) {
		return res.status(404).send({message: 'Car Not Found'});
	}

	res.send({message: 'Your car was deleted'});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});