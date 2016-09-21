var person = { 
	firstName: 'Tony', 
	lastName: 'Tiger',
	address: {
		street: '111 Main St.',
		city: 'New York',
		state: 'NY'
	}
};

function greet(person) {
	console.log("Hey, " + person.firstName + "!");
}

greet(person);

greet( { firstName: 'Mary', lastName: 'Doe' } );

person.address2 = {
	street: '333 Second st.'
}