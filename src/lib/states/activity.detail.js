//活动详情页
define(['avalon', 'request', 'userCenter', 'mmState'], function(avalon, request,userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('activityDetail', {
        controller: "main",
        url: "/activity/detail/:id",
        templateUrl: "tpl/activity/detail.html",
        onEnter: function(){
            //验证用户登录
            var user = userCenter.info();
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }
            vmMain['state'] = 'loading';
            var activity_id = this.params.id;
            //todo 没有date_id

            //获取detail的数据
            request('activityDetail', {date_id: activity_id, uid: user.uid, token: user.token})
                .done(function(res){
                    vmMain.$fire('all!tipBarStateChanged', 'activityDetail');
                    vmMain.$fire('all!activityDetailDataChanged', res.data);
                    vmMain.$fire('all!activityDetailIdChanged', activity_id);
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });
        }
    });
});
