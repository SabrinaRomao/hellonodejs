var http = require('http');
//modulo do file system
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  //Lendo arquivo html
  fs.readFile('./views/index.html', (err, content) => {
    //retornando HTML
    res.end(content);
  });
}).listen(8080);
console.log('Server running at http://localhost:8080/');
