var hello = require('http');
var dt=require('./first_module.js');
hello.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(dt.myDate());
    res.end();
}).listen(3001);