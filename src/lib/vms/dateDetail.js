<<<<<<< HEAD
define(['avalon'], function(avalon){
    var vm = avalon.define({
        $id: 'dateDetail',
        state: {}
    });


=======
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
>>>>>>> 815d3028af439d74ef6e60a30edfe60de2fb8454
    return vm;
});