var http = require('http');
var txt= require('./second_module.js');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write(txt.myMessage());
   const msg=txt.myMessage();
    console.log(msg);
    res.write(msg);
    res.end();
}).listen(300);