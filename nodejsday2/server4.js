var fs =  require('fs');
fs.writeFile('demo4.txt','Hi Everyone welcome to node js day2',function(err){
    if(err) throw err;
    console.log('success');
})
