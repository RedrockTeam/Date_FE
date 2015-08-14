define(['avalon', 'request', 'userCenter'], function(avalon, request,userCenter ){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userSelectTags', {
        controller: "main",
        url: "/user/selectTags",
        templateUrl: "tpl/user/selectTags.html",
        onEnter: function(){
            log('enter');
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理

            vmMain['state'] = 'loading';
            request('userTags', {uid: user.uid, token: user.token}).done(function(tags){
                vmMain.$fire('all!userSelectTagsChanged',tags.data);
                vmMain.$fire('all!tipBarStateChanged', 'userSelectTags');
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});