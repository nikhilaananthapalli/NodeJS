//nodemailer module is a built-in module
var nodemailer = require('nodemailer');
//declare variable to create transport 
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aimlscet22@gmail.com',
        pass:'paxkeswnafkxhyma'
    }
});
var mailOptions = {
    from:'aimlscet22@gmail.com',
    to:'pravinconsensus@gmail.com',
    subject:'sending mail from Node-JS',
    text:'Happy weekend!'
};
transporter.sendMail(mailOptions,function(err,info){
    if(err) 
    {
        console.log(err);
    }
    else{
        console.log('Email sent:'+info.response);
    }
});