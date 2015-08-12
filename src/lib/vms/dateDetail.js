
//约会详情 vm
define(['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'dateDetail',
        state: {},
        data: {}
    });

    vm.$watch('data', function(){
        log('change');
    });
    vm.$watch('dateDetailDataChanged', function(data){
        vm['data'] = data;
    });

});