//个人发起的约会记录查看
define(['avalon', 'mmState'], function(avalon){
    avalon.state('userLaunched', {
        controller: "main",
        url: "/user/launched",
        templateUrl: "tpl/user/launched.html",
        onEnter: function(){
            log('/user/launched');
            avalon.scan();
        }
    });
});

