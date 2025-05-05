let express = require('express');
let app = express();

console.log("Hello World");

// Serve index.html at the root route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });




































 module.exports = app;
