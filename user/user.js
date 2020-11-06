const path = require("path")
const editJSON = require("edit-json-file", {
    autosave: true
});

function init(app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});

	app.post('/', function (req, res) {
		var data = editJSON('data.json');
		console.log("Button Raised = " + !data.get("isRaised"))
		data.set("isRaised", !data.get("isRaised"));
		data.save();
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});
}

exports.init = init
