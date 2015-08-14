define('vms/navBar', ['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'navBar',
        ct: "",
        attention: false,    //提示用户注意
        states: ['dateList', 'activityList', 'userMessage', 'userCheck']
    });

    vm.$watch('newMessageComing', function(){
        log('coming');
        vm['attention'] = true;
    });

    vm.$watch('moduleState', function(s){
        vm['ct'] = s;
    });
});
