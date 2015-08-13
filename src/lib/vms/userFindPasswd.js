define('vms/userFindPasswd', ['avalon', 'jquery', 'request', 'dialog'], function(avalon, $, request){
    var vm = avalon.define({
        $id: 'userFindPasswd',
        veri_code: '',
        token: "",
        tel: '',
        timer: 0,  //计时

        getAuth: function(){   //获取验证码
            if(vm['timer'])return 0;
            if(! checkTel(vm['tel']) )  {
                $.Dialog.fail('请输入正确的手机号码!!!');
                return 0;
            }

            request('getFindPasswdAuth', {tel: vm['tel']}).done(function(res){
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

        send: function(){
            if( !checkTel(vm['tel']) ){
                $.Dialog.fail('请输入正确的手机号码!!!');
                vm['veri_code'] = '';
                return 0;
            }

            if(!vm['veri_code']){
                $.Dialog.fail('请输入验证码!!!');
                return 0;
            }

            $.Dialog.loading();

            request('findPasswdVerify', {'veri_code': vm['veri_code'], 'tel': vm['tel']}, function(res){
                $.Dialog.close();
                vm.$fire('all!userResetPasswdTokenChanged', res.data.token);
                vm.$fire('all!userResetPasswdTelChanged', vm['tel']);
                setTimeout(function(){avalon.router.navigate('/user/resetPasswd')}, 0);
            }).fail(function(){
                $.Dialog.fail("验证失败噢");
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