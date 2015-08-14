
//个人关注查看
define(['avalon', 'request', 'userCenter', 'mmState'], function(avalon, request, userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userFollows', {
        controller: "main",
        url: "/user/:id/follows",
        templateUrl: "tpl/user/follows.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';
            var get_id = this.params.id;

            request("userFollows", {"get_id": get_id || user.uid, "uid": user.uid, "token": ""}).done(function(res){
                vmMain.$fire('all!userFollowsDataChanged', res.data);
                vmMain.$fire('all!tipBarStateChanged', 'userFollows');
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});

