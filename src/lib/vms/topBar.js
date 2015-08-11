define(['avalon', 'vms/filter', 'vms/navBar', 'vms/slider'], function(avalon){
    var vmodels = avalon.vmodels,
        vmNavBar = vmodels['navBar'],
        vmSlider = vmodels['slider'],
        vmFilter = vmodels['filter'];
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
            vm['filter'] = true;
            if(s == 'dateList'){
                vmFilter['showDate'] = true;
                vmFilter['ct'] = 'date';
            }else{
                vmFilter['showDate'] = false;
                vmFilter['ct'] = 'activity';
            }
        }else if(s == 'userCheck'){
            vm['userAlter'] = true;
            vm['fiter'] = false;
            vmSlider['show'] = false;
            vm['filter'] = false;
        }else{
            vm['userAlter'] = false;
            vm['fiter'] = false;
            vmSlider['show'] = false;
            vm['filter'] = false;
        }
    });

    return vm;
});