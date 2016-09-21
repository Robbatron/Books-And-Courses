var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

var resultEvery = names.every(function (name) {
    return name.length > 4;
});

var resultSome = names.some(function (name) {
    return name.length > 4;
});