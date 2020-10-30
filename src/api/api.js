function init(app) {
    app.get("/api/", function(req, res) {
        res.send("You hit the api endpoint")
    })
}

exports.init = init