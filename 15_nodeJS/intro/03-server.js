const http = require('http');

http.createServer((request, response) => {
    console.log(`servering request: ${request.method} ${request.url}`);
    response.writeHeader(200, {'Content-Type': 'text/plain'});
    if (request.url === '/groucho'){
        response.end("Hello Grouchoe")
    }else{
        response.end("Hello Anyone");
    }
}).listen(1337);


console.log(`http://localhost:1337`)