define(['avalon', 'jquery', 'userCenter', 'request'], function(avalon, $, userCenter, request){
    var vm = avalon.define({
        $id: 'userComplete',
        cantprev: false,
        data: {
            nickname: "",
            realname: "",
            head: "",
            school: "",
            gender: "",
            academy: "",
            signature: "",
            weixin: "",
            qq: "",
            contact: {
                weixin: "",
                tel: "",
                qq: "",
                weibo: ""
            },
            hobbies: []
        },
        tags: ["ewg", "egf"],     //所有标签
        toggleHobbyCb: function(hobby){
            var data = vm['data'];
            var index = data['hobbies'].indexOf(hobby);
            if(index == -1){
                data['hobbies'].push(hobby);
            }else{
                data['hobbies'].splice(index, 1);
            }
            vm['data'] = data;
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
        selectGender: function(){

        },
        finishHeadCb: function(){

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
                $.Dialog.success("信息完善成功!!, 开始约炮吧!!!!");
                setTimeout(function(){avalon.router.navigate('')}, 2000);
            });
        }
    });

     //对象复制， 过滤 带$的属性
    function filter$(temp, data){
        for(var key in data){
            if(key[0] != '$'){
                if(typeof data[key] == 'string'){
                    temp[key] = data[key]
                } else{
                    temp[key] = {};
                    filter$(temp[key], data[key]);
                }
            }
        }
    }

    vm.$watch('data', function(){
        console.log('data cahnged');
    });
    //todo 图片上传 待定

    return vm;
});
