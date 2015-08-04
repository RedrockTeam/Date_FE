//活动
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('activity', {
        controller: "main",
        url: "/activity",
        templateUrl: "tpl/activity/yield.html",
        onEnter: function(){
            log('/activity');
            avalon.scan();
        }
    });
});