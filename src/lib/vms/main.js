define(['avalon', 'jquery','vms/slider', 'dialog', 'mmState'], function(avalon,$, vmSlider){
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
            }
        }
    });
    /**
     * 页面全局菊花 + overlay控制
     */
    vm.$watch('state', function(s){
        s == 'loading' && !$('.dialog-content').find('p').length
            ? $.Dialog.loading()
            : $.Dialog.close();
    });
    return vm;
});