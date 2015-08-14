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
        request: "tools/request",
        filter$: "tools/filter$"

        //vms
    }
});

//Logger
var log = window.console ? console.log.bind(console, "%c DEBUG! Ling: ", "background:#404040;color:#fff;border-radius:5px") : function(){};
var $$ = {}; //share vars obj

require([
    'require',
    'avalon',
    'mmState',
    'vms/main'   //作为其他所有 vm 事件代理
], function(require,avalon) {
    require([
        //注册状态
        'states/home',       //主页
        'states/date.detail', //约会详细页
        'states/activity.detail', //活动详细页
        'states/user.check',          //个人信息
        'states/user.collection',     //个人收藏
        'states/user.fans',           //个人粉丝
        'states/user.follows',        //个人关注的用户
        'states/user.launched',      //个人发起约会查看
        'states/user.recorded',      //个人约会记录查看
        'states/user.login',        //个人登录
        'states/user.register',     //个人注册
        'states/user.complete',      //完善个人信息
        'states/user.alter',        //修改个人信息
        'states/date.create',        //发布约会
        'states/search',            //搜索
        'states/user.findPasswd',   //找回密码 验证码
        'states/user.resetPasswd',   //重置密码
        'states/user.authen',         //实名认证


        //注册 vm 一次加载进内存  全部只依赖于 vm`main`, 相互间的操作通过vm`main`监听代理
        'vms/register',
        'vms/login',
        'vms/dateList',
        'vms/dateDetail',
        'vms/activityList',
        'vms/activityDetail',
        'vms/navBar',
        'vms/topBar',
        'vms/tipBar',
        'vms/filter',
        'vms/dateCreate',
        'vms/search',
        'vms/slider',
        'vms/userCheck',
        'vms/userMessage',
        'vms/userComplete',
        'vms/userFindPasswd',
        'vms/userResetPasswd',
        'vms/userCollection',
        'vms/userRecorded',
        'vms/userAuthen',
        'vms/userFans',
        'vms/userFollows'

    ], function(){
        avalon.history.start({
            basepath: "/"
        });
        avalon.router.navigate(avalon.history.fragment);
    });
});
