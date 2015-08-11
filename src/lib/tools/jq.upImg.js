// 上传图片 filereader
define(['jquery'], function($){
    $.fn.upImg = function(context){
        var $self= $(this),
            fr = new FileReader();
        context = $.extend({
            upBtn: $self.find('.upBtn'),
            preview: $self.find('.preview'),
            abort: $self.find('.abort'),
            complete: $self.find('.complete')
        }, context);

        if(!fr){
            context.preview.text("您的浏览器不支持预览功能");
            return 0;
        }
        console.log(context.upBtn);

        context.upBtn.on('change', function(){
            console.log('change');
            fr.readAsDataURL(context.upBtn[0].files[0]);
        });

        context.abort.on('touchend', function(){
            fr.abort();
        });
        fr.onload = function(ev){
            context.preview.css('background-image', 'url(+'+ev.target+')');
        }
    };


});


