//express
const express = require("express");
const app = express();

// express json Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//path
const path = require("path");

//dotenv
require("dotenv").config({ path: ".env" });

// console.log(process.env);
console.log("The value of PORT is by env:", process.env.PORT);

// API Rought
app.use("/api", require("./api/routes/api_routes"));

// Serve Public static files
app.use("/public", express.static(path.join(__dirname, "public")));

// main rought
app.get("*", (req, res) => {
  res.send(
    ' <h1> <a href="http://localhost:9002/api/google-login">Users Credentials to login </a> </h1>'
  );
});

//error handeller
app.use((req, res, next) => {
  const error = new Error("Path Not found please read the docs");
  error.status = 404;
  next(error);
});

// error handeller
app.use((error, req, res, next) => {
  console.log("[ERROR HANDELLER]\t" + error);
  res.status(error.status || 500).json({
    error: {
      massage: error.message,
    },
  });
});

module.exports = app;
