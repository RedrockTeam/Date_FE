
//约会详细页

define(['avalon','userCenter','request','mmState', 'dialog'], function(avalon, userCenter, request){
   var vmMain = avalon.vmodels['main'];
    avalon.state('dateDetail', {
        controller: "main",
        url: "/date/detail/:id",
        templateUrl: "tpl/date/detail.html",
        onEnter: function(){
            vmMain.$fire('all!tipBarStateChanged', 'dateDetail');
            vmMain['state'] = 'loading';

            //验证用户登录
            var user = userCenter.info();
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }

            var date_id = this.params.id;
            //todo 没有date_id
            if(!date_id){
                $.Dialog.fail('你的操作不合法!!!');
                setTimeout(function(){avalon.router.navigate('')}, 1000);
            }else{
                //获取detail的数据
                request('dateDetail', {date_id: date_id, uid: user.uid, token: user.token})
                    .done(function(res){
                        vmMain.$fire('all!dateDetailDataChanged', res.data);
                        //vmDetail['isCollected'] = res.data.collection_status;
                        //vmDetail['isSignedUp'] = res.data.apply_status;
                        //
                        //vmDetail.data = res.data;
                        //vmDetail['isCollected'] = res.data.collection_status;
                        //vmDetail['isSignedUp'] = res.data.apply_status;
                        avalon.scan();
                        vmMain['state'] = 'ok';
                    });
            }

        }
    });
});