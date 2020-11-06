const classroomMap = require("../classroommap")
const idGen = require("./generateId")

function init(app) {

    //Generates a new classroom id
    app.get("/api/generateId", function(req, res) {
        res.send({id: idGen.next()})
    })

    //Returns wether the robotic hand should be raised
    app.get("/api/handRaised/:classid", function(req, res) {
        let isRaised = classroomMap.hasHandRaised(req.params.classid)
        res.send({raised: isRaised})
    })
}

exports.init = init