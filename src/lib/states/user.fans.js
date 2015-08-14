//个人粉丝查看
define(['avalon', 'request', 'userCenter', 'mmState'], function(avalon, request, userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userFans', {
        controller: "main",
        url: "/user/:id/fans",
        templateUrl: "tpl/user/fans.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';
            var get_id = this.params.id;

            request("userFans", {"get_id": get_id || user.uid, "uid": user.uid, "token": ""}).done(function(res){
                vmMain.$fire('all!userFansDataChanged', res.data);
                vmMain.$fire('all!tipBarStateChanged', 'userFans');
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});

