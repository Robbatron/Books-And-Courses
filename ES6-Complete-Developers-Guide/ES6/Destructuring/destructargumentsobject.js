var savedFile = {
  extension: '.jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}) {
    return `The file ${name}${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));
