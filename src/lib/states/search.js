//搜索
define('states/search', ['avalon', 'vms/tipBar', 'request', 'vms/search','vms/main','mmState'], function(avalon, vmTipBar,request,vmSearch,vmsMain){
    avalon.state('search', {
        controller: "main",
        url: "/search",
        templateUrl: "tpl/search/yield.html",
        onEnter: function(){
            //log('/search');
            //vmTipBar['state'] = 'search';
            vmsMain.state = 'loading';

            request('searchHot',{
                'uid': '',
                'token': ''
            }).done(function(res){
                vmSearch.list_activity = res.data.activity;
                vmSearch.list_people = res.data.people;
                avalon.scan();
                //log(vmSearch.list.activity);
                vmsMain.state = 'ok';
            })
        }
    });
});

