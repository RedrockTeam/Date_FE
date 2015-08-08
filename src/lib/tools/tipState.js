define(['avalon'], function (avalon) {
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
});