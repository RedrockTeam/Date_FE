//对typeHash name和id之间的转换
define(function(){
    function switcher(key, value){
        var i, j, temp;
        var typeHash = $$['dateTypes'];
        var retKey = key == 'type_name' ? 'type_id' : 'type_name';
        for(i in typeHash){
            temp = typeHash[i];
            if(temp[key] == value){
                return temp[retKey];
            }
            if(typeHash[i]['type_son'] && typeHash[i]['type_son'].length > 0){
                for(j in typeHash[i]['type_son']){
                    temp = typeHash[i]['type_son'][j];
                    if(temp[key] == value) return temp[retKey];
                }
            }
        }
    }

    return  function(data, key){
        data.forEach(function(chunk){
            chunk['date_type'] = switcher(key, chunk['date_type']);
        });
    }
});