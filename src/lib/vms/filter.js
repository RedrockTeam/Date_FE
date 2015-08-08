define(['avalon', 'vms/navBar'], function(avalon, vmNavBar){
    var vm = avalon.define({
        $id: 'filter',
        opened: false,   //初始状态
        index: 0,
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
                cost_mode: {
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
                cost_mode:{
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

        getIndex: function(){
            return vm['index']++;
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
            console.log(ct);
            console.log(index);
            vm['selected'][ct] = index;
        },
        finishFilter: function(){
            console.log(vm['selected']);
        },
        toggleOpen: function(){
            vm['opened'] = !vm['opened'];
        }
    });

    return vm;
});