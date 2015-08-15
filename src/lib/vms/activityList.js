
define('vms/activityList', ['avalon', 'request', 'userCenter', 'filter$'], function(avalon, request, userCenter, filter$){
    var vm = avalon.define({
        $id: 'activityList',
        items: [],
        page: 0,
        filterRule: {
            activity_type: 0,
            order: 1,
            cost_mode: 0,
            time: 0
        },
        loadingFlag: false,
        loadMore: function(){     //加载更多
            if(vm['loadingFlag']) return;
            vm['loadingFlag'] = true;
            var info = userCenter.info();
            var data = {
                uid: info.uid,
                token: info.token,
                page: vm['page'],
                size: 10
            };
            var temp = {};
            filter$(temp, vm['filterRule']);
            avalon.mix(data,temp);
            request('activityList', data).done(function(res){
                if(!res.data.length){
                    $.Dialog.success("木有更多啦");
                    $('.activity-list .load-more').text('木有更多了');
                    return setTimeout(function(){vm['loadingFlag'] = false}, 2500);
                }else{
                    $('.date-list .load-more').text('加载更多');
                }
                vm['items'].pushArray(res.data);
                vm['page'] = vm['page'] + 1;
                setTimeout(function(){
                    vm['loadingFlag'] = false;
                }, 2500);//反正延迟到nextLoop
            });
        },
        getActivityDetail: function(id){   //加载约会详情
            avalon.router.navigate('/activity/detail/' + id);
        },
        getUserDetail: function(id){   //加载组织详情
            //todo    加载组织详情
            //avalon.router.navigate('/user/check/' + id);
        }
    });

    vm.$watch('activityItemsChanged', function(data){
        vm['items'] = data;
    });

    vm.$watch('activityRuleChanged', function(rule){
        console.log('activityRuleChanged', data);
        vm['filterRule'] = rule;
    });
});