var http = require('http');
var dt = require('./task2_module.js');
http.createServer(function(req,res){
    res.write(dt.myDate());
    res.end();
}).listen(1234);