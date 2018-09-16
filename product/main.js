const express = require("express");
const _ = require("lodash");
const app = express();
app.get("/product/:num1/:num2", function(req, res) {
  let a = req.params.num1;
  let b = req.params.num2;
  let p = 0;
  a = _.toNumber(a);
  b = _.toNumber(b);
  p = a * b;
  if (!_.isNaN(p)) res.write(`Product of both param: ${p}`);
  else res.write(`Please enter valid number`);
  res.end();
});
app.listen(3001);
