// Closure
function sayHiLater() {
	var greeting = 'Hi!';
	setTimeout(function() {
		console.log(greeting)
	}, 3000);
}
sayHiLater();

// jQuery uses function expressions and first-class functions!
// $('button').click(function() {
//	
// });



// Callback function: A function you give to another
// function to be run when the first function is finished
function tellMeWhenDone(callMeMaybe) {
	var a = 1500; // some work
	setTimeout(function() {
		callMeMaybe(); // the 'callback', it runs the function I give it!
	}, a);
}

tellMeWhenDone(function() {
	alert('I am done!');
});

tellMeWhenDone(function() {
	console.log('All done...');
});