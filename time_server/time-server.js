let net = require('net');
let server = net.createServer(function (socket){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    month = month < 10? '0'+ month : month;
    day = day < 10? '0'+ day : day;
    hour =  hour < 10? '0'+ hour : hour;
    minutes = minutes < 10? '0'+ minutes : minutes;

    socket.write(year+"-"+month+"-"+day+" "+hour+":"+minutes);
    socket.end('\n');
});
server.listen(Number(process.argv[2]));