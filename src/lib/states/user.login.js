//个人登录
define(['avalon', 'vms/main', 'vms/login', 'vms/tipBar', 'userCenter','mmState'], function(avalon, vmMain, vmLogin, vmTipBar, userCenter){
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');

            userCenter.logout();
            vmTipBar['state'] = 'login';
            avalon.scan();
            //todo
            vmMain['state'] == 'loading' ?vmMain['state'] = 'ok' : (void 0);
        }
    });
});

