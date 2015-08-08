
//约会详细页
define(['avalon', 'vms/tipBar','mmState', 'states/date','vms/main'], function(avalon, vmTipBar){
    avalon.state('dateDetail', {
        controller: "main",
        url: "/date/detail/{id:[^.]*}",
        templateUrl: "tpl/date/detail.html",
        onEnter: function(){
            log('/date/detail');
            vmTipBar['state'] = 'dateDetail';
            avalon.scan();
        }
    });
});