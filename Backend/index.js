const http = require('http');
const path = require('path');
const express = require('express');

var app = express();

app.set('port', 3000);

const server = http.createServer(app);

app.get('/*', (req, res) =>{
    res.send(path.join(__dirname, 'public/index.html'))
})

server.listen(app.get('port'), () => {
    console.log("express server listening on port : " + app.get('port'));
})