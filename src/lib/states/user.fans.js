
//个人粉丝查看
define(['avalon', 'vms/tipBar', 'mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userFans', {
        controller: "main",
        url: "/user/fans",
        templateUrl: "tpl/user/fans.html",
        onEnter: function(){
            log('/user/fans');
            vmTipBar['state'] = 'userFans';
            avalon.scan();
        }
    });
});

