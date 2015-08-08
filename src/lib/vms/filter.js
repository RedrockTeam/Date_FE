define(['avalon', 'vms/navBar'], function(avalon, vmNavBar){
    var vm = avalon.define({
        $id: 'filter',
        opened: false,   //初始状态
        options: {       //键值为所对应的类型
            date: {
                type: ['不限', '运动', '聚会', '娱乐', '拼车', '交流', '学习', '棋牌', '旅游', '活动', '其他'],
                order: ['', '人气最热', '发布最新'],
                gender: ['不限', '男', '女'],
                cost_mode: ['不限', 'AA制', '我请客', '求包养', '无消费'],
                time: ['不限', '今天', '两天内', '一周内', '只看周末']
            },
            activity: {
                type: ['不限', '娱乐', '运动', '旅游', '聚会', '交流', '学习', '其他'],
                order: ['','离我最近', '发布最新'],
                cost_mode: ['不限', '<30', '30-50', '50-100', '100-200', '200-300', '300-500', '>500'],
                time: ['不限', '今天', '三天内', '一周内', '只看周末']
            }
        },
        selected: {    //最初加载数据
            type: 'date',
            order: 1,
            date_gender: 0,
            cost_mode: 0,
            date_time: 0
        },
        toggleOpen: function(){
            vm['opened'] = !vm['opened'];
        }
    });

    return vm;
});