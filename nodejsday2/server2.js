var fs = require('fs');
fs.appendFile('demo1.html','Happy Saturday',function(err){
    if(err) throw err;
    console.log('Its There');
});