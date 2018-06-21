var http = require('http');
var morgan = require('morgan');
var express = require('express');

var app = express();

app.use(morgan("combined"));

app.get("/", function(req, res) {
  return res.send("Hello World");
});

var server = http.createServer(app);
server.listen(3000);
