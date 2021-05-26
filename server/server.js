/* eslint-disable no-console */
const path = require("path");

const express = require("express");

const app = express();
const PORT = 3000;

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving static files
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/bundle.js", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.js"));
});

// if request is made to no defined endpoint
app.use("*", (req, res) => res.status(404).json("Not Found"));

// global middleware handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
