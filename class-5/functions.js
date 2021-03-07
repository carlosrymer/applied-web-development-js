function storeUsername(username) {
	sessionStorage.setItem('username', username);

	console.log(username); // Works - local scope
}

console.log(username); // Doesn't work - global scope

function getUsername() {
	return sessionStorage.getItem('username');
}

const myUsername = 'carlosrymer';

storeUsername(myUsername);

getUsername();



// Access the name variable
const name = 'Carlos Rymer'; // Global scope

function storeNameFromParentScope() {
	sessionStorage.setItem('name', name);
}














function whatIsToday() {
	return (new Date()).getDate();
}

console.log(whatIsToday()); // 20