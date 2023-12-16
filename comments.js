// Create web server

// 1. Load http module
var http = require('http');

// 2. Create web server by using http.createServer() method
var server = http.createServer(function(request, response) {

    // 3. Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 4. Send the response body as "Hello World"
    response.end('Hello World\n');
});

// 5. Prints a log once the server starts listening
server.listen(8081, function() {
    console.log('Server running at http://
