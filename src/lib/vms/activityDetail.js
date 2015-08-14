//活动详情 vm
define('vms/activityDetail',['avalon', 'userCenter', 'request'], function(avalon, userCenter, request){
    var vm = avalon.define({
        $id: 'activityDetail',
        activity_id: 0,
        data: {},
        comment_content: '',   //评论内容
        canCollect: true,    //禁止连续点击收藏
        collected: false,    //是否收藏过
        showCommentInput: false,
        getUserDetail: function(uid){
            avalon.router.navigate('/user/check/' + uid);
        },
        toggleCollect: function(){
            if(!vm['canCollect']){
                return 0;
            }
            var user = userCenter.info();
            $.Dialog.loading();

            var reqRoute = !vm['collected'] ? 'activityCollect' : 'activityDelCollect';

            request(
                reqRoute,
                {uid: user.uid, token: user.token, activity_id: vm['activity_id']}
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
                'activityComment',
                {uid: user.uid, token: user.token, activity_id: vm['activity_id'], 'content': vm['comment_content']}
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

    vm.$watch('data', function(){
        log('change');
    });
    vm.$watch('activityDetailDataChanged', function(data){
        vm['data'] = data;
    });
    vm.$watch('activityDetailIdChanged', function(id){
        vm['activity_id'] = id;
    });
});