//个人信息查看
define(['avalon', 'userCenter', 'request','mmState'], function(avalon, userCenter, request){
    var vmMain = avalon.vmodels['main'];
    avalon.state('user', {
        controller: "main",
        url: "/user/check/:id",
        templateUrl: "tpl/user/check.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';
            var get_uid = this.params.id;
            request('userCheck', {'check_uid': get_uid || user.uid, 'uid': user.uid, 'token': user.token}).done(function(res){
                vmMain.$fire('all!userCheckDataChanged', res.data);
                if(get_uid || get_uid != user.uid) {
                    vmMain.$fire('all!userCheckIsRootChanged', false);
                    vmMain.$fire('all!tipBarStateChanged', 'userCheck');
                }
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});
