/**
 * Created by Liuchenling on 5/30/15.
 */
define('urls', function(){
    var urls = {
        //"login": "../mock.php?type=login",
        "login": "http://127.0.0.1:8080/user/login",
        //"slider": "../mock.php?type=pics",
        "slider": "http://127.0.0.1:8080/banner",
        "dateList": "http://127.0.0.1:8080/date/list",
        "dateDetail": "http://127.0.0.1:8080/date/detail",
        "activityList": "http://127.0.0.1:8080/activity/list",
        "activityDetail": "http://127.0.0.1:8080/activity/detail",
        "userComplete": "http://127.0.0.1:8080/user/complete",
        "userCheck": "http://127.0.0.1:8080/user/check",
        "schoolHash": "http://127.0.0.1:8080/school",
        "getAuth": "http://127.0.0.1:8080/user/register/veri_code",
        "userRegister": "http://127.0.0.1:8080/user/register",
        "userTags": "http://127.0.0.1:8080/user/tags",
        "searchHot": "http://127.0.0.1:8080/search/hot",
        "searchDo": "http://127.0.0.1:8080/search/do",
        "userMessage": "http://127.0.0.1:8080/user/message/recieve",
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
})