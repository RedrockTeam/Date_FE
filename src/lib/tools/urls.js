/**
 * Created by Liuchenling on 5/30/15.
 */
define('urls', function(){
    var urls = {
        //"login": "../mock.php?type=login",
        "login": "http://lich2013.com/date/index.php/api/public/login",
        //"slider": "../mock.php?type=pics",
        "slider": "http://lich2013.com/date/index.php/api/public/banner",
        "publish": "http://lich2013.com/date/index.php/api/date/createdate",
        "showBox": "http://lich2013.com/date/index.php/api/date/datelist",
        //"showBox": "../mock.php?type=list",
        "category": "http://lich2013.com/date/index.php/api/date/datetype",
        "detail": "http://lich2013.com/date/index.php/api/date/detaildate",
        "userInfo": "http://lich2013.com/date/index.php/api/person/userinfo",
        "historyCreate": "http://lich2013.com/date/index.php/api/person/create",
        "historyJoin": "http://lich2013.com/date/index.php/api/person/join",
        "dateList": "http://lich2013.com/date/index.php/api/date/datelist",
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