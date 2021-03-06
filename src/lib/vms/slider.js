define('vms/slider', ['avalon', 'jquery' ,'swiper'], function(avalon, $){
    var vm = avalon.define({
        $id: "slider",
        show: true,
        states: ['dateList', 'activityList', 'userMessage', 'userCheck'],
        ct: 'dateList',
        //items: [{'href': 'http://www.baidu.com', 'img': 'imgs/slider_1.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_2.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_3.jpg'}],
        items: [],
        bannerLoadCb: function(){
            (function(){
                if(avalon.vmodels['slider'] && avalon.vmodels['slider']['items'].length > 0){
                    avalon.vmodels['main']['state'] = 'ok';
                    return new Swiper('.swiper-container',{
                        pagination: '.pagination',
                        loop: true,
                        grabCursor: true,
                        paginationClickable: true,
                        autoplay: 4000
                    });
                }
                setTimeout(arguments.callee, 50); //扫描 50ms
            })();
        }
    });

    vm.$watch('moduleState', function(s){
        vm['show'] = s == 'dateList' || s == 'activityList';
    });

    vm.$watch('sliderItemsChanged', function(data){
        vm['items'] = data;
    });
});