//个人信息修改
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userAlter', {
        controller: "main",
        url: "/user/alter",
        templateUrl: "tpl/user/alter.html",
        onEnter: function(){
            log('/user/alter');
            avalon.scan();
        }
    });
});
