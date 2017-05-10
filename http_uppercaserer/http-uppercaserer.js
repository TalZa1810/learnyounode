let http = require('http');
let map = require('through2-map');

let server = http.createServer((req, res)=> {
    if (req.method !== 'POST') {
        return res.end('no POST method\n')
    }
    req.pipe(map((chunk)=> chunk.toString().toUpperCase())).pipe(res);
}).listen(process.argv[2]);