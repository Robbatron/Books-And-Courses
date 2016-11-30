var colors = ['red', 'blue', 'green'];

// We could do this...but it is prone to tiny mistakes.
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// But this is dramatically less code...

colors.forEach(function (color) {
    console.log(color);
});

// If we look at the png, forEach moves the arrow from red, to green, then blue.