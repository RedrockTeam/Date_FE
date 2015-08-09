define(
    [
        'avalon', 'vms/navBar', 'request',
        'userCenter',
        'vms/dateList',
        'vms/activityList'
    ],
    function(avalon, vmNavBar, request, userCenter, vmDL, vmAL ){
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
            },
            selected: {    //最初加载数据
                ct: 'date',
                type: 0,
                order: 1,
                gender: 0,
                mode: 0,
                time: 0
            },
            toggleExpand: function(ct, tt){
                vm['options'][ct][tt]['expand'] = !vm['options'][ct][tt]['expand'];
            },
            toggleSelect: function(ct, index){   //选择
                vm['selected'][ct] = index;
            },
            finishFilter: function(){    //筛选确定
                var ops = getParams();
                var info = userCenter.info();
                var data = avalon.mix(
                    {
                        uid: info.uid,
                        token: info.token,
                        page: 0,
                        size: 10
                    }, ops);
                if('date_type' in ops){
                    request('dateList', data ).done(function(res){
                        vmDL['items'] = res.data;
                    });
                }else{
                    request('activityList', data ).done(function(res){
                        vmAL['items'] = res.data;
                    });
                }

                vm['toggleOpen']();
            },
            toggleOpen: function(){
                vm['opened'] = !vm['opened'];
            }
        });

        //获取参数
        function getParams(){
            var ret = null, selData = vm['selected'];
            if(selData['ct'] == 'date'){
                ret = {
                    date_type: selData['type'],
                    order: selData['order'],
                    date_gender: selData['gender'],
                    cost_mode: selData['mode'],
                    date_time: selData['time']
                }
            }else{
                ret = {
                    activity_type: selData['type'],
                    order: selData['order'],
                    activity_time: selData['time'],
                    cost_mode: selData['mode']
                }
            }

            return ret;
        }

    return vm;
});