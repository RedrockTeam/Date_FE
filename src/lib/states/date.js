//约会详细页
define(['avalon', 'mmState', 'vms/main'], function(avalon){
    avalon.state('date', {
        controller: "main",
        url: "/date",
        templateUrl: "tpl/date/yield.html",
        onEnter: function(){
            log('/date');
            avalon.scan();
        }
    });
});