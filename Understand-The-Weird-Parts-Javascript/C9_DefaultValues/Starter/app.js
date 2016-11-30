function greet(name) {
	if (typeof name === 'string') {
    	name = name || '<Your name here>';
    	console.log('Hello, ' + name + '!'); // punctuation perfect
	} else {
		console.log('Nice try, nit-picker!');
	}
}

greet('Robbie');
greet(''); // Will evaluate as string but as false, so our || logic still works
greet(0);