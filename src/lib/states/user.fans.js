
//个人粉丝查看
define(['avalon','mmState'], function(avalon){
    var vmTipBar = avalon.vmodels['tipBar'];
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

