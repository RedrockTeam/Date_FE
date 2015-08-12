//个人信息查看
define(['avalon', 'mmState'], function(avalon){
    avalon.state('user', {
        controller: "main",
        url: "/user/check/{id:[^.]*}",
        templateUrl: "tpl/user/check.html",
        onEnter: function(){
            log('/user');
            avalon.scan();
        }
    });
});
