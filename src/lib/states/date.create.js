//发布约会
define(['request', 'userCenter', 'vms/dateCreate', 'vms/main', 'eventproxy', 'mmState'], function(request, userCenter, vmdateCreate, vmMain, EP){
    var vmodels = avalon.vmodels,
        tipBar = vmodels['tipBar'];
    avalon.state('dateCreate', {
        controller: "main",
        url: "/date/create",
        templateUrl: "tpl/date/create.html",
        onEnter: function(){
            vmMain['state'] = 'loading';
            tipBar['state'] = 'dateCreate';

            //检测登陆
            var user = userCenter.info();
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

            var ep = EP.create('category', 'academy', 'grade', function(cRes, aRes, gRes){
                vmdateCreate.datetype = $$.typeHash = cRes.data;
                vmdateCreate.academy = $$.academyHash = aRes.data;
                vmdateCreate['gradeHash'] = $$.gradeHash = gRes.data;

                avalon.scan();
                vmMain['state'] = 'ok';
            });

            if(!$$.typeHash){
                request('category').done(function(res){
                    ep.emit('category', res);
                });
            }else{
                ep.emit('category', {status: 200, data: $$.typeHash});
            }

            if(!$$.academyHash){
                request('academy').done(function(res){
                    ep.emit('academy', res);
                });
            }else{
                ep.emit('academy', {status: 200, data: $$.academyHash});
            }

            if(!$$.gradeHash){
                request('gradeHash').done(function(res){
                    ep.emit('grade', res);
                });
            }else{
                ep.emit('grade', {status: 200, data: $$.gradeHash});
            }

        }
    });
});