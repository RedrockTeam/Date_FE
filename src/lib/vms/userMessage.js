
define('vms/userMessage',['avalon', 'request', 'userCenter', 'jquery', 'dialog'], function(avalon, request, userCenter, $){
    var vm =  avalon.define({
        $id: 'userMessage',
        ct: 'notice',
        news: [],
        notice: [],

        switchSt: function(ct){
            vm['ct'] = ct;
        }
    });

    vm.$watch('userMessageItemsChanged', function(data){
        vm['notice'] = vm['notice'].concat(data.notice);
        vm['news'] = vm['news'].concat(data.news);
    });

});