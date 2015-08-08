//个人注册
define(['avalon', 'vms/tipBar', 'mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('userRegister', {
        controller: "main",
        url: "/user/register",
        templateUrl: "tpl/user/register.html",
        onEnter: function(){
            log('/user/register');
            vmTipBar['state'] = 'register';
            avalon.scan();
        }
    });
});

