// Chunk: A piece of data being sent through a stream

// Abstract (Base) Class: A type of constructor you never work directly with, 
//						  but inherit from.

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});