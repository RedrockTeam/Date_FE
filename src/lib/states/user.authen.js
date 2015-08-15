//认证
define(['avalon', 'userCenter', 'mmState'], function(avalon, userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userAuthen', {
        controller: "main",
        url: "/user/authen",
        templateUrl: "tpl/user/authen.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }
            vmMain.$fire('all!tipBarStateChanged', 'userAuthen');
            avalon.scan();
        }
    });
});