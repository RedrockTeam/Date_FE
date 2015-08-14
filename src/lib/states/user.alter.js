//个人信息修改
define(['avalon', 'userCenter', 'request','mmState'], function(avalon, userCenter, request){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userAlter', {
        controller: "main",
        url: "/user/alter",
        templateUrl: "tpl/user/alter.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';
            request('userCheck', { 'get_id': user.uid, 'uid': user.uid, 'token': user.token}).done(function(res){
                vmMain.$fire('all!userAlterDataChanged', res.data);
                vmMain.$fire('all!tipBarStateChanged', 'userCheck');
                avalon.scan();
                vmMain['state'] = 'ok';
            });

            avalon.scan();
        }
    });
});
