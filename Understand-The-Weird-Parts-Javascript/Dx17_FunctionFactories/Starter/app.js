// "A factory is a function that makes or returns other things for me."
function makeGreeting(language) {
	return function(firstname, lastname) {
		language = language || 'en'; // fallback is english
		msg = {
			'en': 'Hello',
			'es': 'Hola',
			'de': 'Hallo'
			// insert new key:value here!
		}[language] + ', ' + firstname + ' ' + lastname + '!';
		console.log(msg);
	}
}

// Factories let you create functions from other functions!
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
var greetGerman = makeGreeting('de');

greetEnglish('John', 'Doe');
greetSpanish('Juan', 'Doe');
greetGerman('Max','Mustermann');