define('vms/userRecorded', ['avalon' ,'jquery'], function(avalon, $){
    var vm = avalon.define({
        $id: 'userRecorded',
        data: {},
        states: ["date", "activity"],   //状态
        ct: "activity",    //   当前状态

        switchSt: function(ct){
            vm['ct'] = ct;
        },


    });

    vm.$watch('userRecordedDataChanged', function(data){
        vm['data'] = data;
        vm.$fire('all!dateItemsChanged', data.date);    //通知到 date list
        vm.$fire('all!activityItemsChanged', data.activity);    //通知到 activity list
    });
});