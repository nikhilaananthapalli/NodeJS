var http = require('http');
var fs = require('fs');

http. createServer(function(req,res){
    fs.readFile('demo1.html',function(err,data){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
    res.end('Hello welcome to nodejs day2');
});
}).listen(1234);