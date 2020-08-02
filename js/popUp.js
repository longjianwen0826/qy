/*--------------------提示信息框 start----------------------*/
function alertOpen(num, tips, url1, url2,_title) {
    $(".panel.window").remove();
    $(".window-shadow").remove();
    $(".window-mask").remove();
    var num = num;
    var tips = tips;
    var url1 = url1;
    var url2 = url2;
    var Cancelhtml = '';
    if (num) {
        Cancelhtml = '<span class="pbd_btn_standard pbd_btn_w100 ml15" id="exit-close" ><b>取消</b></span>';
    }
    var winhtml = '<div id="alert-tips">' +
    '<div class="alter_logo"><img src="images/popUp/CCB_popUp_logo.png" /></div>'+
    '<div class="alert-feedback">'+
    '<span class="fail-icon"></span>'+
    '<div class="feedback-infor"><p>'+tips+'</p></div>'+
    '</div>'+
    '<div class="bnt-con"><span class="pbd_btn_standard pbd_btn_w100" id="sure_btn" ><b>确定</b></span>' + Cancelhtml + '</div>' +
    '</div>';
    $(winhtml).appendTo("body");
    $("#alert-tips").window({
        dom: 'alert-tips',
        title: _title || '系统提示',
        width: 482,
        height: 239,
        modal: true,
        minimizable: false,
        maximizable: false,
        collapsible: false
    });
    if (num) {
        jQuery("#exit-close").click(function () {
            $("#alert-tips").window("close");
            if (url2) {
                location.href = url2;
            }
        });
    }
    $("#sure_btn").click(function () {
        $("#alert-tips").window("close");
        if (!url1) {
            var cb = jQuery('html').data('callBack');
			if(cb){
				if (!cb.callBack()) {
					cb.callBack();
				}
			}
        }
        else {
            location.href = url1;
        }
    });
}
/*--------------------提示信息框 end----------------------*/
/*=============下拉组件 START===========*/
(function($){
    $.fn.extend({
        'toSelect':function(){
            var $this = $(this);
            var option = this.next('ul.option');
            var initVal = $this.children('span').text();

            this.click(function(){
                option.toggle(1,function(){
                    if(option.is(':visible')){
                        $this.addClass("selecton");
                        $(document).bind('click',function(e){
                            if($(e.target).attr('class') == 'hover'){
                                return false;
                            }
                            option.hide();
                            $(document).off();
                            $this.removeClass("selecton");
                        })
                    }
                    else{
                        $this.removeClass("selecton");
                        $(document).off();
                    }
                });
            });
            option.find('a').click(function(){
                if($this.attr('class') != 'hover'){
                    $this.next('ul.option').hide();
                    $this.find('span').html($(this).html()).css('color','#000');
                    $this.find('.define_input').val($(this).html());
                    $(".select").removeClass("selecton");
                }
            })
        }
    })
})(jQuery);
$(function(){
    $('div.select').each(function(){
        $(this).toSelect()
    });
});
/*=============下拉组件 END===========*/



