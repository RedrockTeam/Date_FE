//个人登录
define(['avalon', 'vms/main', 'vms/login','mmState'], function(avalon, vmMain, vmLogin){
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');
            vmMain['state'] = '';
            avalon.scan();
        }
    });
});

