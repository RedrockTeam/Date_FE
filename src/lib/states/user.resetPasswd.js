
//重置密码
define(['avalon', 'mmState'], function(avalon){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userResetPasswd', {
        controller: "main",
        url: "/user/resetPasswd",
        templateUrl: "tpl/user/resetPasswd.html",
        onEnter: function(){
            vmMain.$fire('all!tipBarStateChanged', 'userResetPasswd');
            avalon.scan();
        }
    });
});