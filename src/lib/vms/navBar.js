define('vms/navBar', ['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'navBar',
        states: ['dateList', 'activityList', 'userMessage', 'userCheck']
    });
    return vm;
});
