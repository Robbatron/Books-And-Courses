// Protocol: A set of rules two sides agree on to use when communicating.
// * Both the client and server are programmed to understand and use that
// * particular set of rules. It's similar to two people from different
// * countries agreeing on a language to speak in.


// Port: Once a computer receives a packet, how it knows what program to send it to.
// * When a program is setup on the operating system to receive packets from a particular
// * port, it is said that the program is 'listening' to that port.

// HTTP: A set of rules (and a format) for data being transferred on the web.
// * A format defining data being transferred via TCP/IP.

// Mime type: A standard for specifying the type of data being sent.
// * Stands for 'Multipurpose Internet Mail Extensions'.
// * Examples: application/json, text/html, image/jpeg

var http = require('http');

http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');

}).listen(1337, '127.0.0.1');