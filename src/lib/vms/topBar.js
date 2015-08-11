define('vms/topBar', ['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'topBar',
        userAlter: false,
        filter: true,
        moduleState: 'dateList',
        toggleOpenFilter: function(){
            vm.$fire('all!toggleOpenFilter','');
        }
    });

    vm.$watch('moduleState', function(s){
        if(s == 'dateList' || s == 'activityList'){
            vm['userAlter'] = false;
            vm['fiter'] = true;
            vm['filter'] = true;
        }else if(s == 'userCheck'){
            vm['userAlter'] = true;
            vm['fiter'] = false;
            vm['filter'] = false;
        }else{
            vm['userAlter'] = false;
            vm['fiter'] = false;
            vm['filter'] = false;
        }
    });

    return vm;
});