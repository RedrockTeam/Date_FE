/*
* created by liuhzz
**/

define('vms/search', ['avalon', 'request'], function(avalon,request){

    return avalon.define({
        $id : "search",
        list_activity: {},
        list_people: {},
        content:'',
        finish:function(){
            var content = avalon.vmodels['search'].content;
            var list = avalon.vmodels['search'].list;
            request('searchDo',{
                uid: '',
                token: '',
                type: 1,
                content: content == '' ? '' : content.trim()
            }).done(function(res){
                list = res.data;

            })
        }
    });

})