
//个人粉丝查看
define('states/user.fans',['request','avalon', 'vms/tipBar', 'vms/userFans', 'vms/main', 'mmState'], function(request,avalon, vmTipBar,vmFans,vmsMain){
    avalon.state('userFans', {
        controller: "main",
        url: "/user/fans",
        templateUrl: "tpl/user/fans.html",
        onEnter: function(){
            log('/user/fans');
            vmTipBar['state'] = 'userFans';
            vmsMain.state = 'loading';

            request('fans',{
                uid:'',
                token:''
            }).done(function(res){
                vmFans.lists = res.data;
                log(vmFans.lists);
                avalon.scan();
                vmsMain.state = 'ok';
            })
        }
    });
});

