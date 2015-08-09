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
        navState: "tools/tipState",
        request: "tools/request"
    }
});

//Logger
var log = window.console ? console.log.bind(console, "%c DEBUG! Ling: ", "background:#404040;color:#fff;border-radius:5px") : function(){};
var $$ = {}; //share vars obj

require([
    'require',
    'avalon',
    'mmState'
], function(require,avalon) {
    require([               //加载状态     //避免有时候  avalon.history 为 undefined
        'states/home',       //主页
        'states/date',       //约会列表
        'states/date.detail', //约会详细页
        'states/activity',    //活动列表
        'states/activity.detail', //活动详细页
        'states/user.check',          //个人信息
        'states/user.collection',     //个人收藏
        'states/user.fans',           //个人粉丝
        'states/user.launched',      //个人发起约会查看
        'states/user.recorded',      //个人约会记录查看
        'states/user.login',        //个人登录
        'states/user.register',     //个人注册
        'states/user.complete',      //完善个人信息
        'states/user.alter',        //修改个人信息
        'states/date.create',        //发布约会
        'states/search',            //搜索
        'states/message'            //消息页
    ], function(){
        avalon.history.start({
            basepath: "/"
        });
        avalon.router.navigate(avalon.history.fragment);
    });
});
