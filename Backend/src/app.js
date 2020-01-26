const http = require('http')
const express = require('express')

var app = express()

app.set('port', 3000);

const server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log("express server listening on port : " + app.get('port'));
})


console.log("hello chamo")