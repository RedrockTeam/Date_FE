//主页
define(['avalon', 'vms/main', 'vms/slider', 'userCenter', 'request','mmState'], function(avalon, vmMain, vmSlider, userCenter, request){
    avalon.state('home', {
        controller: "main",
        url: "/",
        templateUrl: "tpl/home/yield.html",
        onEnter: function(){
            vmMain['state'] = 'loading';
            var user = userCenter.info();
            if(!user.state){
                setTimeout(function(){avalon.router.navigate('/user/login')}, 0);
                return;
            }//认证处理


            //请求
            //$.when(
            //    request('slider'),
            //    request('category'),
            //    request('showBox', {uid: user.uid, token: user.token, date_type: 0, page: 0, size: 10, order: 1})
            //).done(function(slider, category, showBox){
            //        var sliderData = slider.data.map(function(val){
            //            return {href: val.url, img: val.src};
            //        });
            //        vmSlider['items'] = sliderData;
            //
            //        vmCategory['categories'] = category.data;
            //        if(!$$.typeHash) $$.typeHash = category.data;
            //
            //        vmShowBox.dateList = showBox.data;
            //
            //        avalon.scan();
            //        vmMain['state'] = 'ok';
            //    });
        }
    });
});