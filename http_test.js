var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    handle(req, res);
});

//res data
var datas = {
    "/user/login": {
        "data": {
            "uid": 10,
            "token": "reihgitdh346456",
            "nickname": "lijinxin",
            "completed": true
        },
        "status": 200,
        "info": "登录成功"
    },

    "error": {
        "status": 0,
        "info": "失败"
    }}
;

function handle(req, res){
    var path = url.parse(req.url).pathname, resd;
    resd = datas[path == '/' ? 'error' : path];
    res.end( JSON.stringify(resd) );
}

server.listen(8080, function(){
    console.log("success listened at 5000 !!!!");
});