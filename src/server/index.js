const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json([{ name: "Joshua" }, { name: "Serhii" }, { name: "Roman" }]);
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
