var fs = require('fs');
fs.open('demo3.txt','w',function(err,file){
    if(err) throw err;
    console.log('Its opening');
})