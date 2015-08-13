define('vms/userResetPasswd', ['avalon', 'jquery', 'request','dialog'],function(avalon, $, request){
    var vmMain = avalon.vmodels['main'];
    var vm = avalon.define({
        $id: 'userResetPasswd',
        tel: '',
        token: "",
        password: '',
        repassword: '',
        timer: 0,  //计时

        finish: function(){
            if(!vm['password']){
                $.Dialog.fail('请输入密码!!!');
                return 0;
            }

            if(!vm['repassword']){
                $.Dialog.fail('请再次输入密码!!!');
                return 0;
            }

            if(vm['repassword'] != vm['password']){
                $.Dialog.fail('两次密码不一致!!!');
                return 0;
            }

            vmMain['state'] = 'loading';
            request('userResetPasswd', {tel: vm['tel'], token: vm['token'] , password: vm['password']}).done(function(res){
                $.Dialog.success('修改密码成功!!!');
                setTimeout(function(){
                    avalon.router.navigate('/user/login');
                    vmMain['state'] = 'ok';
                }, 2000);
            }).fail(function(){
                vmMain['state'] = 'ok';
            });
        }
    });

    vm.$watch('userResetPasswdTokenChanged', function(token){
        console.log(token);
        vm['token'] = token;
    });
    vm.$watch('userResetPasswdTelChanged', function(tel){
        vm['tel'] = tel;
        console.log(tel);
    });

    return vm;
});