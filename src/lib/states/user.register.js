//个人注册
define(['avalon', 'mmState'], function(avalon){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userRegister', {
        controller: "main",
        url: "/user/register",
        templateUrl: "tpl/user/register.html",
        onEnter: function(){
            log('/user/register');
            vmMain.$fire('all!tipBarStateChanged', 'register');
            avalon.scan();
        }
    });
});

