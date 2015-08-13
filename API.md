# REDROCK DATE 前端改造数据API

##### 根据视觉所给页面和原型图还有上一版([https://github.com/RedrockTeam/Date_backend/blob/master/API.md](https://github.com/RedrockTeam/Date_backend/blob/master/API.md))给出

## 数据格式说明
`注:web 所有请求都为ajax请求类型页面`

`例如:`

 - url: /home/xxxx               //http请求地址
 - post 请求方法为post    

		{        //请求数据         
			     "uid": "",      //uid字段
		}

 - res: 
            
	`成功：`

			{                      //服务器返回的数据, 格式固定了
				 data: *,          //具体数据部分, 数据类型不限
				 status: 200/其他   //状态码, 200表示成功
				 info: "成功了"     //附加信息
 			}

	`失败:`

			{
				status: "401",
				info: "权限不够"
			}
			
			
## 获取banner 图片
  - url: /banner
  - post: 
        
        {
            "uid": "",
            "token": ""
        }
             
  - res: 
               
         {
            "data": [{"href": 'http://www.baidu.com', "img": ""}, ...], //href为外链, img为图片路径
            "status": 200,
            "info": "获取成功"
         }

## 注册

### 1. 获取手机验证码
  - url: user/register/veri_code
  - post: 
  
		{
			tel:  14135224534,        //手机号码
		}
  - res: 

		{
			status: 200,            //状态码
			info: "发送成功"        //info
		}

### 2. 注册手机号
  - url: user/register
  - post: 
  
		{
			veri_code:  "34e346GH" ,     //验证码
			tel: "",                   //手机号码
			password: "dhdthdthsthd"   //密码
		}

  - res
  	
		{
			status: 200, 
			info: "注册成功" 
		}
		


## 登录

`注： 用手机号码或用户名(完善信息)或者可以第三方认证登录(微信， qq, 等), 注册和登录, 与完善信息是关联的`

### 1. 登录
  - url: user/login
  - post:
		
		{
			username: "",    //账号(手机号或者用户名)
			password: "",    //密码
		}
  - res: 
  
		{
			data: {
			    nickname: "sa", //用户名
			    token: "235sdgsgwr4ewfvf",    //给用户的token
                head: "",                //获取用户的头像
                uid: "2523",       //分配给用户的uid
                completed: 0       //是否已经完善了必填的信息, 用于分配给用户功能， `0` 未完善，   `1` 已经完善
			}
			status: 200,     //状态码
			info: "成功"
		}


### 2. 完善信息
`注： 如果登录了之后， 没有完善必填的信息， 用户将得不到功能, 并转到完善信息, 且与修改信息用的是同样的接口`

`*：用户认证即上传了学生证且通过审核的`

  - url: /user/alter
  - post:
  
		{
			
			"uid": "",               //uid
        	"nickname":"sb",        //昵称      必填
			"realname": "sdgs",     //真实姓名   必填
			"school": "cqupt",      //学校      必填
			"academy": "qwr",        //学院
			"stu_id": 141352353,    //学号      必填
			"head": "",             //头像      必填
        	"signature":"xxxxxx",   //个性签名
        	"gender":"1", //1男, 2女  //性别     必填
			"hobbies": ["ewg", "weewg"],        //爱好  像qq标签那种形式
        	"token": ""
		}

  - res: 

		{
			"status": "200",
        	"info": "成功"
		}

## 找回密码
`找回密码，通过修改密码的方式，适用于手机号码注册的`

### 1. 获取验证码
  - url: /user/FindPasswd/veri_code
  - post: 
  
		{
			tel:  14135224534,        //手机号码
		}
  - res: 

		{
			status: 200,            //状态码
			info: "发送成功",        // info
		}
		
### 2.找回密码短信验证
  - url: /user/findPasswd/verify
  - post: 
  
        {
            "data":{
                "token": "qwaert"             //验证确认过后发送的token时效检测
            },
            "veri_code": "",     //验证码
            "tel": 142141355,   //手机
        }
        
  - res: 
  
        {
            "status": 200,
            "info": "验证成功"
        }

### 3. 重置密码
  - url: /user/findPasswd/reset
  - post

		{
			token:  "34e346GH" ,        //token 时效
			tel: "",                    //手机号码
			password: "dhdthdthsthd"    //密码
		}
  - res
  
		{
			status: 200, 
			info: "修改成功"         
		}

## 个人信息
`注： 个人(或他人)信息查看和修改 ；关于认证： 上传了学生证的就是认证了的`

