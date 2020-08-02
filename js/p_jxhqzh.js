
//账户信息按钮信息提示
function ZHXX() {
    if ($('[name=items]:checked').length == 0) {
        alertOpen(false, '请选择5个以内的账户进行查询', false, false);
    }else if ($('[name=items]:checked').length > 5) {
    	alertOpen(false, '请选择5个以内的账户', false, false);
    }
	else{
    	location.href="jxhqzh_zhxx_1_tips.html";
    }
}

$(function(){
	jsonzTab('.tabs-com-p28','.tabCnt');
})


$(function(){
	/*** 编辑列 Start ***/
	
	// 对需要默认隐藏的列进行设置
	// 如果要设置隐藏，需要对列添加--> data-show="1"
	var dataShow=[];
	$('.sltTable tr').each(function(index, element) {
		$(this).find('th').each(function(index, element) {
			if($(this).attr('data-show')){
				dataShow.push($(this).index());
				$(this).hide();
			}
		});
	});
	$('.sltTable tr').each(function(index, element) {
		$(this).find('td').each(function(index, element) {
			for(var i=0; i<dataShow.length; i++){
				if(index == dataShow[i]){
					$(this).hide();
				}
			}
		});
	});
	
	
	/*点击windowPop显示*/
	$(".icon_revise:eq(0)").click(function(){
		if(!$('#edtTr').length){
			var EdtTr = '<div class="window_blue_box" id="edtTr">'+
							'<div class="window_blue_header">'+
								'<div class="window_blue_title">'+
									'编辑列'+
									'<span><a class="window_blue_close" id="closebt2" href="javascript:;"></a></span>'+
								'</div>'+
							'</div>'+
							'<div class="window_blue_body p20">'+
								'<div class="window_blue_hd">'+
									'<label><input type="checkbox" name="all_check">全选</label>'+
								'</div>'+
								'<div class="window_blue_cont">'+
								'</div>'+
								'<div class="text_c mt15">'+
									'<a id="standOk" class="pbd_btn_standard pbd_btn_w100 ml10 Del"><b>确定</b></a>'+
									'<a id="standMo" class="pbd_btn_standard pbd_btn_w100 ml10 downAll"><b>恢复默认</b></a>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div id="window_blue4"></div>';
			$('body').append(EdtTr);
		}
		$('#edtTr').find('.window_blue_cont').empty();
		
		
		
		
		//从新加载th列表
		var contBody = '';
		var hideTd = [];
		$('.sltTable th').each(function(index, element) {
			//把已经设置隐藏的列进行ID存储以便后续调用
			if($(this).css('display') === 'none'){
				contBody += '<div class="slt_item"><label><input type="checkbox" typeid="'+ $(this).index() +'" name="a_items">'+ $(this).text() +'</label></div>';
				hideTd.push($(this).index());
			}else if($(this).has('input').length != 1 && $(this).has('a').length != 1){
				contBody += '<div class="slt_item"><label><input type="checkbox" typeid="'+ $(this).index() +'" name="a_items">'+ $(this).text() +'</label></div>';
			}
		});
		if(hideTd.length == 0){
			$("input[name='all_check']").prop("checked", true);
		}else{
			$("input[name='all_check']").prop("checked", false);
		}
		$('#edtTr').find('.window_blue_cont').append(contBody);
		
		
		// 通过存储的ID进行设置隐藏的列
		$('#edtTr').find('.window_blue_cont').find('input').each(function(index, element) {
			$(this).prop("checked", true);
			for(var i=0; i<hideTd.length; i++){
				if(index+1 == hideTd[i]){
					$(this).prop("checked", false);
				}
			}
	    });
		$("#edtTr").show();
		$("#window_blue4").show();
		//设置子复选框的全选状态
		setTrSltAll();
		EdtTrFn();
		//调用主页的遮罩层
		if(window.parent.dialog != undefined){
			window.parent.dialog.show();
		}
		return false;
	});
	
	// 子复选框点击后 全选按钮跟随变化
	function setTrSltAll(){
		$("input[name='a_items']").each(function(index, element) {
			$(this).click(function () {
				//当没有选中某个子复选框时，all_check取消选中
				if (!$("input[name='a_items']").checked) {
					$("input[name='all_check']").attr("checked", false);
				}
				var chsub = $("input[name='a_items']").length; //获取a_items的个数
				var checkedsub = $("input[name='a_items']:checked").length; //获取选中的a_items的个数
				if (checkedsub == chsub) {
					$("input[name='all_check']").attr("checked", true);
				}
			});
		});
	}

	/** 弹出框内部事件 Start **/
	function EdtTrFn(){
	//底部下载弹窗 start
	$("#closebt2").click(function(){
		$("#edtTr").hide();
		$("#window_blue4").hide();
		//关闭主页的遮罩层
		if(window.parent.dialog != undefined){
			window.parent.dialog.close();
		}
	});

	// 全选
	$("input[name='all_check']").click(function () {
		if ($(this).attr("checked")) {
			$("input[name=a_items]").each(function() {
				$(this).attr("checked", true);  
			});  
		} else {  
			$("input[name=a_items]").each(function() {  
				$(this).attr("checked", false);  
			});  
		}
	});

	//确认操作显示的列
	$('#standOk').on('click', function(){
		/*$('#edtTr').find('.window_blue_cont').find('input').each(function(index, element) {
			var showIndex = $(this).attr("typeid");
			$(this).attr("checked")? setTdType($('.sltTable tr'), showIndex, 'show'):setTdType($('.sltTable tr'), showIndex, 'hide');
	    })*/
	   
	   
//		var last_one= $("input[name=a_items]:gt(-2)");
//		if (last_one.attr("checked", true)) {
//			$('.sltTable th').eq(14).addClass("hide");
//			$('.sltTable tr').eq(1).children("td").eq(14).addClass("hide");
//			$('.sltTable tr').eq(2).children("td").eq(14).addClass("hide");
//			$('.sltTable th').eq(13).addClass("hide");
//			$('.sltTable tr').eq(1).children("td").eq(13).addClass("hide");
//			$('.sltTable tr').eq(2).children("td").eq(13).addClass("hide");
//		} else{
//			
//		}

        var $input = $('.window_blue_cont').find('input');
        var $tr = $('.sltTable').find('tr')
        $input.each(function(index){
            var isChecked = $(this).prop('checked')
            
            $tr.each(function(){
                if (!isChecked) {
                    $(this).children().eq(index+1).hide();
                } else {
                    $(this).children().eq(index+1).show();
                }
            })
            
        })
		
		
		
		
		
		
		
		$("#edtTr").hide();
		$("#window_blue4").hide();
		//$("#edtTr").addClass("hide");
		//$("#window_blue4").addClass("hide");
		
	});
	
	//恢复默认显示
	$('#standMo').on('click', function(){
		if(dataShow.length == 0){
			$("input[name='all_check']").prop("checked", true);
		}else{
			$("input[name='all_check']").prop("checked", false);
		}
		$("input[name=a_items]").each(function() {
			$(this).attr("checked", true);
		});
		
		
		//从新加载th列表
		$('#edtTr').find('.window_blue_cont').empty();
		var contBody = '';
		var hideTd = [];
		$('.sltTable th').each(function(index, element) {
			//把已经设置隐藏的列进行ID存储以便后续调用
			if($(this).css('display') === 'none'){
				contBody += '<div class="slt_item"><label><input type="checkbox" typeid="'+ $(this).index() +'" name="a_items">'+ $(this).text() +'</label></div>';
				hideTd.push($(this).index());
			}else if($(this).has('input').length != 1 && $(this).has('a').length != 1){
				contBody += '<div class="slt_item"><label><input type="checkbox" typeid="'+ $(this).index() +'" name="a_items">'+ $(this).text() +'</label></div>';
			}
			
		});
		$('#edtTr').find('.window_blue_cont').append(contBody);
		// 通过存储的ID进行设置隐藏的列
		$('#edtTr').find('.window_blue_cont').find('input').each(function(index, element) {
			$(this).prop("checked", true);
			for(var i=0; i<dataShow.length; i++){
				if(index+1 == dataShow[i]){
					$(this).prop("checked", false);
				}
			}
	    });
		
		
	});
	}
	/** 弹出框内部事件 End **/
	
	// 设置td是否显示
	function setTdType(obj, showIndex, type){
		obj.each(function(index, element) {
			$(this).find('th').each(function(index, element) {
				if($(this).index() == showIndex){
					type == 'show' ? $(this).show(): $(this).hide();
				}
			});
		});
		obj.each(function(index, element) {
			$(this).find('td').each(function(index, element) {
				if($(this).index() == showIndex){
					type == 'show' ? $(this).show(): $(this).hide();
				}
			});
		});
	}

// 绑定拖拽排序
//trSortable($('.sltTable tr'));

/*** 编辑列 End ***/
});