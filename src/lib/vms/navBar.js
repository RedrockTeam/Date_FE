define(['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'navBar',
        states: ['dateList', 'activityList', 'userMessage', 'userCheck'],
        'cState': 'dateList'
    });

    vm.$watch('cState', function(s){

    });

    return vm;
});
