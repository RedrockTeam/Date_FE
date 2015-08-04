//个人收藏查看
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userCollection', {
        controller: "main",
        url: "/user/collection",
        templateUrl: "tpl/user/collection.html",
        onEnter: function(){
            log('/user/collection');
            avalon.scan();
        }
    });
});

