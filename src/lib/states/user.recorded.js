
//个人参与的约会和活动记录查看
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userRecored', {
        controller: "main",
        url: "/user/recorded",
        templateUrl: "tpl/user/recorded.html",
        onEnter: function(){
            log('/user/recoded');
            avalon.scan();
        }
    });
});

