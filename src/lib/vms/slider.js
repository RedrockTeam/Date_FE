define('vms/slider', ['avalon', 'jquery','swiper'], function(avalon, $){
    return avalon.define({
        $id: "slider",
        //测试
        items: [{'href': 'http://www.baidu.com', 'img': 'imgs/slider_1.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_2.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_3.jpg'}],
        slider: function(){
            new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop: true,
                grabCursor: true,
                paginationClickable: true,
                autoplay: 4000
            });
        },
        moduleSlider: function(){     //测试
            var tabsSwiper = new Swiper('#tab-container',{
                speed: 500,
                height: 'auto',
                onTouchEnd: function(){
                    $(".tab .z-active").removeClass('z-active');
                    $(".tab li").eq(tabsSwiper.activeIndex).addClass('z-active');
                }
            });
            $(".tab li").on('touchstart mousedown',function(e){
                e.preventDefault();
                $(".tab .z-active").removeClass('z-active');
                $(this).addClass('z-active');
                tabsSwiper.swipeTo( $(this).index() );
            }).click(function(e){
                e.preventDefault();
            });
        }
    });
});