//个人收藏查看
define(['avalon', 'vms/tipBar','mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userCollection', {
        controller: "main",
        url: "/user/collection",
        templateUrl: "tpl/user/collection.html",
        onEnter: function(){
            log('/user/collection');
            vmTipBar['state'] = 'userCollection';
            avalon.scan();
        }
    });
});

