$(function(){
	/*菜单设置的二级菜单显示与隐藏*/
	$(".an").click(function(){
//		$(this).parents(".cddt").find(".cddt_second").addClass("hide");
//		
		//如果存在展开图标并且有下一级菜单的就显示弹出来
		if($(this).hasClass("cddt_add_icon")){
			$(this).parents(".cddt").find(".cddt_second").addClass("hide");
			$(this).parents(".cddt").find(".an").addClass("cddt_add_icon").removeClass("cddt_cut_icon");
			$(this).addClass("cddt_cut_icon").removeClass("cddt_add_icon");
			$(this).next().removeClass("hide");
		}else if ($(this).hasClass("cddt_cut_icon")){
			$(this).addClass("cddt_add_icon").removeClass("cddt_cut_icon");
			$(this).next().addClass("hide");
		}
	})
	
	/*菜单的更多隐藏与展开显示*/
	$(".unfold").click(function(){
		if($(this).parent().prev().hasClass("hide")){
			$(this).parent().prev().removeClass("hide");
			$(this).text("收起");
			$(this).parent().prev().find(".cddt_div").last().css("margin-bottom","17px");
		}else {
			$(this).parent().prev().addClass("hide");
			$(this).text("展开");
		}
	})
	
	/*冒泡提示 start*/
	$(".Bubble_tips").hover(function(){
		$(this).find(".upload_box").removeClass("hide");	
	},function(){
		$(this).find(".upload_box").addClass("hide");	
	})
	/*冒泡提示 end*/
})

/*添加我的模板弹窗 start*/
	function add_Wdmb(){
//		var str='<div class="popup_head">'
//					+'<span class="popup_title">我的模板</span>'
//					+'<span class="popup_title_close"></span>'
//			    +'</div>'
//			    +'<div class="popup_logo_module">'
//					+'<div class="popup_logo"></div>'
//			    +'</div>'
//			
//				+'<div class="popup_border"></div>'
//			
//				+'<div class="popup_context">'
//					+'<p>请在列表中选择模板：</p>'
//					+'<table border="0" cellspacing="0" cellpadding="0" class="popup_table">'
//						+'<tr>'
//							+'<th>模板名称</th>'
//							+'<th>备注</th>'
//						+'</tr>'
//					
//						+'<tr class="current">'
//							+'<td>查询类业务模板</td>'
//							+'<td>2015-10-1</td>'
//						+'</tr>'
//						+'<tr>'
//							+'<td>资金类业务模板</td>'
//							+'<td>2015-10-2</td>'
//						+'</tr>'
////						+'<tr>'
////							+'<td>查询类业务模板</td>'
////							+'<td>2015-10-6</td>'
////						+'</tr>'
////						+'<tr>'
////							+'<td>资金类业务模板</td>'
////							+'<td>2015-10-10</td>'
////						+'</tr>'
////						+'<tr>'
////							+'<td>资金类业务模板</td>'
////							+'<td>2015-10-13</td>'
////						+'</tr>'
//					+'</table>'
//				+'</div>'
//			
//				+'<div class="popup_btn">'
//					+'<a class="pbd_btn_standard pbd_btn_w100 mr15" href="javascript:;">确认</a>'
//					+'<a class="pbd_btn_standard pbd_btn_w100" href="javascript:;">取消</a>'
//				+'</div>';
//		$(".popup").html(str);	
		$(".popup").removeClass("hide");
		$("#window_blue").removeClass("hide");
	}
	/*添加我的模板弹窗 end*/