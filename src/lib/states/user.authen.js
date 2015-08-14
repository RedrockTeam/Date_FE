//认证
define(['avalon', 'mmState'], function(avalon){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userAuthen', {
        controller: "main",
        url: "/user/authen",
        templateUrl: "tpl/user/authen.html",
        onEnter: function(){
            vmMain.$fire('all!tipBarStateChanged', 'userAuthen');
            avalon.scan();
        }
    });
});