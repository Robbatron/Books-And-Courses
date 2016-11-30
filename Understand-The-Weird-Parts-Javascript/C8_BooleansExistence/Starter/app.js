var a;

// goes to internet and looks for a value, if it is found, set it to a

a = 0;

if (a || a === 0) { //strict equality is of higher precedence -> this prevents 0 from being coerced to false
	console.log('Something is there.');
}