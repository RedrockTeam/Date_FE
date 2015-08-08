define(['jquery', 'tools/tipState', 'noop', 'userCenter', 'mmState'], function($, tipState, noop, userCenter){
    /**
     * 顶部tipBar的VM
     */
    var vm = avalon.define({
        $id: "tipBar",
        title: "",   //default
        rightSub: false,
        rightShare: false,
        rightSubCb: "",
        rightShareCb: "",
        state: "",
        shareState: false,//标识菜单的呼出状态

        toggleShareState: function(e){
            avalon.vmodels.nav.menuState = !avalon.vmodels.nav.menuState;
        }
    });

    vm.$watch('state', function(state){
        log('现在的状态是:', state);
        var config = tipState[state];
        for(var conf in config){
            if(conf !== 'rightMenuCallback')vm[conf] = config[conf];
        }
        var confRightMenuCallback = tipState[state]['rightMenuCallback'];
        if(avalon.isFunction(confRightMenuCallback)){
            vm.rightMenuCallback = confRightMenuCallback;
        }else if(typeof confRightMenuCallback === 'string'){
            vm.rightMenuCallback = avalon.vmodels[state][confRightMenuCallback];
        }
    });


    function _h(e){
        e.stopPropagation();
        vm.menuState = false;
        return false
    }

    var listenFlag = false;
    vm.$watch('menuState', function(newStr){
        if(newStr){//打开
            $('.menu-flow').show().on('touchmove', _h).on('touchstart', _h).on('touchend', _h);
            setTimeout(function(){$('.menu-overlay').addClass('active')}, 16);
            $('.menu').addClass('active');
            if(!listenFlag){
                $('.wrapper').on('touchstart', '.menu-overlay.active', function(e) {
                    e.preventDefault();
                });
                listenFlag = true;
            }
        }else{//关闭.`
            $('.menu-flow').off('touchmove', _h).off('touchstart', _h).off('touchend', _h);
            $('.menu-overlay').removeClass('active');
            $('.menu').removeClass('active');
            setTimeout(function(){$('.menu-flow').hide()}, 400);
        }
    });

    return vm;
});