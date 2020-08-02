
  $(function(){
    // 表格条纹 start //
    function toggleTrBgc(){
        var table_tr = $('.set_font_table tbody tr:visible');
 
        var $table = $('.set_font_table');
        console.log($table);
        $table.each(function(){
            var $tr = $(this).find('tr:visible');
            $tr.each(function(item){
                if (item % 2 === 1) {
                    $(this).addClass('even').removeClass('odd');
                } else {
                    $(this).addClass('odd').removeClass('even');
                }
            })
            
        })
        
        table_tr.hover(function(){
            $(this).addClass('tr_hover');
        },function(){
            $(this).removeClass('tr_hover');
        });
    }
    toggleTrBgc();
    window.toggleTrBgc = toggleTrBgc;
    // 表格条纹 end  //
    
});

/*获取url地址上面的参数 start */
function GetRequest() {   
  var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
};
/*获取url地址上面的参数 end */