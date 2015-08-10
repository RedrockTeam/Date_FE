<<<<<<< HEAD
define(['avalon', 'jquery','vms/slider', 'vms/topBar','dialog', 'avaFilters','mmState'], function(avalon,$, vmSlider, vmTopBar){
    var vm = avalon.define({
        $id: "main",
        state: "",
        loadCout: 0,
        sliderCb: function(){
            //测试
            vmSlider['slider']();
        },
        moduleLoadCb: function(){    //测试
            vm.loadCout++;
            if( vm.loadCout == 4 ){   //
                log('modlues 加载完毕!!!');
                console.log( vm.loadCout );
                vmSlider['moduleSlider']();
                vm['state'] = '';
=======
define(
    [
        'avalon', 'jquery', 'vms/slider',
        'vms/topBar', 'vms/navBar',
        'vms/filter', 'dialog',
        'avaFilters', 'mmState'
    ],
    function (avalon, $, vmSlider, vmTopBar, vmNavBar, vmFilter) {
        var vm = avalon.define({
            $id: "main",
            state: "",
            loadCout: 0,
            sliderCb: function () {
                //测试
                vmSlider['slider']();
            },
            moduleLoadCb: function () {    //测试
                if (vm.loadCout > 4) vm.loadCout = 0;
                vm.loadCout++;
                if (vm.loadCout == 4) {   //
                    log('modlues 加载完毕!!!');
                    vmSlider['moduleSlider']();
                }
>>>>>>> 815d3028af439d74ef6e60a30edfe60de2fb8454
            }
        });

        //滑动依赖
        vmNavBar.$watch('cState', function (s) {
            if (s == 'dateList' || s == 'activityList') {
                vmTopBar['userAlter'] = false;
                vmTopBar['fiter'] = true;
                vmSlider['show'] = true;
                vmTopBar['filter'] = true;
                if (s == 'dateList') {
                    vmFilter['showDate'] = true;
                    vmFilter['selected']['ct'] = 'date';
                } else {
                    vmFilter['showDate'] = false;
                    vmFilter['selected']['ct'] = 'activity';
                }
            } else if (s == 'userCheck') {
                vmTopBar['userAlter'] = true;
                vmTopBar['fiter'] = false;
                vmSlider['show'] = false;
                vmTopBar['filter'] = false;
            } else {
                vmTopBar['userAlter'] = false;
                vmTopBar['fiter'] = false;
                vmSlider['show'] = false;
                vmTopBar['filter'] = false;
            }
        });


        /**
         * 页面全局菊花 + overlay控制
         */
        vm.$watch('state', function (s) {
            s == 'loading' && !$('.dialog-content').find('p').length
                ? $.Dialog.loading()
                : $.Dialog.close();
        });
        return vm;
    });