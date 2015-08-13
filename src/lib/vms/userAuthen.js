define('vms/userAuthen',['avalon', 'jquery', 'dialog'], function(avalon, $){
    var vm = avalon.define({
        $id: 'userAuthen',
        show_frurlont: 'imgs/auth_frurlont.jpg',
        show_end: 'imgs/auth_end.jpg',
        cantUpload: false,
        up_front: '',
        up_end: '',

        upload: function(side){    //上传
            createDataUrl(this.files[0], 'up_'+side);
        },
        finish: function(){
            log('finish');
        }
    });


    function createDataUrl(fileObj, side){
        var frurl = new FileReader();

        if(!frurl){
            vm['cantUpload'] = true;
        }else{
            vm['cantUpload'] = false;
        }
        frurl.readAsDataURL(fileObj);
        //load
        frurl.addEventListener('load', function(ev){
           vm[side] = ev.target.result;
        });

        //error
        frurl.addEventListener('error', function(){
            $.Dialog.fail('预览失败!!!!');
        });
    }
});