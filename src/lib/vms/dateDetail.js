
//约会详情 vm
define(['avalon', 'jquery', 'request', 'userCenter', 'dialog'], function(avalon, $, request, userCenter){
    var vm = avalon.define({
        $id: 'dateDetail',
        date_id: 0, //当前页面的date_id
        state: {},
        data: {},
        comment_content: '',   //评论内容
        collected: false,    //是否收藏过
        showCommentInput: false,
        schoolHash:[],
        canCollect: true,    //禁止连续点击收藏
        getSchool: function(id){
            console.log(id);
            var ret = '';
            vm['schoolHash'].forEach(function(hash){
                if(id == hash.school_id) ret = hash.school_name;
            });
            return ret;
        },
        getUserDetail: function(uid){
            avalon.router.navigate('/user/check/' + uid);
        },
        toggleCollect: function(){
            if(!vm['canCollect']){
                return 0;
            }
            var user = userCenter.info();
            $.Dialog.loading();

            var reqRoute = !vm['collected'] ? 'dateCollect' : 'dateDelCollect';

            request(
                reqRoute,
                {uid: user.uid, token: user.token, date_id: vm['date_id']}
            ).done(function(){
                    vm['collected'] = !vm['collected'];
                    vm['collected'] ? $.Dialog.success('收藏成功!!') : $.Dialog.success('取消收藏成功!!');
                    vm['canCollect'] = true;
                }).fail(function(){
                    vm['canCollect'] = true;
                });
        },
        toggleInput: function(){
            vm['showCommentInput'] = !vm['showCommentInput'];
        },
        comment: function(){
            if(!vm['comment_content']){
                $.Dialog.fail('请输入内容!!!');
                return 0;
            }
            var user = userCenter.info();
            $.Dialog.loading();
            request(
                'dateComment',
                {uid: user.uid, token: user.token, date_id: vm['date_id'], 'content': vm['comment_content']}
            ).done(function(){
                    $.Dialog.success('评论成功!!');
                    vm['data']['commented'].unshift({
                        "uid": user.uid,            //该用户uid
                        "nickname": user.name,    //昵称
                        "head": user.head,           //头像
                        "content": vm['comment_content'],        //评论内容
                        "time": Date.now()     //评论时间  时间戳
                    });
                    console.log(vm['data']['commented']);

                    vm['toggleInput']();
            });
        },
        chat: function(){
            $.Dialog.success('哈哈，聊锤子个天!!');
        }
    });


    vm.$watch('dateDetailDataChanged', function(data){
        vm['data'] = data;
        vm['collected'] = data.collected;
    });
    vm.$watch('dateDetailSchoolHashChanged', function(hash){
        vm['schoolHash'] = hash;
    });
    vm.$watch('dateDetailIdChanged', function(date_id){
        vm['date_id'] = date_id;
    });
});