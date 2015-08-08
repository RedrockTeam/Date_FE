
//个人参与的约会和活动记录查看
define(['avalon', 'vms/tipBar','mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userRecored', {
        controller: "main",
        url: "/user/recorded",
        templateUrl: "tpl/user/recorded.html",
        onEnter: function(){
            log('/user/recoded');
            vmTipBar['state'] = 'userRecorded';
            avalon.scan();
        }
    });
});

