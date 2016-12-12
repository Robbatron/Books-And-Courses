const meme = text =>
	[...text.toUpperCase()]
	.reduce((accumulator, current, index, array) =>
		[
			`${accumulator[0]}${array[index]} `, 
			`${accumulator[1]}\n${array[index + 1] || ''}`
		], ['', ''])
		.reduce((accumulator, current) => accumulator + current);

const result = meme('Aesthetics');
console.log(result);






// const meme = t =>
// 	[
// 		[...t.toUpperCase()]
// 			.join(' '), ...t
// 				.toUpperCase()
// 				.substr(1)
// 	]
// 		.join('\n');