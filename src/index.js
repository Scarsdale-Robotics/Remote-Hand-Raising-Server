const express = require("express")
const app = express()

const api = require("./api/api.js")
const user = require("./user/user.js")

api.init(app)
user.init(app)

app.listen(8080, function() {
    console.log("Listening on 8080.")
})