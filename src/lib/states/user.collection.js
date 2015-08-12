//个人收藏查看
define(['avalon','mmState'], function(avalon){
    var vmTipBar = avalon.vmodels['tipBar'];
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

