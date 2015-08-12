//活动详情 vm
define('vms/activityDetail',['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'activityDetail',
        data: {}
    });

    vm.$watch('data', function(){
        log('change');
    });
    vm.$watch('activityDetailDataChanged', function(data){
        vm['data'] = data;
    });
});