define('vms/slider', ['avalon', 'jquery' , 'vms/navBar', 'swiper'], function(avalon, $){
    var vmodels = avalon.vmodels,
        vmNav = vmodels['navBar'];
    var vm = avalon.define({
        $id: "slider",
        show: true,
        auto: 'auto',
        modCout: 0,   //计数
        ch: 0,        //动态调节高度, 避免插件自适应高度
        hst: '',   //当前改变高度的状态
        daLoad: false,    //数据是否加载完毕
        items: [{'href': 'http://www.baidu.com', 'img': 'imgs/slider_1.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_2.jpg'}, {'href': 'http://www.baidu.com', 'img': 'imgs/slider_3.jpg'}],
        bannerLoadCb: function(){
            log('banner load');
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
                initialSlide : 0,
                onSlideChangeEnd: function(){
                    $(".tab .z-active").removeClass('z-active');
                    vmNav['cState'] = vmNav['states'][tabsSwiper.activeIndex];
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
        },
        moduleLoadCb: function () {     //模块加载完后触发
            if (vm.modCout > 4) vm.modCout = 0;
            vm.modCout++;
            if (vm.modCout == 4) {
                log('modlues 加载完毕!!!');
                vm['moduleSlider']();
            }
        },
        lpRenderedCb: function(){     //各模块循环结束后冒泡到 slider controller 控制高度
            var $self = $(this);
            if( $self.hasClass('date-list') ){
                vm['hst'] = 'dateList';
            }else if($self.hasClass('activity-list')){
                vm['hst'] = 'activityList';
            }else{
                vm['hst'] = 'userMessage';
            }

            vm['ch'] = $self.height();
        },
    });

    vm.$watch('daLoad', function(){

    });

    vm.$watch('ch', function(){
        //if(vmNav['cState'] != vm['hst']) return ;
        //vm['ch'] = vm['ch'];
    });
    return vm;
});