### 1.个人信息查看
  - url: /user/check
  - post: 

		{
			"uid":1,
        	"check_uid":"",   //需要获取的用户的uid
        	"token":""
		}

  - res: 

		{
			data: {
				"uid": 1,           //uid
                "nickname": "sb",   //昵称
				"realname": "aegsg"， //真实姓名
                "head": "http://xxxxxxx/",   //头像
   				"signature": "safsh",     //签名 (约会宣言)
				"school": "cqupt",       //学校
				"academy": "qwr",        //学院
				"hobbies": ["esf", "aefseg"],  //爱好
                "gender" : "1",            //性别  `1`男 `2`女
				"authened": 1,          //是否认证过 `1`已认证 `2`未认证
				"fans": 123,            //粉丝量 (被关注) 
				"followers": 25426,     //关注量 (主动关注)
				"charm": 5325           //魅力值
				"contact": {            //联系方式 固定
						"weixin": "3454",   //微信号
						"tel": 2352525,   //手机号
						"qq": 3235235253, //qq
						"weibo": "weygyed"   //微博
					}
			},
			status: 200,
			info: "成功"
		}

### 2. 修改个人信息
`与完善信息是在一起用的, 有字段的则修改， 没有则不修改`

  - url: /user/alter
  - post:
  
		{
			"uid": "",               //uid
        	"nickname":"sb",        //昵称      必填
			"realname": "sdgs",     //真实姓名   必填
			"scholl": "cqupt",      //学校      必填
			"academy": "qwr",        //学院
			"stu_id": 141352353,    //学号      必填
			"head": "",             //头像      必填
        	"signature":"xxxxxx",   //个性签名
        	"gender":"1", //1男, 2女  //性别     必填
			"stu_img": "",           //学生证 上传
			"hobbies": ["ewg", "weewg"],        //爱好  像qq标签那种形式
        	"token": ""
		}

  - res: 

		{
			"status": "200",
        	"info": "成功"
		}

### 3.查看收藏&参与的约会
`收藏和参与的约会的数据格式一样`

  - url: /user/collection （收藏）         /user/recorded （参与的约会）   
  - post: 

		{
			"uid": "",    //uid
			"get_id": "", //所要查看的人的
			"type": 1,    //`1`表示 活动 `2`表示 约会
			"token": "",    //token
		}

  - res: 
  
	<b style="color:red">活动：</b>

		{
			data:[{
                "activity_id": "3",            //activity item的id
                "head": "xxxxxxxxxx",          //头像
                "group_id": "1",			   //group id	
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "signature": "前十名用户免费参与!!",  //优惠信息  
				"erolled": 20,                  //多少人已报名
				"commented": 20,                //多少人已评论
				"praised": 20                  //多少人已点赞
            },
            {
                "activity_id": "3",            //activity item的id
                "head": "xxxxxxxxxx",          //头像
                "group_id": "1",			   //group id	
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "signature": "前十名用户免费参与!!",//优惠信息  
				"erolled": 20,                  //多少人已报名
				"commented": 20,                //多少人已评论
				"praised": 20,                  //多少人已点赞
            }],
            "status" : 200,
            "info" : "成功"
	}

	<b style="color:red">约会：</b>

		{
			data:[{
                "date_id": "3",                //约会 item id
                "head": "xxxxxxxxxx",          //头像
                "uid": "1",				   //用户id	
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "gender_limit": "1",           //性别限制
                "academy_limit": [],           //学院限制
                "grade_limit": [],             //年极限制
                "signature": "今天晚上我请客!",  //个性签名   
				"erolled": 20,                 //多少人已报名
				"commented": 20,               //多少人已评论
				"praised": 20,                  //多少人已点赞
				"tag": "吃饭",                   //标签
				"gender": 1，                    //性别 "1" 男性  "2"女性
				"mode": "1",              //1AA, 2我请客, 3求请客
				"nickname": "segrdh"            //昵称
            },
            {
                "date_id": "2",
                "head": "xxxxxxxxxx",
                "uid": "1",
                "created_at": "1429446316",
                "date_time": "1429456316",
                "place": "重邮宾馆",
                "title": "来约炮!",
                "gender_limit": "1",
                "academy_limit": [],
                "grade_limit": [],
                "signature": "今天晚上我请客!",
				"erolled": 20,                  //多少人已报名
				"commented": 20,               //多少人已评论
				"praised": 20,                  //多少人已点赞
				"tag": "打炮" ，                 //标签
				"gender": 1 ，                   //性别 "1" 男性  "2"女性 
				"mode": "1" ，             //1AA, 2我请客, 3求请客
				"nickname": "sehr"
            }],
            "status" : 200,
            "info" : "成功"
		}


