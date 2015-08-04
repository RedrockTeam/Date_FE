
//约会详细页
define(['avalon', 'mmState', 'states/date','vms/main'], function(avalon){
    avalon.state('dateDetail', {
        controller: "main",
        url: "/date/detail/{id:[^.]*}",
        templateUrl: "tpl/date/detail.html",
        onEnter: function(){
            log('/date/detail');
            avalon.scan();
        }
    });
});