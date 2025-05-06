require('dotenv').config(); // ⬅️ This loads variables from .env

let express = require('express');
let app = express();

console.log("Hello World");

// Logger middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Serve static assets from the "public" folder
app.use("/public", express.static(__dirname + "/public"));

// Serve index.html at the root route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

// Serve JSON on the /json route
app.get("/json", function(req, res) {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
      message = message.toUpperCase();
    }
    res.json({ message: message });
  });


 module.exports = app;
