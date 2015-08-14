//活动
define(['avalon', 'mmState'], function(avalon){
    avalon.state('activity', {
        controller: "main",
        url: "/activity",
        onEnter: function(){
            log('/activity');
            avalon.scan();
        }
    });
});