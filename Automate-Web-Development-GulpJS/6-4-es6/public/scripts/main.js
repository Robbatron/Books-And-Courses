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

var person = new Person('Andy');

document.write(person.hello());
