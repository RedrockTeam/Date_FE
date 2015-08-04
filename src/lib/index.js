/**
 * 红岩网校 约.
 * @Author Ling.
 * @Contact 363130901
 * @email i@zeroling.com
 */
require.config({
    baseUrl: "lib",
    paths: {
        avalon: "avalon.mobile.shim",
        jquery: "jquery-2.1.3",

        dialog: "tools/jq.dialog",
        avaFilters: "tools/avaFilters",
        userCenter: "tools/userCenter",
        urls: "tools/urls",
        swiper: "tools/swiper",
        eventproxy: "tools/eventproxy",
        noop: "tools/noop",
        DateTimePicker: "tools/DateTimePicker",
        moment: "tools/moment",
        score: "tools/jq.score",
        navState: "tools/navState",
        request: "tools/request"
    }
});


//Logger
var log = window.console ? console.log.bind(console, "%c DEBUG! Ling: ", "background:#404040;color:#fff;border-radius:5px") : function(){};
var $$ = {}; //share vars obj

require([
    'avalon',
    'mmState',

    //状态页面
    'states/home',       //主页
    'states/date',       //约会列表
    'states/date.detail', //约会详细页
    'states/activity',    //活动列表
    'states/activity.detail', //活动详细页
    'states/user',            //个人信息


], function(avalon) {
    avalon.history.start({
        basepath: "/"
    });
    avalon.router.navigate(avalon.history.fragment);
});
