// just a starter server for backend

var express = require('express')
var app = express()

module.exports = { username :  } //still trying to figure out recieving an input

app.get('/justclimb', function (req, res) {
    res.json({ username: "User1", HighScore: "100" })
})
app.listen(3000)