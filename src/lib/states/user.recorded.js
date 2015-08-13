
//个人参与的约会和活动记录查看
define(['avalon', 'userCenter', 'request', 'mmState'], function(avalon, userCenter, request){
    var vmMain = avalon.vmodels['main'];
    avalon.state('userRecored', {
        controller: "main",
        url: "/user/:id/recorded",
        templateUrl: "tpl/user/recorded.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理

            vmMain['state']=  'loading';
            vmMain.$fire('all!tipBarStateChanged', 'userRecoreded');
            request('userRecorded', {uid: user.uid, token: user.token, get_id: (this.params.id || user.uid )}).done(function(res){
                vmMain.$fire('all!userRecordedDataChanged', res.data);
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});

