//搜索
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('search', {
        controller: "main",
        url: "/search",
        templateUrl: "tpl/search/yield.html",
        onEnter: function(){
            log('/search');
            avalon.scan();
        }
    });
});

