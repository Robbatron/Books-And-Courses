var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30; // this will get omitted because there is not enough space in the buffer
console.log(view);