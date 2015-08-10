//活动详情页
define(
    [
        'avalon', 'vms/tipBar',
        'vms/main', 'request',
        'vms/activityDetail', 'userCenter',
        'mmState'
    ],
    function(avalon, vmTipBar, vmMain, request, vmADet, userCenter){
        avalon.state('activityDetail', {
        controller: "main",
        url: "/activity/detail/:id",
        templateUrl: "tpl/activity/detail.html",
        onEnter: function(){
            log('/activity/detail');
            vmTipBar['state'] = 'activityDetail';

            vmMain['state'] = 'loading';
            //验证用户登录
            var user = userCenter.info();
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }

            var activity_id = this.params.id;
            //todo 没有date_id

            //获取detail的数据
            request('activityDetail', {date_id: activity_id, uid: user.uid, token: user.token})
                .done(function(res){
                    vmADet.data = res.data;
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });
        }
    });
});
