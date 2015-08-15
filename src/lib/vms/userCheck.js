define(['avalon', 'userCenter'], function(avalon, userCenter){
    var user = userCenter.info();
    var data_cpy = null;
    var vm = avalon.define({
        $id: 'userCheck',
        isHome: true,
        isOwn: true,   //是否是本人
        data: {},
        go: function(type){
            var url = '/user/'+ vm['data'].uid + '/'+ type;
            setTimeout(function(){avalon.router.navigate(url)}, 0);
        }
    });

    vm.$watch('userCheckDataChanged', function(data){
        vm['data'] = data;
    });

    vm.$watch('moduleState', function(s){    //检测是否查看到自己的信息
        vm['isHome'] = vm['isOwn'] = s == 'userCheck';
        vm['isHome'] && (vm['data'] = data_cpy);
    });

    vm.$watch('userCheckPageToSingle', function(){
        vm['isHome'] = false;
    });

    vm.$watch('userCheckIdentifyChanged', function(isOwn){
        log(isOwn);
        vm['isOwn'] = isOwn;
    });

    //复制 自己的data
    vm.$watch('userCheckDataCpy', function(data){
        data_cpy = data;
    });
});