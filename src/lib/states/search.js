//搜索
define('states/search', ['avalon', 'userCenter','request','mmState'], function(avalon, userCenter,request){
    var vmMain = avalon.vmodels['main'];
    avalon.state('search', {
        controller: "main",
        url: "/search",
        templateUrl: "tpl/search/yield.html",
        onEnter: function(){
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理
            vmMain['state'] = 'loading';

            request("searchHot", {"uid": user.uid, "token": ""}).done(function(res){
                vmMain.$fire('all!SearchHotDataChanged', res.data);
                vmMain.$fire('all!tipBarStateChanged', 'search');
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});

