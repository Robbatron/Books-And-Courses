var primaryColors = [
    {
        color: 'red'
    },
    {
        color: 'yellow'
    },
    {
        color: 'blue'
    }
];

var a = primaryColors.reduce(function (init, primaryColor) {
    init.push(primaryColor.color);
    return init;
}, []);

console.log(a);