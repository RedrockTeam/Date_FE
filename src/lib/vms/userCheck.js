define(['avalon', 'userCenter'], function(avalon, userCenter){
    var user = userCenter.info();
    var data_cpy = null;
    var vm = avalon.define({
        $id: 'userCheck',
        isRoot: true,
        data: {},
        go: function(type){
            var url = '/user/'+ vm['data'].uid + '/'+ type;
            setTimeout(function(){avalon.router.navigate(url)}, 0);
        }
    });

    vm.$watch('userCheckDataChanged', function(data){
        vm['data'] = data;
    });

    vm.$watch('userCheckIsRootChanged', function(is){
        vm['isRoot'] = is;
        if(is){   //恢复为自己原来的数据
            vm['data'] = data_cpy;
        }
    });

    //复制 自己的data
    vm.$watch('userCheckDataCpy', function(data){
        data_cpy = data;
    });
});