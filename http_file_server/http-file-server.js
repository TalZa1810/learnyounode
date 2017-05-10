let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    // This line opens the file as a readable stream
    let readStream = fs.createReadStream(process.argv[3]);

    // This will wait until we know the readable stream is actually valid before piping
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.on('open',()=> readStream.pipe(res));

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', (err)=>res.end(err));
}).listen(process.argv[2]);