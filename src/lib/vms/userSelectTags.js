define('vms/userSelectTags', ['avalon','jquery' ,'dialog'], function(avalon, $){
    log('sdf');
    var vm = avalon.define({
        $id: 'userSelectTags',
        tags: {
            hot: [],
            custom: []
        },
        from: "",      //保存来源, 默认回到主页
        selected: [],
        tmpTag: '',   //暂存

        toggleTagsCb: function(hobby){
            var index = vm['selected'].indexOf(hobby);
            if(index == -1){
                vm['selected'].push(hobby);
            }else{
                vm['selected'].splice(index, 1);
            }
        },
        cleanInput: function(){
            vm['tmpTag'] = '';
        },
        addTag: function(){
            if(vm['tmpTag'].length > 4) {
                $.Dialog.fail('长度大于4了');
                return 0;
            }
            if( vm['tags']['custom'].indexOf(vm['tmpTag']) != -1 || vm['tags']['hot'].indexOf(vm['tmpTag']) != -1 ){
                $.Dialog.fail('重复了');
                return 0;
            }
            vm['tags']['custom'].push(vm['tmpTag']);
            vm['selected'].push(vm['tmpTag']);
        },

        finish: function(){
            setTimeout(function(){avalon.router.navigate(vm['from']);}, 0);   //从哪里来回哪里去
            if(vm['from'] == '/user/alter') $$.updateAlterSelectedTags = vm['selected'];    //共享$$.updateSelectedTags
            else vm.$fire('all!completeBackTagsChanged', vm['selected']);      //数据整体不会刷新， 消息通知
        }
    });

    vm.$watch('userSelectTagsChanged', function(tags){
        vm['tags']['hot'] = tags;
    });

    vm.$watch('userSelectTagsFromChanged', function(s){
        vm['from'] = s;
    });

    vm.$watch('userSelectTagsFinish', function(){
        vm['finish']();
    });

    vm.$watch('userCallSelectedChanged', function(selected){
        vm['selected'] = selected;
    });
});