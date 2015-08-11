//个人登录
define(['avalon', 'userCenter' ,'vms/main', 'vms/login', 'vms/tipBar', 'mmState'], function(avalon, userCenter,vmMain){
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');

            userCenter.logout();
            //vmTipBar['state'] = 'login';
            vmMain.$fire('all!tipBarStateChanged', 'login');
            avalon.scan();
            //todo
        }
    });
});

