const person = {
	firstName: 'John',
	lastName: 'Smith',
	city: 'Union City',
	state: 'NJ',
	country: 'United States',
	age: 24,
	gender: 'male',
	superpower: 'Teacher of the Year',
	getAddress: function() {
		return this.city + ', ' + this.state + ', ' + this.country;
	}
};

// Local scope approach - pure functions
function getFullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

function getAddress(city, state, country) {
	return city + ', ' + state + ', ' + country;
}

function getAge(age) {
	return age;
}

function getGender(gender) {
	return gender;
}

function getSuperPower(superpower) {
	return superpower;
}

getFullName(person.firstName, person.lastName);
getAddress(person.city, person.state, person.country);
getAge(person.age);
getGender(person.gender);
getSuperPower(person.superpower);


// Global scope approach - non-pure functions
function getFullName() {
	return person.firstName + ' ' + person.lastName;
}

function getAddress() {
	return person.city + ', ' + person.state + ', ' + person.country;
}

function getAge() {
	return person.age;
}

function getGender() {
	return person.gender;
}

function getSuperPower() {
	return person.superpower;
}

getFullName();
getAddress();
getAge();
getGender();
getSuperPower();

// Method approch

person.getAddress();


const name = 'Carlos Rymer';

name.toLowerCase(); // 'carlosrymer'