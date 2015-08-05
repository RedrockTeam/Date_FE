define([ 'avalon', 'vms/slider','mmState'], function($, vmSlider){
    var av = avalon.vmodels;
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
            }
        }
    });
});