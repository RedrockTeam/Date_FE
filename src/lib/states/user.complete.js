//完善个人信息
define(['avalon', 'userCenter', 'request','mmState'], function(avalon, userCenter, request){
    var vmodels = avalon.vmodels,
        vmMain = vmodels['main'];
    avalon.state('userComplete', {
        controller: "main",
        url: "/user/complete",
        templateUrl: "tpl/user/complete.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';
            $.when(
                request('userCheck', { uid: user.uid, token: user.token, get_uid: user.uid }),
                request('userTags', {uid: user.uid, token: user.token})
            ).done(function(info, tags){
                    vmMain.$fire('all!tipBarStateChanged', 'userComplete');
                    vmMain.$fire('all!userComleteDataChanged', info.data);
                    vmMain.$fire('all!userComleteTagsChanged', tags.data);
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });
        }
    });
});
