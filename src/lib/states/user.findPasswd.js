
//找回密码
define(['avalon', 'mmState'], function(avalon){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userFindPasswd', {
        controller: "main",
        url: "/user/findPasswd",
        templateUrl: "tpl/user/findPasswd.html",
        onEnter: function(){
            log('/user/register');
            vmMain.$fire('all!tipBarStateChanged', 'userFindPasswd');
            avalon.scan();
        }
    });
});

