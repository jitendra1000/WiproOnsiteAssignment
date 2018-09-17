const express = require("express");
const fs = require("fs");
const app = express();
app.get("/writeData", function(req, res) {
  fs.readFile("old-demo-file.txt", function(err, data) {
    if (err) throw "File name is invalid";
    fs.appendFile("demo-file.txt", data, function(err) {
      if (err) throw err;
      res.send("Saved!");
    });
  });
});
app.listen(3001);
