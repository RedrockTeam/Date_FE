//完善个人信息
define(['avalon', 'userCenter', 'request', 'vms/userComplete','vms/tipBar','mmState', 'vms/main'], function(avalon, userCenter, request){
    var vmodels = avalon.vmodels,
        vmMain = vmodels['main'];
    avalon.state('userComplete', {
        controller: "main",
        url: "/user/complete",
        templateUrl: "tpl/user/complete.html",
        onEnter: function(){
            vmMain['state'] = 'loading';
            vmMain.$fire('all!tipBarStateChanged', 'userComplete');
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理

            $.when(
                request('userCheck', { uid: user.uid, token: user.token }),
                request('userTags', {uid: user.uid, token: user.token})
            ).done(function(info, tags){
                    //vmUC.data = info.data;
                    vmMain.$fire('all!userComleteDataChanged', info.data);
                    vmMain.$fire('all!userComleteTagsChanged', tags.data);
                    //vmUC.tags = tags.data;
                    avalon.scan();
                    vmMain['state'] = 'ok';
                });
        }
    });
});
