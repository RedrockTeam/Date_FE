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
                "nickname": "lijinxin",            //用户昵称
                "authened": 1,                  //该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",                    //用户id
                "created_at": "1439094919536",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "date_type": "1",              // type
                "category_id": "1",            //
                "signature": "今天晚上我请客shdjygkyfrjyfsgrbhftjytjrtjjjjjjjjjj!",  //个性签名
                "erolled": 20,                  //多少人已报名
                "commented": 20,                //多少人已评论
                "praised": 20,                  //多少人已点赞
                "gender": 1,                   //性别 "1" 男性  "2"女性
                "cost_mode": "1",              //0无限制 1AA, 2我请客, 3求请客 4无花费
                "tags": ["吃饭", "睡觉"]        //用户标签
            },

            {
                "date_id": "4",                //约会 item id
                "head": "imgs/1.jpg",          //用户头像
                "nickname": "libaohua",         //用户昵称
                "authened": 0,                  //该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",                    //用户id
                "created_at": "1439094919536",    //创建时间     时间戳
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
            "title": "约你妹!",             //标题
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
                "activity_time": "1429456315",     //约的具体时间  时间戳
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
            "head": "imgs/1.jpg",    //头像
            "signature": "safsh",     //签名 (约会宣言)
            "school": "重庆邮电大学",       //学校
            "academy": "光电工程学院",        //学院
            "hobbies": ["保龄球", "足球"],  //爱好
            "gender" : "1",            //性别  `1`男 `2`女
            "authened": 1,          //是否认证过 `1`已认证 `2`未认证
            "fans": 123,            //粉丝量 (被关注)
            "followers": 25426,     //关注量 (主动关注)
            "charm": 5325,        //魅力值
            "contact": {            //联系方式 固定
                "weixin": "3454",   //微信号
                "tel": 18166387284,   //手机号
                "qq": 3235235253, //qq
                "weibo": "weibo"   //微博
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

    "/date/detail": {
        "data": {
            "nickname": "srhdt",                                  //昵称
            "head": "imgs/test.png", //头像路径
            "gender": "2",        //性别
            "created_at": "1429446317",   //创建时间    时间戳
            "date_time": "1529456317",    //约会时间    时间戳
            "authened": 1,                  //该用户是否认证过 `1`已认证 `2`未认证
            "date_id": "1",                 //date id
            "place": "重邮宾馆",           //约会地点
            "title": "来约炮!",           //标题
            "content": "约炮要不要",      // 约会详细内容
            "limit": {                   //要求，固定为学院、性别、人数
                "academy": "se",    //学院, 没有则不限
                "number": 142,     //人数, 没有则不限
                "gender": 1          // 1 男性 2 女性 (没有/0) 则不限
            },
            "cost_mode": 1,            //消费类型
            "date_status": 1,           //约的状态 默认显示一个报名的按钮 , 1 已结束, 2 成功, 3 受理中 4 已拒绝
            "enrolled": [                //已报名人详情, 会把报了名的人列出来， 详情见设计图
                {
                    "uid": 23,           //该用户uid
                    "head": "imgs/1.jpg"         //头像
                },
                {
                    "uid": 23,          //该用户uid
                    "head": "imgs/test.png"         //头像
                }
            ],
            commented: [
                {
                    "uid": "435",      //该用户uid
                    nickname: "sh",   //昵称
                    "head": "imgs/1.jpg",     //头像
                    "content": "sghdj",    //评论内容
                    "time": 2524532     //评论时间  时间戳
                },
                {
                    "uid": "423",            //该用户uid
                    "head": "imgs/1.jpg",           //头像
                    "content": "sgsh",        //评论内容
                    "time": 2524532     //评论时间  时间戳
                }
            ]
        },
        status: 200,
        info: "成功"
    },
    "/activity/detail":{
        "data": {
            "head": "http:\/\/106.184.7.12:8002\/Public\/head.jpg", //头像路径
            "activity_id": "1",                                      //activity id
            "activity_type": 1,                                 //活动项目 0: 不限； 1: 娱乐； 2：运动； 3： 旅游； 4： 聚会； 5： 交流； 6： 学习；7：其他
            "created_at": "1429446317",                         //创建时间    时间戳
            "activity_time": "1529456317",                   //时间    时间戳
            "place": "重庆大剧院",                             //地点
            "title": "重庆音乐 '月堡音乐节'",                  //标题
            "signature": "前十名用户免费参与!!",              //副标题
            "content": "约炮要不要",                       // 约会详细内容
            "money": "2534",                                      //消费金额   以人民币计
            "activity_status":"1",                            //活动状态 默认显示一个报名的按钮 , 1 已结束, 2 成功, 3 受理中 4 已拒绝
            "activity_album": [                               //活动相册展示
                "imgs/1.jpg"
            ],
            "enrolled": [                //已报名人详情, 会把报了名的人列出来， 详情见设计图
                {
                    "uid": 23 ,           //报了名的uid
                    "head":   "imgs/test.png"  ,         //报了名的头像
                    "token": "ewgsg"       //token
                },
                {
                    "uid": 23 ,           //报了名的uid
                    "head":    "imgs/1.jpg",         //头像
                    "token": "ewgsg"       //token
                }
            ],
            commented: [
                {
                    "uid": "346",      //报了名的uid
                    "nickname": "smegsran", //昵称
                    "head": "imgs/1.jpg",     //头像
                    "content": "edrtrh",    //评论内容
                    "time":   2524532     //评论时间  时间戳
                },
                {
                    "uid": "shrddjf",            //报了名的uid
                    "nickname": "ryht",        //昵称
                    "head": "imgs/1.jpg",           //头像
                    "content": "dgdfjfyjdjtesht",        //评论内容
                    "time":   2524532     //评论时间  时间戳
                }
            ]
        },
        status: 200,
        info: "成功"
    },

    "/user/tags": {
        "data": ["游泳", "篮球", "足球", "乒乓球", "保龄球"],
        "status": 200,
        info: "获取成功"
    },

    "/user/complete": {
        "status": 200,
        "info": "ok"

    },
    "/search": {
        "data": {
            person: [         //热门用户
                {
                    "uid": "",    //用户id
                    "head": "",   //头像
                    "gender": "",  // 1 男	2 女
                    "signature": "" //个性签名(约会宣言)
                }

            ],
            activity: [       //热门活动
                {
                    "title": "",  //标题
                    "signature": "前十名免费玩耍，不收钱"  //优惠信息
                }
            ]
        },
        status: 200,
        info: "成功"
    },

    "/school": {
        status:200,
        info:"成功",
        data:[
            {
                school_id:1,
                school_name:"重邮"
            },
            {
                school_id:2,
                school_name:"重大"
            },
            {
                school_id:3,
                school_name:"家里蹲大"
            }
        ]
    },
    "/user/register/veri_code": {
        "status": 200,
        "info": "成功"
    },
    "/user/register": {
        "status": 200,
        "info": "成功"
    },
    "error": {
        "status": 0,
        "info": "失败"
    }
};


module.exports = datas; //res data