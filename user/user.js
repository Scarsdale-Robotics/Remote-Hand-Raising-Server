const path = require("path")
const classroomMap = require("../classroommap")

function init(app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});

	app.put('/:classid/hand', function (req, res) {
		classroomMap.raiseHand(req.params.classid)
		console.log("raised (put) = " + classroomMap.hasHandRaised(req.params.classid))
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});

	app.delete('/:classid/hand', function (req, res) {
		classroomMap.lowerHand(req.params.classid)
		console.log("raised (delete) = " + classroomMap.hasHandRaised(req.params.classid))
		res.sendFile(path.join(process.cwd(), "/site/index.html"));
	});
}

exports.init = init
