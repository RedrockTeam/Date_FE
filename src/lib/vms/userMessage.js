
define( ['avalon'], function(avalon){
    var vm =  avalon.define({
        $id: 'userMessage',
        items: []
    });


    vm.$watch('userMessageItemsChanged', function(data){
        vm['items'] = data;
    });
});