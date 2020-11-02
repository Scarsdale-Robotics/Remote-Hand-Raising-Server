const express = require("express")
var app = express()

var api = require("./api/api.js")
var user = require("./user/user.js")

api.init(app)
user.init(app)

app.listen(8080, function() {
    console.log("Listening on 8080.")
})
