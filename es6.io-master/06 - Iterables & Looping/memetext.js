// const meme = text =>
// 	[...text.toUpperCase()].reduce((prev, curr, i, ary) =>
// 		[`${prev[0]}${ary[i]}  `, `${prev[1]}\n${ary[i + 1] || ''}  `]
// 		, ['', '']).reduce((prev, curr) => prev + curr);

const meme = t =>
	[
		[...t.toUpperCase()]
			.join(' '), ...t
				.toUpperCase()
				.substr(1)
	]
		.join('\n');

const result = meme('Aesthetics');
console.log(result);