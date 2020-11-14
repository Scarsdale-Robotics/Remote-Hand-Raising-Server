const classroomMap = require("../classroommap");
const idGen = require("./generateId");
const editJSON = require("edit-json-file");

function init(app) {

    //Generates a new classroom id
    app.get("/api/generateId", function(req, res) {
        res.send({id: idGen.next()});
    })

    //Returns whether the robotic hand should be raised
    app.get("/api/handRaised/:classid", function(req, res) {
        let isRaised = classroomMap.hasHandRaised(req.params.classid);
        res.status(200).send({response: 200, raised: editJSON('data.json').get("isRaised")});
    })
}

exports.init = init
