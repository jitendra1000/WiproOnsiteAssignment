const express = require("express");
const app = express();
const _ = require("lodash");
const repeat = require("./custom-module/non-repeat");
app.get("/non-repreat/:dataString", function(req, res) {
  let dataString = req.params.dataString;
  if (_.isString(dataString)) {
    let firstNonRepeatedCharacter = repeat.nonRepeat(dataString);
    res.send(`First Non-Repeated Character is : ${firstNonRepeatedCharacter}`);
  } else {
    res.send("Invalid String!");
  }
});
app.listen(3001);
