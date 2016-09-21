// often we want to create an array of arrays for a graphing library
const points = [
    [4, 5],
    [10,1],
    [0,40]
];

// but the library wants the data to be structured as objects with x and y coords
//[
//    { x: 4, y: 5 },
//    { x: 10, y: 1 },
//    { x: 0, y: 40 }
//]

// Step 1: Capture x and y values
const point = points.map(pair => {
    const x = pair[0];
    const y = pair[1];
});

// Step 2: Destructure the array
const point1 = points.map(pair => {
    const [x,y] = pair;
});

// Step 3: Be clever and destructure within the argument list
const point2 = points.map(([x,y]) => {
});

// Step 4: Return destructured arguments to the desired object
const point3 = points.map(([x,y]) => {
    return {x: x, y: y};
});

// Step 5: Notice that key and value are identical, thus we can utilize the improved object literal syntax
const point4 = points.map(([x,y]) => {
    return {x, y};
});

console.log(JSON.stringify(point4));
// Gorgeous!
// [{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]
