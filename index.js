/**
* Homework Assignment #1
*/

// Dependencies:
var http = require("http");
var url = require ('url');
var config = require("./lib/config");


var httpServer = http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true); // true
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");
  var response;

  // There are only two possible responses (Depending on the request):
  if(trimmedPath == "hello") {
    response = {
      "message" : "world"
    }
    res.end(JSON.stringify(response));
  } else {
    response = {
      "Message" : "Nothing to do. Please use /hello"
    }
    res.end(JSON.stringify(response));
  }
});


httpServer.listen(config.httpPort, function(){
  console.log("Server listening on port " , config.httpPort);
});
