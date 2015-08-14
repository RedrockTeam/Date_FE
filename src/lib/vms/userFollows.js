define('vms/userFollows', ['avalon', 'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'userFollows',
        data: {},
        getUserDetail: function(uid){
            var url = '/user/check/' + uid;
            setTimeout(function(){
                avalon.router.navigate(url)
            }, 0);
        }
    });
    vm.$watch('userFollowsDataChanged', function(data){
        vm['data'] = data;
        log(data);
    });
});