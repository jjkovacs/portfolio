var fs = require('fs')
var http = require("http")
var https = require("https")
var express = require("express")
const { nextTick } = require('process')
var app = express()
var httpPort = process.env.PORT || 80

app.use(express.static(__dirname + "/dist"))

var httpServer = http.createServer(app)
httpServer.listen(httpPort)

console.log("http server listening on %d", httpPort)
