//完善个人信息
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userComplete', {
        controller: "main",
        url: "/user/complete",
        templateUrl: "tpl/user/complete.html",
        onEnter: function(){
            log('/user/complete');
            avalon.scan();
        }
    });
});
