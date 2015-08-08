//个人登录
define(['avalon', 'vms/main', 'vms/login', 'vms/tipBar','mmState'], function(avalon, vmMain, vmLogin, vmTipBar){
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');
            vmTipBar['state'] = 'login';
            avalon.scan();
        }
    });
});

