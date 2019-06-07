// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var http = require("http");
var fs = require("fs");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // When we visit different urls, read and respond with different files
    switch (path) {
  
    case "/reserve":
      return fs.readFile(__dirname + "/reserve.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/tables":
      return fs.readFile(__dirname + "/tables.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
    case "/home":
      return fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  
      // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  }
  
  // Starts our server.
  server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });