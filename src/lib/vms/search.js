/*
* created by liuhzz
**/

define('vms/search', ['avalon', 'userCenter', 'request', 'jquery','dialog'], function (avalon, userCenter, request ,$) {
    var vm = avalon.define({
        $id: "search",
        states: ['all', 'person', 'activity'],
        ct: 'all',
        type: 0,      //搜索类型
        hot: {        //热门
            person: [],
            activity: []
        },
        search: {   //自己搜索
            person: [],
            activity:[]
        },

        doSearch: function(){
            var user = userCenter.info();
            $.Dialog.loading();
            request('searchDo', {'uid': user.uid, 'token': user.token, 'type': vm['type']}).done(function(res){
                if(vm['type'] == 0)  vm['search'] = res.data;
                else if(vm['type'] == 1)  vm['search']['person'] = res.data.person;
                else vm['search']['activity'] = res.data.activity;
                $.Dialog.close();
            });
        },

        getActivityDetail: function(activity_id){
            setTimeout(function(){
                avalon.router.navigate('/activity/detail/'+activity_id);
            }, 0);
        },
        getUserDetail: function(uid){
            setTimeout(function(){
                avalon.router.navigate('/user/check/'+uid);
            }, 0);
        },

        switchTab: function(n){
            vm['ct'] = vm['states'][n];
            vm['type'] = n;
        }
    });

    vm.$watch('SearchHotDataChanged', function(hot){
        vm['hot'] = hot;
    });

});