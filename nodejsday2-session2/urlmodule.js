//urlmodule: http://localhost:2020/default.html?year=2023&month=july
//host=localhost:2020 pathname:default.html//.search
//url module- default module/in-built module
var url = require('url');
var adr = 'http://localhost:2020/default.html?year=2023&month=july';
//parse()- it will return a url object with each part of the url
var q =url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
//query key:value year:2023
var qdata=q.query;
console.log(qdata.month);
console.log(qdata.year);
console.log(url.parse('http://localhost:2020/default.html?year=2023&month=july'));