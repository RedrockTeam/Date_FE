//约会列表
define('vms/dateList', ['avalon', 'userCenter', 'request', 'filter$'], function(avalon, userCenter, request, filter$){
    var vm = avalon.define({
        $id: 'dateList',
        items: [],
        page: 0,    //当前页
        loadingFlag: false,
        filterRule: {
            date_type: 0,
            order: 1,
            date_gender: 0,
            cost_mode: 0,
            time: 0
        },
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
            avalon.mix(data, temp);
            request('dateList', data).done(function(res){
                if(!res.data.length){
                    $.Dialog.success("木有更多啦");
                    $('.date-list .load-more').text('木有更多了');
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
        getDateDetail: function(id){   //加载约会详情
            avalon.router.navigate('/date/detail/' + id);
        },
        getUserDetail: function(id){   //加载用户详情
            avalon.router.navigate('/user/check/' + id);
        }
    });

    vm.$watch('dateItemsChanged', function(data){
        vm['items'] = data;
        //log(data);
    });

    vm.$watch('dateRuleChanged', function(rule){
        vm['filterRule'] = rule;
    });
    return vm;
});
