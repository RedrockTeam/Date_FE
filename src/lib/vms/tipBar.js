define(['jquery', 'noop', 'userCenter', 'tools/tipState','mmState'], function($, noop, userCenter, tipStates){
    var vm = avalon.define({
        $id: "tipBar",
        title: "",   //default
        rightSub: false,
        rightShare: false,
        subCb: function(){
            var s = vm['state'];
            var ev = 'all!'+ s +'Finish';
            vm.$fire(ev, {});
        },
        rightShareCb: "",
        state: ""
    });

    vm.$watch('state', function(state){
        log('现在的状态是:', state);
        var config = tipStates[state];
        for(var conf in config){
            vm[conf] = config[conf];
        }
    });

    vm.$watch('tipBarStateChanged', function(s){
        vm['state'] = s;
    });
});