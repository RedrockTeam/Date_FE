//主页
define(['avalon', 'vms/main', 'vms/slider','mmState'], function(avalon, vmMain, vmSlider){
    avalon.state('home', {
        controller: "main",
        url: "/",
        templateUrl: "tpl/home/yield.html",
        onEnter: function(){
            log('/');
            avalon.scan();
        }
    });
});