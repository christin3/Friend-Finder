var http = require('http');
function handleRequest7000(request, response) {
    response.end('It works! and you are aweseome. path:  ' + request.url);
}

function handleRequest7500(request, response) {
    response.end('It works but you suck. path: ' + request.url);
}
var server7000 = http.createServer(handleRequest7000);
var server7500 = http.createServer(handleRequest7500);

//tell the server what port to listen on
server7000.listen(7000,function (err) {
    if (err) {
        console.log("There is an error");
    }
    else{
        console.log("Server Listening on port: " + 7000)



    }
});

server7500.listen(7500,function (err) {
    if (err) {
        console.log("There is an error");
    }
    else{
        console.log("Server Listening on port: " + 7500)
    }
});

