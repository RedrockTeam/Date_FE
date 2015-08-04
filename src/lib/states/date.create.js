//发布约会
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('dateCreate', {
        controller: "main",
        url: "/date/create",
        templateUrl: "tpl/date/create.html",
        onEnter: function(){
            log('/date/create');
            avalon.scan();
        }
    });
});