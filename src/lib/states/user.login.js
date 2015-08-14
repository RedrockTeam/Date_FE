//个人登录
define(['avalon', 'userCenter', 'mmState'], function(avalon, userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userLogin', {
        controller: "main",
        url: "/user/login",
        templateUrl: "tpl/user/login.html",
        onEnter: function(){
            log('/user/login');

            userCenter.logout();
            vmMain.$fire('all!tipBarStateChanged', 'login');
            avalon.scan();
            //todo
        }
    });
});

