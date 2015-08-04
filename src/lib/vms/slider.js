define('vms/slider', ['avalon', 'jquery','swiper'], function(avalon, $){
    return avalon.define({
        $id: "slider",
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
        userInfoSlider: function(){ //初始化userInfo模板里面的左右Slider
            var tabsSwiper = new Swiper('#tab-container',{
                speed: 500,
                onSlideChangeStart: function(){
                    $(".tab .selected").removeClass('selected');
                    $(".tab li").eq(tabsSwiper.activeIndex).addClass('selected');
                }
            });
            $(".tab li").on('touchstart mousedown',function(e){
                e.preventDefault()
                $(".tab .selected").removeClass('selected');
                $(this).addClass('selected');
                tabsSwiper.swipeTo( $(this).index() );
            }).click(function(e){
                e.preventDefault();
            });
        }
    });
});