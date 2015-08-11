define(['jquery', 'tools/tipState', 'noop', 'userCenter', 'mmState'], function($, tipState, noop, userCenter){
    /**
     * 顶部tipBar的VM
     */
    var vmodels = avalon.vmodels;
    var vm = avalon.define({
        $id: "tipBar",
        title: "",   //default
        rightSub: false,
        rightShare: false,
        subCb: function(){
            var s = vm['state'];
            vmodels[s].finish();
        },
        rightShareCb: "",
        state: ""
    });

    vm.$watch('state', function(state){
        log('现在的状态是:', state);
        var config = tipState[state];
        //for(var conf in config){
        //    vm[conf] = config[conf];
        //}
    });

    vm.$watch('tipBarStateChanged', function(s){

    });

    return vm;
});