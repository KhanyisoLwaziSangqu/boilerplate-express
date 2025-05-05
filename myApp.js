let express = require('express');
let app = express();

console.log("Hello World");

// Serve static assets from the "public" folder
app.use("/public", express.static(__dirname + "/public"));

// Serve index.html at the root route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

// Serve JSON on the /json route
app.get("/json", function(req, res) {
    res.json({ message: "Hello json" });
  });




































 module.exports = app;
