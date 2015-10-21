//对象复制， 过滤 带$的属性
define(function(){
    return function(temp, data){
        for(var key in data){
            if(key[0] != '$'){
                if(typeof data[key] == 'string'){
                    temp[key] = data[key]
                } else{
                    temp[key] = {};
                    arguments.callee(temp[key], data[key]);
                }
            }
        }
    };
});
