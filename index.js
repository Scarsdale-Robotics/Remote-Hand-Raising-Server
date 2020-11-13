const express = require('express');
const open = require('open');
const app = express();
const api = require('./api/api');
const user = require('./user/user')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5000

api.init(app)
user.init(app)

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Listening on localhost:" + PORT);
        open('http://localhost:' + PORT);
    }
});
