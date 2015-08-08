//发布约会
define(['avalon', 'vms/tipBar', 'mmState', 'vms/main'], function(avalon, vmTipBar){
    avalon.state('dateCreate', {
        controller: "main",
        url: "/date/create",
        templateUrl: "tpl/date/create.html",
        onEnter: function(){
            log('/date/create');
            vmTipBar['state'] = 'dateCreate';
            avalon.scan();
        }
    });
});