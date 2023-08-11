var fs = require('fs');
fs.unlink('demo5.txt',function(err){
    if(err) throw err;
    console.log('File Deleted');
})