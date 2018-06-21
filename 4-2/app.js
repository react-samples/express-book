var http = require('http');
var path = require('path');
var morgan = require('morgan');
var express = require('express');

var app = express();

app.use(morgan('combined'));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get("/", function(req, res) {
  return res.render("index", {title: "Hello World"});
});


var server = http.createServer(app);
server.listen(3000);
