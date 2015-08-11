
define(['avalon', 'request', 'userCenter', 'vms/cache'], function(avalon, request, userCenter, vmCache){
    var vm = avalon.define({
        $id: 'activityList',
        items: [],
        page: 0,
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
            avalon.mix(data, vmCache['activityS']);
            request('activityList', data).done(function(res){
                if(!res.data.length){
                    $.Dialog.success("木有更多啦");
                    $('.activity-list .load-more').text('木有更多了');
                    return setTimeout(function(){vm['loadingFlag'] = false}, 2500);
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
    return vm;
});