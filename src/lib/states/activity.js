//活动
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('activity', {
        controller: "main",
        url: "/activity",
        onEnter: function(){
            log('/activity');
            avalon.scan();
        }
    });
});