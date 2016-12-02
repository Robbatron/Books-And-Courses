// Literals in Functions

// Refactor to use enhanced literal notation

const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}