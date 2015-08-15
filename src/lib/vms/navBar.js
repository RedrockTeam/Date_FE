define('vms/navBar', ['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'navBar',
        ct: "dateList",
        attention: false,    //提示用户注意
        states: ['dateList', 'activityList', 'userMessage', 'userCheck'],

        switchTab: function(n){
            vm['ct'] = vm['states'][n];
            vm.$fire('all!moduleState', vm['states'][n]);    //广播
            vm['attention'] = vm['ct'] === 'userMessage';   //离开后重置为false
        }
    });

    vm.$watch('newMessageComing', function(){
        vm['attention'] = true;
    });
});
