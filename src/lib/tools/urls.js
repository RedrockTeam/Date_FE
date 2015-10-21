/**
 * Created by Liuchenling on 5/30/15.
 */
define('urls', function(){
    var urls = {
        //"login": "../mock.php?type=login",
        //"login": "http://127.0.0.1:8080/user/login",
        "login": "http://123.56.225.103/api/index.php?s=/api/public/login/", /*登陆*/
        //"slider": "../mock.php?type=pics",
        //"slider": "http://127.0.0.1:8080/banner",
        "slider": "http://123.56.225.103/api/index.php?s=/api/public/banner",  /*banner*/
        //"dateList": "http://127.0.0.1:8080/date/list",
        "dateList": "http://123.56.225.103/api/index.php?s=/api/date/datelist",  /*约会列表*/
        "dateType": "http://123.56.225.103/api/index.php?s=/api/public/datetype",   /*约会类型*/
        //"dateDetail": "http://127.0.0.1:8080/date/detail",          //约会详情
        "dateDetail": "http://123.56.225.103/api/index.php?s=/api/date/detaildate", //约会详情
        "dateCreate": "http://123.56.225.103/api/index.php?s=/api/date/createdate",    //发布约会
        //"activityList": "http://127.0.0.1:8080/activity/list",
        "activityList": "http://123.56.225.103/api/index.php?s=/api/discover/discoverlist",
        "activityDetail": "http://127.0.0.1:8080/activity/detail",
        "userComplete": "http://127.0.0.1:8080/user/complete",
        //"userCheck": "http://127.0.0.1:8080/user/check",
        "userCheck": "http://123.56.225.103/api/index.php?s=/api/user/info",
        "schoolHash": "http://127.0.0.1:8080/school",
        "getRegisterAuth": "http://127.0.0.1:8080/user/register/veri_code",      //注册短信验证码获取
        "userRegister": "http://127.0.0.1:8080/user/register",
        "userTags": "http://127.0.0.1:8080/user/tags",
        "searchHot": "http://127.0.0.1:8080/search/hot",
        "searchDo": "http://127.0.0.1:8080/search/do",
        "fans": "http://127.0.0.1:8080/user/fans",
        "userMessage": "http://127.0.0.1:8080/user/message/recieve",
        "dateComment": "http://127.0.0.1:8080/date/comment",
        "dateCollect": "http://127.0.0.1:8080/date/collect",
        "dateDelCollect": "http://127.0.0.1:8080/date/delCollect",
        "activityCollect": "http://127.0.0.1:8080/activity/collect",
        "activityDelCollect": "http://127.0.0.1:8080/activity/delCollect",
        "activityComment": "http://127.0.0.1:8080/activity/comment",
        "getFindPasswdAuth": "http://127.0.0.1:8080/user/findPasswd/veri_code",     //找回密码验证码获取
        "findPasswdVerify": "http://127.0.0.1:8080/user/findPasswd/verify",     //找回密码验证码获取
        "userResetPasswd": "http://127.0.0.1:8080/user/findPasswd/reset",     //重置密码
        "userCollection": "http://127.0.0.1:8080/user/collection",          //收藏
        "userRecorded": "http://127.0.0.1:8080/user/recorded",              //收藏
        "userFans": "http://127.0.0.1:8080/user/fans",                      //粉丝
        "userFollows": "http://127.0.0.1:8080/user/follows",              //关注量
        







        "publish": "http://lich2013.com/date/index.php/api/date/createdate",
        "showBox": "http://lich2013.com/date/index.php/api/date/datelist",
        //"showBox": "../mock.php?type=list",
        "category": "http://lich2013.com/date/index.php/api/date/datetype",
        "detail": "http://lich2013.com/date/index.php/api/date/detaildate",
        "userInfo": "http://lich2013.com/date/index.php/api/person/userinfo",
        "historyCreate": "http://lich2013.com/date/index.php/api/person/create",
        "historyJoin": "http://lich2013.com/date/index.php/api/person/join",
        //"dateList": "../mock.php?type=list",


        "detaildate": "http://lich2013.com/date/index.php/api/date/detaildate",
        "collect": "http://lich2013.com/date/index.php/api/person/collect",
        "report": "http://lich2013.com/date/index.php/api/date/report",
        "academy": "http://lich2013.com/date/index.php/api/public/academy",
        "collection": "http://lich2013.com/date/index.php/api/person/collection",
        "gradeHash": "http://lich2013.com/date/index.php/api/public/grade",
        "getletter": "http://lich2013.com/date/index.php/api/letter/getletter",
        "letters": "http://lich2013.com/date/index.php/api/letter/detailletter", //单条私信
        "dateaction": "http://lich2013.com/date/index.php/api/letter/dateaction",

        "editdata": "http://lich2013.com/date/index.php/api/person/editdata"
    };

    return urls;
});