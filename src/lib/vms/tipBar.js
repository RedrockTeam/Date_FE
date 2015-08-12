define(['jquery', 'noop', 'userCenter', 'mmState'], function($, noop, userCenter){

    var configTips =  (function () {
        var defaultState = {
            title: "",
            rightSub: false,
            rightShare: false,
            rightSubCb: '',
            rightShareCb: ''
        };
        var getState = function(config){
            return avalon.mix({}, defaultState, config);
        };

        return {
            login: getState({'title': '登录账号'}),

            register: getState({'title': '注册账号'}),

            userComplete: getState({'title': '完善信息', rightSub: true, rightSubCb: 'finish'}),

            userAlter: getState({'title': '修改资料', rightSub: true, rightSubCb: 'finish'}),

            dateCreate: getState({'title': '发起约会', rightSub: true, rightSubCb: 'finish'}),

            userCollection: getState({'title': '我的收藏', rightSub: true, rightSubCb: 'share'}),

            userRecoreded: getState({'title': '我参与的', rightSub: true, rightSubCb: 'share'}),

            userFans: getState({'title': '我的粉丝', rightSub: true, rightSubCb: 'share'}),

            activityDetail: getState({'title': '活动详情', rightShare: true, rightShareCb: 'share'}),

            dateDetail: getState({'title': '约会详情', rightShare: true, rightShareCb: 'share'}),

            search: getState({'title': '搜索', rightSub: true, rightSubCb: 'share'})

        };
    })();

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
        var config = configTips[state];
        for(var conf in config){
            vm[conf] = config[conf];
        }
    });

    vm.$watch('tipBarStateChanged', function(s){
        vm['state'] = s;
    });
});