const http = require("http");
const fs = require("fs");
http
  .createServer(function(req, res) {
    fs.readFile("data.txt", function(error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (!error) res.write(data);
      else res.write("File name is  invalid");
      res.end();
    });
  })
  .listen(3001);
