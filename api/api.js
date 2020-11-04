const idGen = require("./generateId")

function init(app) {
    app.get("/api/generateId", function(req, res) {
        res.send({id: idGen.next()})
    })
}

exports.init = init