### 4. 获取热门爱好标签
`热门标签, 以给修改信息用:`

  - url: /user/tags
  - post:

		{
			uid: "",   //uid
			token: "" //token
		}
  - res

		{
			data: [
				"足球"， 
				"绘画",
				"音乐"
			],
			status: 200, 
			info： "成功!!"
		}

### 5. 实名认证
`上传学生证照片`

  - url: /user/authen
  - post (ajax 上传图片)

		{
			"uid": "",
			"token": ""
		}
  - res: 

		{
			status: 200,
			info: "上传成功"
		}
### 6. 设置
`一些功能的设置`

###### a. 活动设置
  - url: /user/set/activity
  - post:

		{
			"uid": , //uid
			"token": , //token
			"before": ["day", "month"]   //可选 活动提前多少时间通知 "day": 一天, "month": 一个月
		}

  - res: 

		{
			"status": 200,
			"info": "设置成功！！！"
		}

###### b. 关于我们
  - url: /user/set/about
  - post:

		{
			"uid": "",
			"token": ""
		}

  - res: 

		{
			"data": "",     //内容
			"status": 200,
			"info": ""
		}

### 7. 获取我的粉丝
  - url: /user/fans
  - post:
  
		{
			"uid": "",
			"token": ""
		}

  - res: 

		{
			"data": [
				{
					"head": "xxxxxxxxxx",          //头像
                	"uid": "1",				   		//用户id
					"gender": 1，                    //性别 "1" 男性  "2"女性
					"signature": "今天晚上我请客!"    //个性签名   
				},
				{
					"head": "xxxxxxxxxx",           //头像
                	"uid": "1",				   		//用户id
					"gender": 1，                    //性别 "1" 男性  "2"女性
					"signature": "今天晚上我请客!"    //个性签名   
				}				
			],
			"status": 200,
			"info": "成功"
		}

### 8. 查看我发起的约会
  - url: /user/launched
  - post:
  
		{
			"uid": "",
			"token": ""
		}

  - res: 

		{
			"date": [{
                "date_id": "3",                //约会 item id
                "head": "xxxxxxxxxx",          //头像
                "uid": "1",				       //用户id	
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "gender_limit": "1",           //性别限制
                "academy_limit": [],           //学院限制
                "grade_limit": [],             //年极限制
                "signature": "今天晚上我请客!",  //个性签名
				"date_status": 1,              //约的状态 默认显示一个报名的按钮 , 1 已结束, 2 成功, 3 受理中 4 已拒绝
				"erolled": 20,                 //多少人已报名
				"commented": 20,               //多少人已评论
				"praised": 20,                  //多少人已点赞
				"tag": "吃饭",                   //标签
				"gender": 1，                    //性别 "1" 男性  "2"女性
				"mode": "1",              //1AA, 2我请客, 3求请客
				"nickname": "segrdh"            //昵称
            },
            {
                "date_id": "3",                //约会 item id
                "head": "xxxxxxxxxx",          //头像
                "uid": "1",				       //用户id	
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "gender_limit": "1",           //性别限制
                "academy_limit": [],           //学院限制
                "grade_limit": [],             //年极限制
                "signature": "今天晚上我请客!",  //个性签名
				"date_status": 1,              //约的状态 默认显示一个报名的按钮 , 1 已结束, 2 成功, 3 受理中 4 已拒绝
				"erolled": 20,                 //多少人已报名
				"commented": 20,               //多少人已评论
				"praised": 20,                  //多少人已点赞
				"tag": "吃饭",                   //标签
				"gender": 1，                    //性别 "1" 男性  "2"女性
				"mode": "1",              //1AA, 2我请客, 3求请客
				"nickname": "segrdh"            //昵称
            }],
			"status": 200,
			"info": "成功！！！！"
		}

### 9. 关注他人
  - url: /user/follow
  - post:

		{
			"uid": "",
			"token": "",
			"fuid": "" // 关注人的uid 
		}

  - res: 

		{
			"status": 200,
			"info": "成功！！！！"
		}
	
## 主页

