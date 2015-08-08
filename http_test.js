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

    "/date/list": {
        "data": [
            {
                "date_id": "3",                //约会 item id
                "head": "lijixni123",          //用户头像
                "nickname": "smelrain",            //用户昵称
                "authened": 1,                  //该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",                    //用户id
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "date_type": "1",              // type
                "category_id": "1",            //
                "signature": "今天晚上我请客!",  //个性签名
                "erolled": 20,                  //多少人已报名
                "commented": 20,                //多少人已评论
                "praised": 20,                  //多少人已点赞
                "gender": 1,                   //性别 "1" 男性  "2"女性
                "cost_model": "1"              //1AA, 2我请客, 3求请客
            },

            {
                "date_id": "4",                //约会 item id
                "head": "xxxxxxxxxx",          //用户头像
                "nickname": "lijinxin",         //用户昵称
                "authened": 0,                  //该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",                    //用户id
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "date_type": "1",              // type
                "category_id": "1",            //
                "signature": "今天晚上我请客!",  //个性签名
                "erolled": 20,                  //多少人已报名
                "commented": 20,                //多少人已评论
                "praised": 20,                  //多少人已点赞
                "gender": 1,                   //性别 "1" 男性  "2"女性
                "cost_model": "1"              //1AA, 2我请客, 3求请客
            }
        ],
        "status": 200,
        "info": "获取成功"
    },

    //"/activity/list": {
    //    da
    //    "status": 200,
    //    "info": "获取成功"
    //},

    "error": {
        "status": 0,
        "info": "失败"
    }
};

function handle(req, res){
    var path = url.parse(req.url).pathname, resd;
    resd = datas[path == '/' ? 'error' : path];
    res.end( JSON.stringify(resd) );
}

server.listen(8080, function(){
    console.log("success listened at 5000 !!!!");
});