
//约会详细页
define(['avalon', 'vms/tipBar', 'userCenter', 'vms/main','states/date','mmState', 'dialog'], function(avalon, vmTipBar, userCenter, vmMain){
    avalon.state('dateDetail', {
        controller: "main",
        url: "/date/detail/:id",
        templateUrl: "tpl/date/detail.html",
        onEnter: function(){
            log('/date/detail');
            vmTipBar['state'] = 'dateDetail';
            vmMain['state'] = 'loading';
            //avalon.scan();
            //验证用户登录
            var user = userCenter.info();
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }

            var date_id = this.params.id;
            //todo 没有date_id

            //获取detail的数据
            request('dateDetail', {date_id: date_id, uid: user.uid, token: user.token})
                .done(function(res){
                    vmDetail.data = res.data;
                    vmDetail['isCollected'] = res.data.collection_status;
                    vmDetail['isSignedUp'] = res.data.apply_status;
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });

        }
    });
});