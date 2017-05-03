let http = require('http');
let url = process.argv[2];

http.get(url, function (response){
    response.setEncoding('utf8');
    //listening to an event
    response.on("data", console.log);
    response.on('error', console.error);
}).on('error', console.error);

