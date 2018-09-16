const express = require("express");
const app = express();
const _ = require("lodash");
const repeat = require("./custom-module/non-repeat");
app.get("/non-repreat/:dataString", function(req, res) {
  let dataString = req.params.dataString;
  if (_.isString(dataString)) {
    let firstNonRepeatedCharacter = repeat.nonRepeat(dataString);
    res.write(`First Non-Repeated Character is : ${firstNonRepeatedCharacter}`);
  } else {
    res.write("Invalid String!");
  }
  res.end();
});
app.listen(3001);