### 1. 约会列表
  - url: /date/list
  - post: 
  
		{
			"uid": "",
    		"token": "",
    		"date_type": 1, // 即所约会类型,类型是固定了的 默认为 `0` 不限 ,'1`运动 `2` 聚会 `3` 娱乐 `4` 拼车 `5` 交流 `6` 学习 `7` 旅游 `8` 活动(与发现那个模块不是一个) `9` 其它
    		"page": ,    //可选参数 页码
    		"size": ,    //可选参数 每页条数
			"order": 1,  // 1. 人气最热, 根据浏览量和魅力值计算 2.发布最新   默认为 2
			"date_gender": 1, // 为选择 `0` 全部(默认) `1` 男性 `2` 女性
			"cost_mode": 1,    //消费方式的选择，`0` 不限(默认)  `1` AA, `2` 我请客, `3` 求包养 `4` 无消费 `5` 
			"date_time": 0    //活动时间 `0` 不限； `1` 今天； `2` 两天内； `3` 一周内； `4` 只看周末
		}
  - res:
  
		{
            data:[{
                "date_id": "3",                //约会 item id
                "head": "xxxxxxxxxx",          //用户头像
				"nickname": "segrdh"            //用户昵称
				"authened": 1,          		//该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",				       //用户id
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
				"gender": 1，                    //性别 "1" 男性  "2"女性
				"cost_mode": "1",              //1AA, 2我请客, 3求请客
				"tags": ["吃饭", "睡觉"]       //个人爱好标签
            },
            {
                "date_id": "3",                //约会 item id
                "head": "xxxxxxxxxx",          //头像
                "uid": "1",				       //用户id
                "created_at": "1429446315",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
				"authened": 1,          		//该用户是否认证过 `1`已认证 `2`未认证
                "date_type": "1",              // type
                "category_id": "1",            //
                "signature": "今天晚上我请客!",  //个性签名   
				"erolled": 20,                  //多少人已报名
				"commented": 20,                //多少人已评论
				"praised": 20,                  //多少人已点赞
				"gender": 1，                    //性别 "1" 男性  "2"女性
				"mode": "1",              //1AA, 2我请客, 3求请客
				"nickname": "segrdh",            //昵称
				"tags": ["吃饭", "睡觉"]       //个人爱好标签
            }],
            "status" : 200,
            "info" : "成功"
        }


### 2. 约会详情
  - url: date/detail
  - post:
  
		{
			"date_id" : "",     //约会id
            "uid": "",          //uid
            "token": ""         //token
		}
  - res:

		{
		 	 "data": {
                 "nickname": "",                                  //昵称
                 "head": "http:\/\/106.184.7.12:8002\/Public\/head.jpg", //头像路径
                 "gender": "2",        //性别
                 "created_at": "1429446317",   //创建时间    时间戳
                 "date_time": "1529456317",    //约会时间    时间戳
                 "authened": 1,                  //该用户是否认证过 `1`已认证 `2`未认证
                 "date_id": "1",                 //date id
                 "place": "重邮宾馆",           //约会地点
                 "collected": true,             //约会是否已经收藏过
                 "title": "来约炮!",           //标题
                 "content": "约炮要不要",      // 约会详细内容
                 "limit": {                   //要求，固定为学院、性别、人数
                     "school": "se",    	//学校, 没有则不限
                     "number": 142,     //人数, 没有则不限
                     "gender": 1          // 1 男性 2 女性 (没有/0) 则不限
                 },

                 "mode": 1,            //消费类型
                 "date_status": 1,           //约的状态 默认显示一个报名的按钮 , 0 未报名 1 已结束, 2 成功, 3 受理中 4 已拒绝
                 "enrolled": [                //已报名人详情, 会把报了名的人列出来， 详情见设计图
                     {
                         "uid": 23,           //该用户uid
                         "head": ""         //头像
                     },
                     {
                         "uid": 23,          //该用户uid
                         "head": ""         //头像
                     }
                 ],
                 commented: [

                     {
                         "uid": "",            //该用户uid
                         "nickname": "srh",    //昵称
                         "head": "",           //头像
                         "content": "",        //评论内容
                         "time": 2524532     //评论时间  时间戳
                     }
                 ]
             },
             status: 200,
             info: "成功"
        }     

### 3. 报名约会
  - url: /date/register
  - post: 
  
		{
			uid:"",
        	token:"",
        	date_id:""   //date_id
		}

  - res: 

		{
			info:"成功";
        	status:200
		}

### 4. 评论约会
  - url: /date/comment
  - post:

		{
			"uid": 235,   //uid
			"token": "",   //token
			"date_id:""   //date_id
			"content": "sbsbsbsbsb"， //"评论的内容"
		}

  - res: 
  
		{
			"status": 200,
			"info": "成功"
		}

