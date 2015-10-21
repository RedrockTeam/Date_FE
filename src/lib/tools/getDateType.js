define(['request'], function(request){
    return function(cb){
        request('dateType').done(function(res){
            cb(res.data);
        });
    }
});