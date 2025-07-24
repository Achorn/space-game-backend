const express = require("express");
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`running app on port ${port}`);
});
