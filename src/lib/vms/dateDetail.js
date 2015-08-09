define(['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'dateDetail',
        state: {},
        data: {}
    });

    vm.$watch('data', function(){
        log('change');
    });
    return vm;
});