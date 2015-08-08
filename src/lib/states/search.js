//搜索
define(['avalon', 'vms/tipBar','mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('search', {
        controller: "main",
        url: "/search",
        templateUrl: "tpl/search/yield.html",
        onEnter: function(){
            log('/search');
            vmTipBar['state'] = 'search';
            avalon.scan();
        }
    });
});

