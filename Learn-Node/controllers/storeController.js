exports.myMiddleware = (req, res, next) => {
	req.name = 'Robbie';
	res.cookie('name', 'Robbie is cool', { maxAge: 9000000 });
	if (req.name === 'Robbie') {
		throw Error('That is a stupid name');
	}
	next();
}

exports.homePage = (req, res) => {
	res.render('index');
}