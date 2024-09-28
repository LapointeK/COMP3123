const express = require("express");
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/
app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

// Default to firstname and lastname if no parameted values are given
app.get("/user", (req, res) => {
  const { firstname = "Kevin", lastname = "Lapointe" } = req.query;
  res.json({ firstname, lastname });
});

// http://localhost:3000/user?firstname=value&lastname=value
app.post("/user/:firstname/:lastname", (req, res) => {
  let { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// listen on port 3000
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}!`));
