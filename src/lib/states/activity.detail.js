//活动详情页
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('activityDetail', {
        controller: "main",
        url: "/activity/detail/{id:[^.]*}",
        templateUrl: "tpl/activity/detail.html",
        onEnter: function(){
            log('/activity/detail');
            avalon.scan();
        }
    });
});
