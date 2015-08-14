//主页
define(
    [
        'avalon', 'userCenter',
        'request',
        'mmState'
    ],

    function(avalon, userCenter, request){
        var vmMain = avalon.vmodels['main'];
        avalon.state('home', {
            controller: "main",
            url: "/",
            templateUrl: "tpl/home/yield.html",
            onEnter: function(){
                vmMain.$fire('all!sliderModCoutChanged', 0);
                var user = userCenter.info();
                if(!user.state){
                    setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                    return;
                }//认证处理

                vmMain['state'] = 'loading';

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
                        vmMain.$fire('all!sliderItemsChanged', slider.data);
                        vmMain.$fire('all!dateItemsChanged', dl.data);
                        vmMain.$fire('all!activityItemsChanged', al.data);
                        vmMain.$fire('all!userMessageItemsChanged', um.data);
                        vmMain.$fire('all!userCheckDataChanged', uc.data);
                        vmMain.$fire('all!userCheckDataCpy', uc.data);   //第一次通知复制自己的数据
                        vmMain.$fire('all!sliderDaLoaded', true);
                        vmMain['state'] = 'ok';
                        avalon.scan();
                    }
                );
            }
        });
   });