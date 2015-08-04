//个人注册
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('userRegister', {
        controller: "main",
        url: "/user/register",
        templateUrl: "tpl/user/register.html",
        onEnter: function(){
            log('/user/register');
            avalon.scan();
        }
    });
});

