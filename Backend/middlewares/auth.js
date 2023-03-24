const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	try {
		//console.log(req.headers.authorization);
var head = req.headers.authorization;
console.log('bonjour',head.split(''));
		const token = req.headers.authorization.split(' ')[1]
		console.log(token);

		const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
		const userId = decodedToken.userId
		req.auth = { userId }
		if (req.body.userId && req.body.userId !== userId) {
			console.log('je suis avant next')
			throw 'Invalid user ID'
		} else {
			console.log('je suis avant next')
			next()
		}
	} catch {
		res.status(401).json({
			error: new Error('You are not authenticated')
		})
	}
}
