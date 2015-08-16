define(
    'vms/filter',
    [
        'avalon','request',
        'userCenter'
    ],
    function(avalon,request, userCenter){
        var vm = avalon.define({
            $id: 'filter',
            opened: false,   //初始状态
            showDate: true,
            options: {       //键值为所对应的类型
                date: {
                    type: {
                        title: "请选择约会类型",
                        val: ['不限', '运动', '聚会', '娱乐', '拼车', '交流', '学习', '棋牌', '旅游', '活动', '其他'],
                        expand: false
                    },
                    order: {
                        title: '排序方式',
                        val: ['随意', '人气最热', '发布最新'],
                        expand: false
                    },
                    gender: {
                        title: '性别',
                        val: ['不限', '男', '女'],
                        expand: false
                    },
                    mode: {
                        title: "消费方式",
                        val: ['不限', 'AA制', '我请客', '求包养', '无消费'],
                        expand: false
                    },
                    time: {
                        title: "时间",
                        val:['不限', '今天', '两天内', '一周内', '只看周末'],
                        expand: false
                    }
                },
                activity: {
                    type: {
                        title: "请选择活动类型",
                        val: ['不限', '娱乐', '运动', '旅游', '聚会', '交流', '学习', '其他'],
                        expand: false
                    },
                    order: {
                        title: '排序方式',
                        val: ['随意','离我最近', '发布最新'],
                        expand: false
                    },
                    mode:{
                        title: "消费方式",
                        val: ['不限', '<30', '30-50', '50-100', '100-200', '200-300', '300-500', '>500'],
                        expand: false
                    },
                    time: {
                        title: "时间",
                        val: ['不限', '今天', '三天内', '一周内', '只看周末'],
                        expand: false
                    }

                }
            },    //数据
            ct: 'date',    //当前筛选状态
            dateS: {
                    type: 0,
                    order: 1,
                    gender: 0,
                    mode: 0,
                    time: 0
            },
            activityS: {
                type: 0,
                order: 1,
                mode: 0,
                time: 0
            },
            toggleExpand: function(ct, tt){
                vm['options'][ct][tt]['expand'] = !vm['options'][ct][tt]['expand'];
            },
            toggleSelect: function(filed, index){   //选择
                 if(vm['ct'] == 'date') {
                     vm['dateS'][filed] = index
                 } else {
                     vm['activityS'][filed] = index
                 }
                vm.toggleExpand(vm['ct'], filed);
            },
            getParams: function(ct){
                var ret;
                if(ct == 'date'){
                    ret = {
                        date_type: vm['dateS']['type'],
                        order: vm['dateS']['order'],
                        date_gender: vm['dateS']['gender'],
                        cost_mode: vm['dateS']['mode'],
                        date_time: vm['dateS']['time']
                    }
                }else{
                    ret = {
                        date_type: vm['activityS']['type'],
                        order: vm['activityS']['order'],
                        cost_mode: vm['activityS']['mode'],
                        date_time: vm['activityS']['time']
                    }
                }

                return ret;
            },
            finishFilter: function(){    //筛选确定
                var info = userCenter.info();
                var data = {
                    uid: info.uid,
                    token: info.token,
                    page: 0,
                    size: 10
                    };
                var tmp;
                if(vm['ct'] == 'date'){
                    tmp  = vm['getParams']('date');
                    vm.$fire('all!dateRuleChanged', tmp);
                    avalon.mix( data,  tmp);
                    request('dateList', data ).done(function(res){
                        vm.$fire('all!dateItemsChanged', res.data);

                    });
                }else{
                    tmp = vm['getParams']('activity');
                    vm.$fire('all!activityRuleChanged', tmp);
                    avalon.mix( data,  tmp);
                    log(data);
                    request('activityList', data ).done(function(res){
                        vm.$fire('all!activityItemsChanged', res.data);
                    });
                }

                vm['toggleOpen']();
            },
            toggleOpen: function(){
                vm['opened'] = !vm['opened'];
            }
        });

        vm.$watch('moduleState', function(s){
            if(s == 'dateList'){
                vm['showDate'] = true;
                vm['ct'] = 'date';
            }else if( s== 'activityList' ){
                vm['showDate'] = false;
                vm['ct'] = 'activity';
            }
        });

        vm.$watch('toggleOpenFilter', function(){
            vm['toggleOpen']();
        });

    return vm;
});