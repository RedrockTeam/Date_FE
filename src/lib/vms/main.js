define([ 'avalon', 'vms/slider','mmState'], function($, vmSlider){
    var av = avalon.vmodels;
    var vm = avalon.define({
        $id: "main",
        state: "",
        sliderCb: function(){
            //测试
            vmSlider['slider']();
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