### 5. 约会收藏
  - url: /date/collect
  - post: 

		{
			"uid": 235,   //uid
			"date_id:""   //date_id
			"token": "",   //token
		}
  - res: 

		{
			"status": "200",
        	"info": "成功"
		}
		
### 5. 取消约会收藏
  - url: /date/delCollect
  - post: 

		{
			"uid": 235,   //uid
			"date_id:""   //date_id
			"token": "",   //token
		}
  - res: 

		{
			"status": "200",
        	"info": "成功"
		}

### 6. 发布约会
  - url: /date/create
  - post

		{
			"date_type" : "约会类型id",   //即所约会类型,类型是固定了的 默认为 '1`运动 `2` 聚会 `3` 娱乐 `4` 拼车 `5` 交流 `6` 学习 `7` 旅游 `8` 活动(与发现那个模块不是一个) `9` 其它
        	"title": "xxxx(n字以内)",     //标题
        	"content": "xxxxxxx",        //详情
        	"date_time": "时间戳",        //约会时间
        	"date_place": "约会地点",	 //地点
        	"gender_limit": "",         //性别限制
        	"school_limit": "",         //学校限制
        	"cost_type": "", //消费方式的选择，`0` 全部(默认)  `1` AA, `2` 我请客, `3` 求包养 `4` 无消费 `5` 
        	"uid": "",
        	"token": ""	
		}

	- res:

		{
			status: 200,
			info: "发布成功！！！"
		}
## 活动(即发现页)
`注：发现页是新增的, 涉及到是非个人发起的, 就以group来代替user`

### 1. 活动列表页
`由于活动版块是由后台运营`

  - url: /activity/list
  - post: 
  
		{
			"uid": "",
    		"token": "",
    		"page": , //可选参数 页码
    		"size": ,//可选参数 每页条数
			"order": 1,          // 排序方式 1. 离我最近, 根据地理位置计算 2.发布最新
			"activity_type": 1,  //活动项目 0: 不限； 1: 娱乐； 2：运动； 3： 旅游； 4： 聚会； 5： 交流； 6： 学习； 7:其他 
			"cost_mode":  0,    // 消费模式,以元计， 0:不限; 1:< 30； 2: 30-50; 3: 50-100; 4: 100-200; 5: 200-300; 6: 300-500; 7 >500   
			"activity_time": 0,     //活动时间 0 不限； 1：今天； 2： 三天内； 3: 一周内； 4: 只看周末
		}
  - res:
  
		{
            data:[{
                "activity_id": "3",            //activity item的id
                "head": "xxxxxxxxxx",          //头像
				"activity_type": 1,            //类型
                "group_id": "1",			   //group id	
                "created_at": "1429446315",    //创建时间     时间戳
                "activity_time": "1429456315", //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "signature": "前十名用户免费参与!!", //副标题  
				"erolled": 20,                  //多少人已报名
				"commented": 20,                //多少人已评论
				"praised": 20                  //多少人已点赞
            },
            {
                "activity_id": "3",            //activity item的id
                "head": "xxxxxxxxxx",          //头像
                "group_id": "1",			   //group id	
                "created_at": "1429446315",    //创建时间     时间戳
                "activity_time": "1429456315",     //约的具体时间  时间戳    
                "place": "重邮宾馆",            //地点
                "title": "来约炮!",             //标题
                "signature": "前十名用户免费参与!!",//副标题 
				"erolled": 20,                  //多少人已报名
				"commented": 20,                //多少人已评论
				"praised": 20,                  //多少人已点赞
            }],
            "status" : 200,
            "info" : "成功"
        } 

