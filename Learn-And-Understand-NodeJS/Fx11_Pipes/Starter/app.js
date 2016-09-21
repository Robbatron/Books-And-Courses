// Pipe: Connecting two streams by writing to one stream what is being read from another
// * in node you pipe from a readable stream to a writable

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed); // sends readable chunk to writable stream

// Method Chaining: A method returns an object so we can keep calling more methods
// * sometimes it returns the parent object (called 'cascading') and sometimes some other object.

// Same as...

// readable.on('data', function(chunk) {
// 	console.log(chunk);
// 	writable.write(chunk);
// });
