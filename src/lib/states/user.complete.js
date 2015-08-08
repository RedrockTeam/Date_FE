//完善个人信息
define(['avalon', 'vms/tipBar','mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userComplete', {
        controller: "main",
        url: "/user/complete",
        templateUrl: "tpl/user/complete.html",
        onEnter: function(){
            log('/user/complete');
            vmTipBar['state'] = 'userComplete';
            avalon.scan();
        }
    });
});
