/**
 * Created at 6/9/15.
 * @Author Ling.
 * @Email i@zeroling.com
 */
define('request', ['jquery', 'urls', 'avalon', 'dialog'], function ($, urls, avalon) {
    var request = function(apiName, paramsObj, successFn, failFn){
        var url = urls[apiName];
        var _dtd = $.Deferred();
        var errMap = {    //根据接口文档列出
            "1": "请求参数错误",
            "-105": "没有该账号",
            "1001": "服务器繁忙",
            "1002": "请登陆后使用",
            "1003": "账户被冻结",
            "-1": "参数无效",
            "-3": "无访问权限"
        };
        $.post(url, paramsObj)
            .success(function(res){
                if(res && res.status == 200){
                    _dtd.resolve(res);
                }else{
                    _dtd.reject(res);
                }
            })
            .fail(function(res){
                _dtd.reject(res);
            });

        _dtd.fail(function(res){
            log('err', res);
            var status = parseInt(res.status);
            $.Dialog.fail(errMap[status] || "服务器出问题了");
            //switch(status){
            //    case 409:
            //        return $.Dialog.fail(res.info);
            //    case 401:
            //        $.Dialog.fail('登录异常', 2000);
            //        return setTimeout(avalon.router.navigate.bind(avalon.router, 'login'), 2000);
            //    case 500:default:
            //    $.Dialog.fail("服务器出了问题");
            //}

        });

        if(avalon.isFunction(successFn))_dtd.done(successFn);
        if(avalon.isFunction(failFn))_dtd.fail(failFn);
        return _dtd;
    }

    $.request = request;
    return request;
});