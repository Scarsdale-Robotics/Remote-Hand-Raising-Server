const path = require("path")
const editJSON = require("edit-json-file", {
    autosave: true
});

function init(app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});

	app.get('/login', function (req, res) {
		res.sendFile(path.join(process.cwd(), "/site/login.html"));
	});

	app.post('/', function (req, res) {
		var data = editJSON('data.json');
		console.log("Button Raised = " + !data.get("isRaised"))
		data.set("isRaised", !data.get("isRaised"));
		data.save();
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});
	app.get('/auth/google',
		passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
	//passportApi.init(app);


	app.get('/auth/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		function (req, res) {
			res.redirect('/');
		});

}

exports.init = init;

