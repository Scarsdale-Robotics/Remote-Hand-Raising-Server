function init(app) {
    app.get("/user/", function(req, res) {
        res.send("You hit the user endpoint")
    })
}

exports.init = init