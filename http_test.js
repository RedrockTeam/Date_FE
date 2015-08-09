var http = require('http'),
    url = require('url'),
    urls = require('./test_urls');

var server = http.createServer(function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    handle(req, res);
});


function handle(req, res){
    var path = url.parse(req.url).pathname, resd;
    resd = datas[path == '/' ? 'error' : path];
    res.end( JSON.stringify(resd) );
}

server.listen(8080, function(){
    console.log("success listened at 5000 !!!!");
});