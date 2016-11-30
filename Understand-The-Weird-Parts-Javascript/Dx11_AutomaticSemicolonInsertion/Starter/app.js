function getPerson() {
	return // syntax parser puts semicolon here since it sees a carriage return
	{
		firstName: 'Tony'
	}
}

console.log(getPerson());

function getPersonValid() {
	return {
		firstName: 'Tony'
	}
}

console.log(getPersonValid());