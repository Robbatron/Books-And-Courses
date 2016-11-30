var buf = new Buffer('Hello', 'utf8'); // utf8 is default, don't neeeed to specify
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo'); // overwrites 'He'
console.log(buf.toString());