//主页
define(
    [
        'avalon', 'userCenter',
        'request', 'vms/dateList',
        'vms/main', 'vms/slider',
        'vms/activityList', 'vms/userMessage',
        'vms/userCheck',
        'mmState'
    ],

    function(avalon, userCenter, request){
        var vmodels = avalon.vmodels;
        avalon.state('home', {
            controller: "main",
            url: "/",
            templateUrl: "tpl/home/yield.html",
            onEnter: function(){
                vmodels['main']['state'] = 'loading';
                vmodels['slider']['modCout'] = 0;
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
                        vmodels['slider']['items'] = slider.data;
                        vmodels['dateList']['items'] = dl.data;
                        vmodels['activityList']['items'] = al.data;
                        vmodels['userMessage']['items'] = um.data;
                        vmodels['userCheck']['data'] = uc.data;
                        vmodels['slider']['daLoad'] = true;
                        avalon.scan();
                        vmodels['main']['state'] = 'ok';
                    }
                );
            }
        });
   });