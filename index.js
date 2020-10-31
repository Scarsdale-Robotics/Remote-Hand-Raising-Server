const express = require("express")
const app = express()

const api = require("./src/api/api.js")
const user = require("./src/user/user.js")

api.init(app)
user.init(app)

app.listen(8080, function() {
    console.log("Listening on 8080.")
})
