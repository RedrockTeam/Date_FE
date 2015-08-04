/**
 * Created at 6/4/15.
 * @Author Ling.
 * @Email i@zeroling.com
 */
define('vms/category', ['jquery', 'userCenter', 'request', 'avalon', 'dialog'], function ($, userCenter, request) {
    var orderList = [{
        id: 1,
        type: "时间排序"
    }];

    $('.wrapper').on('touchstart', '.btn-overlay.show', function(e){
        e.preventDefault();
    });

    return avalon.define({
        $id: "category",
        orderList: orderList, //排序方式
        categories: [], //分类列表
        active: {
            order: '',
            category: ''
        },

        order: function(id){
            id = parseInt(id);
            var type = orderList.filter(function(o){return o.id == id ? o : false})[0];
            avalon.vmodels.category.active.order = type ? type.type : ""; //对默认的处理
            switch(id){
                case 0:
                    //todo 排序
                    break;
            }
        },

        hide: function(id){
            $(this).addClass("active");
            $('#' + id).removeClass('show');
            setTimeout(function () {$('#' + id).hide()}, 400);
        },

        show: function (id) {
            $('#' + id).show();
            setTimeout(function () {
                $('#' + id).addClass('show');
            }, 0);
        },

        stopBubble: function (e) {
            e.stopPropagation();
        },

        //选择类型
        selectType: function(typeId){
            typeId = parseInt(typeId);
            avalon.vmodels['main']['state'] = 'loading';
            var type = $$.typeHash.filter(function(o){return o.id == typeId ? o : false})[0];
            avalon.vmodels['category']['active']['category'] = type ? type.type : ""; //对所有分类的处理
            var user = userCenter.info();
            request('dateList', {date_type: typeId, uid: user.uid, token: user.token})
                .done(function(res){
                    avalon.vmodels['showBox']['dateList'] = res.data;
                    avalon.vmodels['main']['state'] = 'ok';
                });
        }
    });
});