define('vms/userAlter', ['avalon', 'userCenter', 'request','filter$'], function(avalon, userCenter, request, filter$){
    var vm = avalon.define({
        $id: 'userAlter',
        cantprev: false,
        data: {},
        lockTel: false,
        lockWeixin: false,
        lockWeibo: false,
        lockQQ: false,
        getMoreTags: function(){
            vm.$fire('all!userSelectTagsFromChanged','/user/alter');
            vm.$fire('all!userCallSelectedChanged',vm['data']['hobbies']);
            setTimeout(function(){
                avalon.router.navigate('/user/selectTags');
            }, 0);
        },

        selectGender: function(){

        },

        preview: function(){
            var fr = new FileReader();
            var imageType = /image.*/;
            if(!imageType.test(this.files[0].type)){
                $.Dialog.fail('请选择一个图片，谢谢!!!');
                return 0;
            }
            if(!fr){
                vm['data']['head'] = "";
                vm['cantprev'] = true;
                return 0;
            }
            fr.readAsDataURL(this.files[0]);
            fr.addEventListener('load', function(ev){
                vm['data']['head'] = ev.target.result;
            });
            fr.addEventListener('error', function(){
                $.Dialog.fail('图片加载失败，请重试!!!');
            });

            function preved(){

            }
        },
        finish: function(){
            var user = userCenter.info();
            var vd = vm['data'];
            if(!vd['head']){
                $.Dialog.fail("请上传你的自拍，好吗");
                return;
            }

            if(!vd['nickname']){
                $.Dialog.fail("请填上昵称");
                return;
            }

            if(!vd['realname']){
                $.Dialog.fail("请填上真实姓名");
                return;
            }

            if(!vd['school']){
                $.Dialog.fail("没有填学校噢!!!");
                return;
            }

            if(!vd['academy']){
                $.Dialog.fail("没有填学院噢!!!");
                return;
            }
            var temp = {};
            filter$(temp, vm['data']);
            var data = avalon.mix({
                uid: user.uid,
                token: user.token
            }, temp);


            request('userComplete', data).done(function(res){
                $.Dialog.success("信息修改成功!!, 开始约炮吧!!!!");
                setTimeout(function(){avalon.router.navigate('')}, 2000);
            });
        }
    });
    vm.$watch('alterBackTagsChanged', function(selected){
        vm['data']['hobbies'] = selected;
    });

    //window.arr = vm['selected'];

    vm.$watch('userAlterDataChanged', function(data){
        vm['data'] = data;

        //禁止输入项
        if(data.contact.tel)  vm['lockTel'] = true;
        if(data.contact.weixin)  vm['lockWelxin'] = true;
        if(data.contact.weibo)  vm['lockWeibo'] = true;
        if(data.contact.qq)  vm['lockQQ'] = true;
    });
});