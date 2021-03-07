// Basic Class Example

class Planet {
	degreesAroundSun = 0;
	degreesAroundSelf = 0;

	constructor(props) {
		this.degreesAroundSun = 0;
		this.degreesAroundSelf = 0;
		this.name = props.name;
		this.diameter = props.diameter;
		this.galaxy = props.galaxy;
		this.proximityToStar = props.proximityToStar;
		this.rotationDays = props.rotationDays;
		this.lengthOfDay = props.lengthOfDay;

		const intervalTime = 5000;
		const degreesPerDay = 360 / this.rotationDays;

		setInterval(() => {
			const updatedDegrees = this.degreesAroundSun + degreesPerDay;
			this.rotateAroundSun(updatedDegrees);
		}, intervalTime);
	}

	getPositionAroundSun() {
		return this.degreesAroundSun;
	}

	getPositionAroundSelf() {
		return this.degreesAroundSelf;
	}

	rotateAroundSun(degrees) {
		this.degreesAroundSun = degrees;
	}

	rotateAroundAxis(degrees) {
		this.degreesAroundSelf = degrees;
	}
}

const earthProps = {
	name: 'Earth',
	diameter: 6000,
	galaxy: 'Milky Way',
	distanceFromSun: 10000,
	rotationDays: 365,
	lengthOfDay: 24
};
const earth = new Planet(earthProps);

const marsProps = {
	name: 'Mars',
	diameter: 3000,
	galaxy: 'Milky Way',
	distanceFromSun: 30000,
	rotationDays: 687,
	lengthOfDay: 15
};
const mars = new Planet(marsProps);

console.log(earth.getPositionAroundSun(), mars.getPositionAroundSun());

// Extending Class Example

class ExoPlanet extends Planet {
	getPositionAroundSun() {
		return 180;
	}
}

const prometheusProps = {
	name: 'Prometheus',
	diameter: 10000,
	galaxy: 'Milky Way',
	distanceFromSun: 1000000,
	rotationDays: 1500,
	lengthOfDay: 80
};
const prometheus = new ExoPlanet(prometheusProps);

console.log(
	'Earth Position: ',
	earth.getPositionAroundSun(),
	'Mars Position: ',
	mars.getPositionAroundSun(),
	'Prometheus Position: ',
	prometheus.getPositionAroundSun()
);
