//活动详情页
define(['avalon', 'vms/tipBar', 'mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('activityDetail', {
        controller: "main",
        url: "/activity/detail/{id:[^.]*}",
        templateUrl: "tpl/activity/detail.html",
        onEnter: function(){
            log('/activity/detail');
            vmTipBar['state'] = 'activityDetail';
            avalon.scan();
        }
    });
});
