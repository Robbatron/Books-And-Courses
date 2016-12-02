// Better and more generic greet function, no need for overloading...

// function greet(firstName, lastName, language) {
// 	language = language || 'en'; // fallback is english
// 	return msg = {
// 		'en': 'Hello',
// 		'es': 'Hola'
// 	}[language] + ', ' + firstName + ' ' + lastName + '!';
// }

// greet('John', 'Doe', 'en');
// console.log(msg);

// greet('Juan', 'Doe', 'es');
// console.log(msg);


// Function that demonstrates function overloading a little better

function greet(firstName, lastName, language) {
	language = language || 'en';

	if(language === 'en') {
		console.log('Hello, ' + firstName + ' ' + lastName + '!');
	}
	if(language === 'es') {
		console.log('Hola, ' + firstName + ' ' + lastName + '!');
	}
}

// Overloading is not supported since JS isn't strict about arguments
// So another method must be made that calls the first method and passes
// the extra argument that the base function requires.
function greetEnglish(firstName, lastName) {
	greet(firstName, lastName, 'en') // Passes intended parameter for you
}

function greetSpanish(firstName, lastName) {
	greet(firstName, lastName, 'es') // Passes intended parameter for you
}

greetEnglish('John', 'Doe');

greetSpanish('John', 'Doe');