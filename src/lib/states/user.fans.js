
//个人粉丝查看
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userFans', {
        controller: "main",
        url: "/user/fans",
        templateUrl: "tpl/user/fans.html",
        onEnter: function(){
            log('/user/fans');
            avalon.scan();
        }
    });
});

