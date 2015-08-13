//个人收藏查看
define(['avalon','userCenter', 'request','mmState'], function(avalon, userCenter, request){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userCollection', {
        controller: "main",
        url: "/user/:id/collection",
        templateUrl: "tpl/user/collection.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            log(this.params.id);

            vmMain['state']=  'loading';
            vmMain.$fire('all!tipBarStateChanged', 'userCollection');
            request('userCollection', {uid: user.uid, token: user.token, get_id: (this.params.id || user.uid )}).done(function(res){
                vmMain.$fire('all!userCollectionDataChanged', res.data);
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});

