
//消息和通知查看
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('message', {
        controller: "main",
        url: "/message",
        templateUrl: "tpl/message/yield.html",
        onEnter: function(){
            log('/message');
            avalon.scan();
        }
    });
});

