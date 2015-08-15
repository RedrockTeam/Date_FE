
define([
        'avalon', 'jquery', 'dialog', 'avaFilters', 'mmState'],
    function (avalon, $) {
        var vm = avalon.define({
            $id: "main",
            state: "",
            ct: "user"     //保存当前页 state
        });

        /**
         * 页面全局菊花 + overlay控制
         */
        vm.$watch('state', function (s) {
            s == 'loading' && !$('.dialog-content').find('p').length
                ? $.Dialog.loading()
                : $.Dialog.close();
        });
        return vm;
    });