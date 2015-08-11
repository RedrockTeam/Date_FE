
//消息和通知查看
define('states/message', ['request', 'avalon', 'vms/userMessage', 'vms/main', 'dialog', 'mmState'], function(request,avalon,vmsMessage,vmsMain){
    avalon.state('message', {
        controller: "main",
        url: "/message",
        templateUrl: "tpl/message/list.html",
        onEnter: function(){
            log('/message');
            vmsMain.state = 'loading';
            //var user = user.info();
            //log(user);
            //if(!user.state){
            //  setTimeout(function(){avalon.router.navigate('login')},0);
            //    return;
            //}//认证处理


            request('userMessage',{
                uid: '',
                token: ''
            }).done(function(res){
                vmsMessage.items = res.data.notice;
                avalon.scan();
                vmsMain.state = 'ok';
            })
        }
    });
});

