//个人登录
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');
            avalon.scan();
        }
    });
});

