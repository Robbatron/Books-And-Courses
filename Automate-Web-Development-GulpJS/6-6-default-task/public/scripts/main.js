class Person {
	constructor (name) {
		this.name = name;
	}
	hello() {
		if (typeof this.name === 'string') {
			return 'Hello, I am ' + this.name + '!';
		} else {
			return 'Hello!';
		}
	}
}

var person = new Person('Andrew');
var greetHTML = templates['greeting']({
	message: person.hello()
});

document.write(greetHTML);
