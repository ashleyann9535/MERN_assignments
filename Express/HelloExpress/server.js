const express = require("express");
const app = express();
const PORT = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello Ashley" });
});

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );