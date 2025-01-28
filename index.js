var fs = require('fs')
var http = require("http")
var https = require("https")
var express = require("express")
const { nextTick } = require('process')
var redirectToHttps = require('express-http-to-https').redirectToHTTPS;
var key = fs.readFileSync('/etc/letsencrypt/live/portfolio.jameskovacs.io/privkey.pem')
var cert = fs.readFileSync('/etc/letsencrypt/live/portfolio.jameskovacs.io/fullchain.pem')
var app = express()
var httpPort = process.env.PORT || 80
var httpsPort = 443;

app.use(express.static(__dirname + "/dist"))
app.use(redirectToHttps());

var creds = { key: key, cert: cert};

var httpServer = http.createServer(app)
var httpsServer = https.createServer(creds, app);

// app.get('*', function(req, res){
//     console.log('Request', req.protocol, req.headers.host, req.url);
//     if(req.protocol === 'http') {
//         return res.redirect('https://' + req.headers.host + req.url);
//     }
// });

httpServer.listen(httpPort)
httpsServer.listen(httpsPort)

console.log("http server listening on %d", httpPort)
console.log("https server listening on %d", httpsPort)
