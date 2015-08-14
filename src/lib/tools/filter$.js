//对象复制， 过滤 带$的属性
define('filter$', function(){
    var filter$ = function(temp, data){
        for(var key in data){
            if(key[0] != '$'){
                if(typeof data[key] == 'string'){
                    temp[key] = data[key]
                } else{
                    temp[key] = {};
                    filter$(temp[key], data[key]);
                }
            }
        }
    };

    return filter$;
});
