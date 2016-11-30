var objectLiteral = {
	firstName: 'Mary',
	isAProgrammer: true
};

// Convert to JSON
var json = JSON.stringify(objectLiteral);
console.log(json);

// Convert back to JS object
objectLiteral = JSON.parse(json);

console.log(objectLiteral);