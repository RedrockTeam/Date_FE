//个人信息修改
define(['avalon', 'vms/tipBar','mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userAlter', {
        controller: "main",
        url: "/user/alter",
        templateUrl: "tpl/user/alter.html",
        onEnter: function(){
            log('/user/alter');
            vmTipBar['state'] = 'userAlter';
            avalon.scan();
        }
    });
});
