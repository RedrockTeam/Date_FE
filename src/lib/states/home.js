//主页
define(
    [
        'avalon', 'vms/main',
        'vms/slider', 'userCenter',
        'request', 'vms/dateList',
        'vms/activityList', 'vms/userMessage',
        'vms/userCheck',
        'mmState'
    ],

    function(avalon, vmMain, vmSlider, userCenter, request, vmDL, vmAL, vmUS, vmUC){

        avalon.state('home', {
            controller: "main",
            url: "/",
            templateUrl: "tpl/home/yield.html",
            onEnter: function(){
                vmMain['state'] = 'loading';
                vmMain['loadCout'] = 0;
                var user = userCenter.info();
                if(!user.state){
                    setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                    return;
                }//认证处理

                $.when(     //首屏一次性加载完 所需要的数据
                    request('slider'),
                    request(
                        'dateList',
                        {uid: user.uid, token: user.token, date_type: 0, page: 0, size: 10, order: 1, date_gender: 0,cost_mode: 0, date_time: 0}
                    ),
                    request(
                        'activityList',
                        {uid: user.uid, token: user.token, activity_type: 0, page: 0, size: 10, order: 1, cost_mode: 0, activity_time: 0 }
                    ),
                    request(
                        'userMessage',
                        {'uid': user.uid, 'token': user.token}
                    ),
                    request(
                        'userCheck',
                        {'uid': user.uid, 'token': user.token}
                    )
                ).done(function(slider, dl, al, um, uc){
                        vmSlider['items'] = slider.data;
                        vmDL['items'] = dl.data;
                        vmAL['items'] = al.data;
                        vmUS['items'] = um.data;
                        vmUC['data'] = uc.data;
                        avalon.scan();
                        vmMain['state'] = 'ok';
                    }
                );
            }
        });
   });