### 2.活动详情页获取
  - url: /activity/detail
  - post: 
  
		{
			"uid"： "",        //uid
			"token": "",       //token
			"activity_id": ""   //要获取的activity id
		}

  - res: 

		{
			"data": {
         	 	"head": "http:\/\/106.184.7.12:8002\/Public\/head.jpg", //头像路径
         	 	"activity_id": "1",           							 //activity id 
				"activity_type": 1,                                 //活动项目 0: 不限； 1: 娱乐； 2：运动； 3： 旅游； 4： 聚会； 5： 交流； 6： 学习；7：其他
         	 	"created_at": "1429446317",   						//创建时间    时间戳
         	 	"activity_time": "1529456317",   				 //时间    时间戳
         	 	"place": "重庆大剧院",           					//地点
         		"title": "重庆音乐 '月堡音乐节'",           		//标题  
				"signature": "前十名用户免费参与!!",              //副标题
				"collected": true,                               //活动是否已经收藏过
				"content": "约炮要不要",      					// 约会详细内容   
         		"money": ,                						//消费金额   以人民币计
         	 	"activity_status":"1",           				  //活动状态 默认显示一个报名的按钮 , 1 已结束, 2 成功, 3 受理中 4 已拒绝
				"activity_album": [                               //活动相册展示
						"sgs.jpg",
						""
				],
          	    "enrolled": [                //已报名人详情, 会把报了名的人列出来， 详情见设计图 
					  {
						"uid": 23 ，           //报了名的uid
						"nickname": "sdg",     //昵称
						"head":     ，         //报了名的头像
						"token": "ewgsg"       //token
					  },
					  {
						"uid": 23 ，           //报了名的uid
						"nickname": "sdg",     //昵称
						"head":     ，         //头像
						"token": "ewgsg"       //token
					  }			
				],
				commented: [           	
					  {
							"uid": "",	    //报了名的uid
							"head": "",     //头像    
						    "content": ""    //评论内容
					  },
					  {
							"uid": "",	          //报了名的uid
							"head": "",           //头像    
						    "content": "",        //评论内容
							"time":   2524532     //评论时间  时间戳
					  },
				]
			}，
			status: 200,
			info: "成功"
		}
### 3. 报名活动
  - url: /activity/register
  - post: 
  
		{
			uid:"",
        	token:"",
        	activity_id:""   //date_id
		}

  - res: 

		{
			info:"成功";
        	status:200
		}

### 4. 评论活动
  - url: /activity/comment
  - post:

		{
			"uid": 235,   		//uid
			"token": "",   		//token
			"activity_id:""   //activity_id
			"content": "sbsbsbsbsb"， //"评论的内容"
		}

  - res: 
  
		{
			"status": 200,
			"info": "成功"
		}
### 5. 收藏活动
  - url: /activity/collect
  - post: 

		{
			"uid": 235,        //uid
			"activity_id:""   //date_id
			"token": "",      //token
		}
  - res: 

		{
			"status": "200",
        	"info": "成功"
		}




## 搜索

### 1.对内容的搜素

  - url: /search/do
  - post: 

		{
			"uid": "", //uid
			"content": "", //搜素的内容
			"type": 1 ,   //只限制在某一个模块搜索  1 全部 2 用户名 3 活动
			"token": ""
		}

  - res: 

		{
			"data": [
				person: [         //搜索到用户
					"uid": "",
					"head": "",   //头像
					"gender": "",  // 1 男	2 女	
					"signature": "", //个性签名(约会宣言)
				],
				activity: [       //搜索到活动
					"title": "",  //标题 
					"signature": "前十名免费玩耍，不收钱"  //优惠信息   
				]
			],
			status: 200,
			info: "成功"
		}

### 2. 热门搜索
  - url: /search/hot
  - post:
		{
			"uid": "",
			"token": "",	
		} 
  - res:

		{
			"data": [
				person: [         //热门用户
					"uid": "",    //用户id
					"head": "",   //头像
					"gender": "",  // 1 男	2 女	
					"signature": "" //个性签名(约会宣言)
				],
				activity: [       //热门活动
					"title": "",  //标题
					"signature": "前十名免费玩耍，不收钱"  //优惠信息   
				]
			],
			status: 200,
			info: "成功"
		}


##消息
`消息部分是实时的, 采用轮询的方式`

### 1. 接收到的消息
  - url /message/receive
  - post: 


		{
			"uid": "",
			"token": ""
		}

  - res: 

		{
			data: {
				"notice": [             //通知部分 活动审核通知， 活动时间通知等
					{
						"head":    "sg",             //来源用户头像
						"content":  "拒绝了你的请求", //内容
						"nickname": "shsh",  //来源用户昵称
						"mid": ""            //来源约会的 date_id/ 活动的 activity_id
						"type": 1,           //通知内容的类型， 1.约会相关; 2. 活动相关
					}
				],
				"news": [                            //别人发来的消息
					{
						"head": "sg",  				//来源用户头像
						"content": "你好", 			//内容
						"nickname": "shsh",  		//来源用户昵称
						"uid": ""              		//来源用户uid
					}
				]
			},
			status： 200，
			info: "成功"
		}

### 2. 向某人发送消息
`此部分调用第三方及时通讯工具`


## 获取学校信息

  - url: /school
  - post: null
  - res: 
  
  
        {
                status:0,
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
        }