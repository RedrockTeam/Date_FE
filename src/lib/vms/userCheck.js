define(['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'userCheck',
        data: {}
    });

    vm.$watch('userCheckDataChanged', function(data){
        vm['data'] = data;
    });
});