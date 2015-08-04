//约会详细页
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('user', {
        controller: "main",
        url: "/user/{id:[^.]*}",
        templateUrl: "tpl/user/yield.html",
        onEnter: function(){
            log('/user');
            avalon.scan();
        }
    });
});
