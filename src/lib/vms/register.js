define('vms/register', ['avalon', 'jquery', 'request','dialog'],function(avalon, $, request){
    var vmMain = avalon.vmodels['main'];
    var vm = avalon.define({
        $id: 'register',
        veri_code: '',
        tel: '',
        password: '',
        repassword: '',
        timer: 0,  //计时

        getAuth: function(){   //获取验证码
            if(vm['timer'])return 0;

            if(! checkTel(vm['tel']) )  {
                $.Dialog.fail('请输入正确的手机号码!!!');
                return 0;
            }

            request('getRegisterAuth', {tel: vm['tel']}).done(function(res){
                $.Dialog.success('发送成功!!!');
                vm['timer'] = 60;
                var timer = setInterval(function(){
                    vm['timer']--;
                    if(vm['timer'] == 0){
                        clearInterval(timer);
                    }
                }, 1000);
            });
        },

        finish: function(){
            if( !checkTel(vm['tel']) ){
                $.Dialog.fail('请输入正确的手机号码!!!');
                vm['veri_code'] = '';
                return 0;
            }

            if(!vm['veri_code']){
                $.Dialog.fail('请输入验证码!!!');
                return 0;
            }

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
            request('userRegister', {veri_code: vm['veri_code'], tel: vm['tel'], password: vm['password']}).done(function(res){
                $.Dialog.success('注册成功!!!');
                setTimeout(function(){
                    avalon.router.navigate('/user/login');
                    vmMain['state'] = 'ok';
                }, 2000);
            }).fail(function(){
                vmMain['state'] = 'ok';
            });
        }
    });


    function checkTel(tel){
        var regTel = /^\d{11}$/;
        return regTel.test(tel);
    }

    vm.$watch('tel', function(tel){
        vm['tel'] = tel.trim();
    });

    return vm;
});