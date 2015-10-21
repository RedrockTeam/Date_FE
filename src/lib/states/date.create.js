//发布约会
define(['request', 'userCenter', 'vms/dateCreate', 'mmState'], function(request, userCenter){
    var vmMain = avalon.vmodels['main'];
    avalon.state('dateCreate', {
        controller: "main",
        url: "/date/create",
        templateUrl: "tpl/date/create.html",
        onEnter: function(){
            vmMain['state'] = 'loading';
            vmMain.$fire('all!tipBarStateChanged', 'dateCreate');

            //检测登陆
            var user = userCenter.info();
            log(user);
            if(!user.state){
                setTimeout(avalon.router.navigate.bind(avalon.router, "login"), 0);
                return;
            }

            //重置默认值
            var v = avalon.vmodels.dateCreate;
            v.yType = v.yCollege = v.yGrade = v.ySex = v.yContent =
                v.yLocation = v.yPeople = v.yTime = v.yTitle = '';

            //失败统一出口
            function _fail(res){
                log('Category Fetch Err', res);
                avalon.scan();
                if(res.status == 409){
                    return $.Dialog.fail(res.info);
                }
                $.Dialog.fail("服务器提了一个问题!");
            }

            request('schoolHash').done(function(res){
                vmMain.$fire('all!dateCreateTypeChanged', res.data);
                avalon.scan();
                vmMain['state'] = 'ok';
            });
        }
    });
});