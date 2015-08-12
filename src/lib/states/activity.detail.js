//活动详情页
define(['avalon', 'request', 'userCenter', 'mmState'], function(avalon, request,userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('activityDetail', {
        controller: "main",
        url: "/activity/detail/:id",
        templateUrl: "tpl/activity/detail.html",
        onEnter: function(){
            vmMain.$fire('all!tipBarStateChanged', 'activityDetail');
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
                    vmMain.$fire('all!activityDetailDataChanged', res.data);
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });
        }
    });
});
