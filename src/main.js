const http = require("http");
const fs = require('fs');
var path = require('path');
const port = 8080;

var mime = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "text/javascript"
};

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    filePath = '/index.html';
  } else {
    filePath = req.url;
  }
  var fullPath = __dirname + filePath;

  res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});
  fs.readFile(fullPath, function(err, data) {
    if (err) {
      // エラー時の応答
    } else {
      res.end(data, 'UTF-8');
    }
  });
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);