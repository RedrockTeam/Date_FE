/*
* created by liuhzz
**/

define('vms/search', ['avalon', 'vms/main', 'request'], function(avalon,vmsMain,request){

    var vmSearch = avalon.define({
        $id : "search",
        list_activity: [{
            "title":'',
            "signature":''
        }] ,
        list_people: [{
            "uid": '',
            "head": '',
            "gender": '',
            "signature": ''
        }],
        content:'',

        finish:function(){
            vmsMain.state = 'loading';
            var content = avalon.vmodels['search'].content;
            var list_activity = avalon.vmodels['search'].list_activity;
            var list_people = avalon.vmodels['search'].list_people;
            request('searchDo',{
                uid: '',
                token: '',
                type: 1,
                content: content == '' ? '' : content.trim()
            }).done(function(res){
                list_activity = res.data.activity;
                list_people = res.data.people;
                avalon.scan();
                vmsMain.state = 'ok';
                log(list_activity);
            })
        }
    });

    return vmSearch;

})