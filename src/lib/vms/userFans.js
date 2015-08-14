define('vms/userFans', ['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'userFans',
        data: {},
        getUserDetail: function(uid){
            var url = '/user/check/' + uid;
            setTimeout(function(){
                avalon.router.navigate(url)
            }, 0);
        }
    });
    vm.$watch('userFansDataChanged', function(data){
        vm['data'] = data;
        log(data);
    });
});