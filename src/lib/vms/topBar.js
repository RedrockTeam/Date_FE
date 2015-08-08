define(['avalon', 'vms/filter', 'vms/navBar', 'vms/slider'], function(avalon, vmFilter, vmNavBar, vmSlider){
    var vm = avalon.define({
        $id: 'topBar',
        userAlter: false,
        filter: true,
        toggleOpenFilter: function(){
            vmFilter['toggleOpen']();
        }
    });

    vmNavBar.$watch('cState', function(s){
        if(s == 'dateList' || s == 'activityList'){
            vm['userAlter'] = false;
            vm['fiter'] = true;
            vmSlider['show'] = true;
        }else if(s == 'userCheck'){
            vm['userAlter'] = true;
            vm['fiter'] = false;
            vmSlider['show'] = false;
        }else{
            vm['userAlter'] = true;
            vm['fiter'] = false;
            vmSlider['show'] = false;
        }
    });

    return vm;
});