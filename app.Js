//Load modules  
var http = require('http');  
var url = require('url');
 
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }
 
  var port = process.env.PORT || 4000;
  http.createServer(onRequest).listen(port);
  console.log("Server has started on port " + port);
}
 
exports.start = start;