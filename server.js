var express = require('express');
var app = express();

app.use(express.static('./public'));

const server = require('http').Server(app);

var port = process.env.PORT || 8081;

var listener = server.listen(port, function (){
    console.log("RMM is running on port " + port);
});