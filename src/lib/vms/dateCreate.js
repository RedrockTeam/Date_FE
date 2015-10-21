/**
 * Created at 6/4/15.
 * @Author Ling.
 * @Email i@zeroling.com
 */
define(['avalon', 'jquery', 'moment', 'eventproxy', 'request', 'userCenter', 'dialog', 'DateTimePicker', 'avaFilters'], function (avalon, $, moment, EP, request, userCenter) {
    var vmMain = avalon.vmodels['main'];
    var lunar = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        weeks = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    var vm = avalon.define({
        $id: "dateCreate",
        /**
         * 发布约会
         */
        finish: function () {
            log('finish');
            vmMain['state'] = 'loading';
            var _vm = vm;

            function _getSchool(str) {
                for (var i = 0, len = vm['schoolHash'].length; i < len; i++) {
                    if (vm['schoolHash'][i].school_name == str) return vm['schoolHash'][i].school_id;
                }
                return 0;
            }
            var user = userCenter.info();
            var info = {
                date_type: _vm.selectedDateTypeId,
                title: _vm.yTitle.trim(),
                content: avalon.vmodels.dateCreate.yContent,
                date_time: +moment(_vm.yTime.toString()) / 1000,
                date_place: _vm.yLocation.trim(),
                date_people: _vm.yPeople,
                gender_limit: _vm.ySex == '不限' ? 0 : (_vm.ySex == '男' ? 1 : 2),  //0不限, 1男, 2女
                school_limit: _getSchool(_vm.ySchool), //学校限制
                cost_type: (function(){
                    //_vm.ySpend == 'AA制' ? 1 : ( _vm.ySpend == '我请客' ? 2 : 3)
                    var ret = 0;
                    if(_vm.ySpend == 'AA制') ret = 1;
                    else if(_vm.ySpend == '我请客') ret = 2;
                    else if(_vm.ySpend == '求包养') ret = 3;
                    else if(_vm.ySpend == '无消费') ret = 4;
                    return ret;
                })(), //AA, 我请客, 求请客
                uid: user.uid,
                token: user.token
            };

            /**
             * 前端表单check
             */
            if (info.date_type === '') {
                return $.Dialog.fail("请选择类型");
            }

            if (info.title === '') {
                return $.Dialog.fail("请输入标题");
            } else if (info.title.length > 10) {
                return $.Dialog.fail("标题请少于10个字符");
            }

            if (info.content.length > 150) {
                return $.Dialog.fail("内容请少于150个字符");
            }

            if (!info.date_time) {//invalid equal to NaN
                return $.Dialog.fail("请选择时间");
            }

            if (!info.date_place) {
                return $.Dialog.fail("请输入地址");
            }

            if (!info.date_place) {
                return $.Dialog.fail("请输入地址");
            }

            request('publish', info).done(function (res) {
                log('发布成功', res);
                $.Dialog.success("发布成功!", 1500);
                setTimeout(avalon.router.navigate.bind(avalon.router, 'detail/' + res.date_id), 2200);
            }).fail(function(res){
                if(res.info == '请先完善个人信息')
                    return setTimeout(avalon.router.navigate.bind(avalon.router, 'userInfoEdit'), 2000);
            });
        },

        schoolHash: [{"id":1, "name": "重邮"}],
        //'1`运动 `2` 聚会 `3` 娱乐 `4` 拼车 `5` 交流 `6` 学习 `7` 旅游 `8` 活动(与发现那个模块不是一个) `9` 其它
        //类型
        datetype: [
            {"id":0, "type": "不限"},
            {"id": 1, "type": "运动"},
            {"id": 2, "type": "聚会"},
            {"id": 3, "type": "娱乐"},
            {"id": 4, "type": "拼车"},
            {"id": 5, "type": "交流"},
            {"id": 6, "type": "学习"},
            {"id": 7, "type": "旅游"},
            {"id": 8, "type": "活动"},
            {"id": 9, "type": "其他"}
        ],
        selectedDateTypeId: '',
        yType: "",
        yTypeStatus: false,
        yTypeValid: false,//标明数据有效状态
        yTypeBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                v = _vm['yType'];
            _vm['yTypeStatus'] = false;
            _vm['yType'] = v;
            _vm['yTypeValid'] = true;
        },

        yTitle: "",
        yTitleStatus: false,//标明激活状态
        yTitleValid: false,//标明数据有效状态
        yTitleBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                str = check();
            _vm['yTitleStatus'] = false;

            if (str) {
                _vm['yTitle'] = str;
                _vm['yTitleValid'] = true;
            }

            function check() {
                var $input = $("#yTitle"),
                    _str = $input.val().trim();
                return (_str && _str.length) > 0 ? _str : false;
            }
        },

        yContent: "",

        yTime: "",
        yTimeStatus: false,
        yTimeValid: false,//标明数据有效状态
        yTimeBlur: function (ev) {
            var _vm = avalon.vmodels['dateCreate'];
            _vm['yTimeStatus'] = false;
            var str;
            if (str = check()) {
                _vm['yTime'] = str;
                _vm['yTimeValid'] = true;
            }

            function check() {
                var $input = $("#yTime"),
                    _str = $input.val().trim();
                return (_str && _str.length) > 0 ? _str : false;
            }
        },

        yLocation: "",
        yLocationStatus: false,//标明激活状态
        yLocationValid: false,//标明数据有效状态
        yLocationBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                str = _vm['yLocation'];
            _vm['yLocationStatus'] = false;
            _vm['yLocation'] = str;
            _vm['yLocationValid'] = true;
        },

        yPeople: 0,
        yPeopleStatus: false,//标明激活状态
        yPeopleValid: false,//标明数据有效状态
        yPeopleBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                str = check();
            _vm['yPeopleStatus'] = false;

            if (str) {
                _vm['yPeople'] = str;
                _vm['yPeopleValid'] = true;
            }

            function check() {
                var $input = $("#yPeople"),
                    _str = $input.val().trim();
                return parseInt(_str) || 0;
            }
        },

        ySpend: "",
        ySpendStatus: false,//标明激活状态
        ySpendValid: false,//标明数据有效状态
        ySpendBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                v = _vm['ySpend'];
            _vm['ySpendStatus'] = false;
            _vm['ySpend'] = v;
            _vm['ySpendValid'] = true;

        },

        ySex: "",
        ySexStatus: false,//标明激活状态
        ySexValid: false,//标明数据有效状态
        ySexBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                v = _vm['ySex'];
            _vm['ySexStatus'] = false;
            _vm['ySex'] = v;
            _vm['ySexValid'] = true;

        },

        ySchool: "",
        ySchoolStatus: false,//标明激活状态
        ySchoolValid: false,//标明数据有效状态
        ySchoolBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                v = _vm['ySchool'];
            _vm['ySchoolStatus'] = false;
            _vm['ySchool'] = v;
            _vm['ySchoolValid'] = true;
        },

        academy: [], //hash
        yCollege: "",
        yCollegeStatus: false,//标明激活状态
        yCollegeValid: false,//标明数据有效状态
        yCollegeBlur: function (ev) {
            ev.stopPropagation();
            var _vm = avalon.vmodels['dateCreate'],
                v = _vm['yCollege'];
            _vm['yCollegeStatus'] = false;
            _vm['yCollege'] = v;
            _vm['yCollegeValid'] = true;
        },

        active: function (type, $ev) {

            var _vm = avalon.vmodels['dateCreate'];
            switch (type) {
                case 'yTitle':
                    _vm[type + 'Status'] = true;
                    $('#' + type).focus();
                    break;

                case 'yTime':
                    $('.widget').DateTimePicker({
                        titleContentDateTime: "请选择准备约会的时间",
                        setButtonContent: "就你了",
                        clearButtonContent: "算了吧",
                        dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
                        shortDayNames: weeks,
                        fullDayNames: weeks,
                        shortMonthNames: lunar,
                        fullMonthNames: lunar
                    });
                    _vm[type + 'Status'] = true;
                    $('#yTime').focus();
                    $ev.stopPropagation();
                    break;

                case 'yLocation':
                case 'yPeople':
                case 'ySpend':
                case 'ySex':
                case 'ySchool':
                case 'yCollege':
                case 'yType':
                    _vm[type + 'Status'] = true;
                    $('#' + type).focus();
                    break;


            }
        }
    });

    vm.$watch('yType', function (newStr, oldStr) {
        var idObj = vm['datetype'].filter(function (o) {
            return o.type == newStr;
        })[0];
        if (idObj) {
            vm['selectedDateTypeId'] = idObj.id || 0;
            log("选择的typeId:", idObj.id || 0);
        } else {
            vm['selectedDateTypeId'] = 0;
            log("选择的typeId: 没选!");
        }
    });
    vm.$watch('yTitle', function (newStr, oldStr) {
        vm['yTitle'] = newStr.trim();
    });
    vm.$watch('yLocation', function (newStr, oldStr) {
        vm['yLocation'] = newStr.trim();
    });
    vm.$watch('yPeople', function (newStr, oldStr) {
        vm['yPeople'] = parseInt(newStr) || 0;
    });

    vm.$watch('dateCreateTypeChanged', function(data){
        vm['schoolHash'] = data;
        console.log( vm['schoolHash'] );
    });
    vm.$watch('dateCreateFinish', function(){
        vm['finish']();
    });

    return vm;
});



