
define(
    [
        'avalon', 'jquery', 'vms/slider',
        'vms/topBar', 'vms/navBar',
        'vms/filter', 'vms/cache',
        'dialog', 'avaFilters',
        'mmState'
    ],
    function (avalon, $) {
        var vmodels = avalon.vmodels,
            vmSlider = vmodels['slider'],
            vmTopBar = vmodels['topBar'],
            vmNavBar = vmodels['navBar'],
            vmFilter = vmodels['filter'],
            vmCache = vmodels['cache'];
        var vm = avalon.define({
            $id: "main",
            state: "",
            getParams: function(ct){

            }
        });

        //滑动依赖
        vmNavBar.$watch('cState', function (s) {
            window.scrollTo(0,0);
            if (s == 'dateList' || s == 'activityList') {
                vmTopBar['userAlter'] = false;
                vmTopBar['fiter'] = true;
                vmSlider['show'] = true;
                vmTopBar['filter'] = true;
                if (s == 'dateList') {
                    vmFilter['showDate'] = true;
                    vmFilter['ct'] = 'date';
                    vmSlider['hst'] = 'dateList';
                } else {
                    vmFilter['showDate'] = false;
                    vmFilter['ct'] = 'activity';
                    vmSlider['hst'] = 'activityList';
                }
            } else if (s == 'userCheck') {
                vmTopBar['userAlter'] = true;
                vmTopBar['fiter'] = false;
                vmSlider['show'] = false;
                vmTopBar['filter'] = false;
                vmSlider['hst'] = 'userCheck';
                //vmSlider['ch'] = $('.user-check').height();
            } else {
                vmTopBar['userAlter'] = false;
                vmTopBar['fiter'] = false;
                vmSlider['show'] = false;
                vmTopBar['filter'] = false;
                vmSlider['hst'] = 'userMessage';
                //vmSlider['ch'] = $('.user-message').height();
            }
        });

        //初始化cache filter
        vmCache['dateS'] = vmFilter['getParams']('date');
        vmCache['activityS'] = vmFilter['getParams']('activity');

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