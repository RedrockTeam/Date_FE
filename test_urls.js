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
                "head": "imgs/1.jpg",          //用户头像
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
                "cost_mode": "1",              //1AA, 2我请客, 3求请客
                "tags": ["吃饭", "睡觉"]        //用户标签
            },

            {
                "date_id": "4",                //约会 item id
                "head": "imgs/1.jpg",          //用户头像
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
                "cost_mode": "1",              //1AA, 2我请客, 3求请客
                "tags": ["吃饭", "睡觉"]        //用户标签
            }
        ],
        "status": 200,
        "info": "获取成功"
    },

    "/activity/list": {
        data:[{
            "activity_id": "3",            //activity item的id
            "head": "imgs/1.jpg",          //头像
            "activity_type": 1,            //类型
            "group_id": "1",               //group id
            "created_at": "1429446315",    //创建时间     时间戳
            "activity_time": "1429456315", //约的具体时间  时间戳
            "place": "重邮宾馆",            //地点
            "title": "来约炮!",             //标题
            "signature": "",                //副标题
            "erolled": 20,                  //多少人已报名
            "commented": 20,                //多少人已评论
            "praised": 20                  //多少人已点赞
        },
            {
                "activity_id": "3",            //activity item的id
                "head": "imgs/test.png",          //头像
                "group_id": "1",               //group id
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "signature": "前十名用户免费参与!!",//副标题
                "erolled": 20,                  //多少人已报名
                "commented": 20,                //多少人已评论
                "praised": 20                  //多少人已点赞
            }
        ],
        "status": 200,
        "info": "获取成功"
    },

    "/user/check": {
        data: {
            "uid": 1,           //uid
            "nickname": "sb",   //昵称
            "realname": "aegsg", //真实姓名
            "head": "http://xxxxxxx/",    //头像
            "signature": "safsh",     //签名 (约会宣言)
            "school": "cqupt",       //学校
            "academy": "qwr",        //学院
            "hobbies": ["esf", "aefseg"],  //爱好
            "gender" : "1",            //性别  `1`男 `2`女
            "authened": 1,          //是否认证过 `1`已认证 `2`未认证
            "fans": 123,            //粉丝量 (被关注)
            "followers": 25426,     //关注量 (主动关注)
            "charm": 5325,        //魅力值
            "contact": {            //联系方式 固定
                "weixin": "3454",   //微信号
                "tel": 2352525,   //手机号
                "qq": 3235235253, //qq
                "weibo": "sdhgt"   //微博
            }
        },
        status: 200,
        info: "成功"
    },

    "/user/message/recieve": {
        data: {
            "notice": [                             //通知部分 活动审核通知， 活动时间通知等
                {
                    "head":    "sg",             //来源用户头像
                    "content":  "拒绝了你的请求", //内容
                    "nickname": "shsh",  //来源用户昵称
                    "mid": "",            //来源约会的 date_id/ 活动的 activity_id
                    "type": 1           //通知内容的类型， 1.约会相关; 2. 活动相关
                }
            ],
            "news": [                            //别人发来的消息
                {
                    "head": "sg",               //来源用户头像
                    "content": "你好",            //内容
                    "nickname": "shsh",         //来源用户昵称
                    "uid": ""                   //来源用户uid
                }
            ]
        },
        "status": 200,
        "info": "成功"
    },

    "/banner": {
        "data": [{"href": "http://www.baodu.com", "img": "imgs/1.jpg"}, {"href":"http://ww.baidu.com", "img": "imgs/bg.jpg"}, {"href": "http://www.baidu.com", "img":"imgs/test.png"}],
        "status":200,
        info: "ok"
    },

    "error": {
        "status": 0,
        "info": "失败"
    }
};


module.exports = datas; //res data