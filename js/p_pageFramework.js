// JavaScript Document
function head_menu(){
			var str ='<!--通用页头 start-->'		
			+'<div class="logo">'+'<img src="images/CCB_logo.png"/>'
            +'</div>'
          
			+'<div class="page_color_change">'
				+'<div class="phd_search"><input name="" type="text"><a href="#"><img src="images/btn_header_seach.jpg"/></a></div>'
				+'<ul class="header_second fr">'
           		+'<li><a class="nav_second_current phd_welcome" href="html/welcome/welcome.html">欢迎页</a></li>'
			    +'<li class="b">'
			    	+'<a class="nav_second_current phd_go" href="#d">转到<span><img src="images/icon_triangle.png"/></span></a>'
			    	+'<ul class="header_third">'
			        	+'<li><a href="#">个人网银</a></li>'
			            +'<li><a href="#">善融商务</a></li>'
			            +'<li><a href="#">建设银行首页</a></li>'
			        +'</ul>'
			    +'</li>'
//			    +'<li class="pl15"><a class="nav_second_current phd_set" href="#d" id="windowPop_set">设置</a></li>'
			    +'<li class="b">'
			    	+'<a class="nav_second_current phd_set" href="#d">设置<span><img src="images/icon_triangle.png"/></span></a>'
			    	+'<ul class="header_third">'
			        	+'<li><a href="#" id="windowPop_set">系统设置</a></li>'
			            +'<li><a href="#" id="set_index">设为首页</a></li>'
			            +'<li><a class="login_set" href="login.html">登录页设置</a></li>'
			        +'</ul>'
			    +'</li>'
			    +'<li class="b">'
			    	+'<a class="nav_second_current phd_more" href="#d">展开更多<span><img src="images/icon_triangle.png"/></span></a>'
			    	+'<ul class="header_third" style="width: 107px;">'
			        	+'<li class="phd_service"><a href="#">在线客服</a></li>'
			            +'<li class="phd_faq"><a href="#" id="windowPop_help">帮助</a></li>'
			        +'</ul>'
			    +'</li>'
			    +'<li class="ml10"><a class="nav_second_current phd_exit" href="#" onclick="quit();">退出</a></li>'
           +'</ul>'
				+'<p class="clear text_r f12 pt10">尊敬的 ××基金公司 (客户号：P000607305898) ×××，您好！</p>'
        	+'</div>'
		+'<!--通用页头 end-->'
		$('#phd_common').html(str);
	}
                 
function foot_menu(){
	var str ='<!--通用页尾 start-->'
		+'<p><img src="images/login_bgl.png" /><span>中国建设银行 版权所有 '
//			+'&copy;2015'
		+'</p>'
		+'<p>有任何问题请致电：95533或联系您的客户经理</p>'
		+'<!--通用页尾 end-->'
	$('#pft_common').html(str);
}
	
function right_menu(){
	var str ='<!--右侧菜单 start-->'
		+'<div onmouseout="cohr()" onmouseover="sohr()" class="scheme_r1c1">'
            +'<div id="rb2" class="scheme_r2c1"></div>'
            +'<div style="display:none" id="rb3" class="scheme_r3c1">'
                +'<div id="sidebar">'
                    +'<div id="side_open"><a href="#d"><img src="images/sidebar_8.png"></a></div>'
                    +'<div class="sidebox">'
                        +'<div class="sidebox_top"><a href="#d"><img src="images/sidebar_6.jpg"></a><a href="#d"><img src="/images/sidebar_7.jpg"></a></div>'
                        +'<div class="sidebox_body">'
                            +'<p>收到 <strong>5</strong> 封<a href="#d">未读邮件</a>, <strong>5</strong> 封<a href="#d">未读公告</a></p>'
                            +'<div class="sidebox_standard"><a href="#d">查看工作台</a></div>'
                            +'<div class="sidebox_standard_body">'
                                +'<div class="sidebox_standard_body_standard">'
                                    +'<div class="sidebox_standard_body_standard_left"><a href="#d">代扣流程</a></div>'
                                    +'<div class="sidebox_standard_body_standard_right"><a href="#d">&nbsp;</a></div>'
                                +'</div>'
                                +'<div class="sidebox_standard_body_standard">'
                                    +'<div class="sidebox_standard_body_standard_left"><a href="#d">代发制单</a></div>'
                                    +'<div class="sidebox_standard_body_standard_right"><a href="#d">&nbsp;</a></div>'
                                +'</div>'
                                +'<div class="sidebox_standard_body_standard">'
                                    +'<div class="sidebox_standard_body_standard_left"><a href="#d">代扣复核</a></div>'
                                    +'<div class="sidebox_standard_body_standard_right"><a href="#d">&nbsp;</a></div>'
                                +'</div>'
                                +'<div class="sidebox_standard_body_standard">'
                                    +'<div class="sidebox_standard_body_standard_left"><a href="#d">代扣流水查询</a></div>'
                                    +'<div class="sidebox_standard_body_standard_right"><a href="#d">&nbsp;</a></div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="sidebox_tex">'
                        +'<div class="sidebox_tex_1">企业信息</div>'
                        +'<div class="sidebox_tex_2">'
                            +'<p>'
                                +'尊敬的 <b>'
                                    +'中国石油有限公司<br>'
                                    +'张三'
                                +'</b> 您好：'
                            +'</p>'
                            +'<p>'
                                +'此次是您第 <b>68</b> 次登录网上银行<br>'
                                +'您上次登录网上银行的时间是'
                            +'</p>'
                        +'</div>'
                        +'<div class="sidebox_tex_1">2013-02-28 20:58</div>'
                    +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
		+'<!--右侧菜单 end-->'
			
	$('#right_menu').html(str);
}


function page_menu(){
	var str ='<div class="page-record">'
                +'<span>每页显示记录</span>'
                +'<select><option>10</option><option>50</option><option>100</option><option>200</option><option>500</option></select>'
                +'<span>共<b>3</b>条</span>'
            +'</div>'
			+'<div class="select-page">'
				+'第 1 页/共 32 页 [<a href="#" class="first"></a> <a href="#" class="prev"></a> <a href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a> <a href="#" class="next"></a><a href="#" class="last"></a>]'
				+'<input type="text" name="page-text" class="pbd_input_normal ipt-page-text" maxlength="2" />'
				+'<input type="button" value="转到" class="pbd_button_2_full_width" />'
			+'</div>'
	$('#select-page-box').html(str);
}

function back_menu(){
	return
	var str =
			'<div class="buttom" id="back-to-buttom">'
            	+'<div class="bottom_naxy">'
           		 +'<span class="bottom_spany">回到</span><br />'
               	 +'<span class="bottom_stop">底部</span>'
            	+'</div>'
			+'</div>'
				+'<div class="top" id="back-to-top">'
				+ '返回顶部'
			+'</div>'
	$('#back_menu').html(str);
}


/*回到底部开始*/	
	$(function(){ 
		//首先将#back-to-top隐藏 
		$("#back-to-buttom").show(); 
		$(function(){
			$(window).scroll(function(){
				if ($(window).scrollTop()>$(window).height()-300){
					$("#back-to-buttom").fadeOut(600);
					$("#back-to-buttom").css("bottom","10px");
				}else{
					$("#back-to-buttom").fadeIn(600);}
			
			});  
			
		$("#back-to-buttom").click(
			function(){
					$('body,html').animate({scrollTop:$(window).height()},600);return false;});
			});
		});
/*回到底部结束*/	
	
/*回到顶部开始*/	
	$(function(){ 
		//首先将#back-to-top隐藏 
		$("#back-to-top").hide(); 
		$(function(){
			$(window).scroll(function(){
				if ($(window).scrollTop()>$(window).height()-300){
					$("#back-to-top").fadeIn(600);
					$("#back-to-top").css("bottom","30px");
				}else{
					$("#back-to-top").fadeOut(600);}
			
			});  
			
		$("#back-to-top").click(
			function(){
					$('body,html').animate({scrollTop:0},600);return false;});
			});
		});
/*回到顶部结束*/	

$(document).ready(function() {
    $('#back-to-top').hover(function(){	
		//$(this).children().show();
	},function(){
		//$(this).children().hide();
	});
	$('#back-to-buttom').hover(function(){		
		$(this).children().show();
	},function(){
		$(this).children().hide();
	});
});

/*底部导航栏*/
/*底部浮动层JS*/
var attr=['images/lwin_zhgl.gif']
var attr2=['blue/fg2_welcome.html']
function menuload2()
{
	var oDiv=document.getElementById('scheme_d');
	var aDiv=oDiv.getElementsByTagName('div');
	var aEm=oDiv.getElementsByTagName('em');
	var oImg=document.getElementById('bimg');
	
	//var oDiv=document.getElementById('bimg');
	
	var time=null;
	var num=null;
	var num2=null;
	var bEn=false;
	
	for(var i=0; i<aDiv.length-2; i++)
	{
		aDiv[i].index=i;
		aDiv[i].onmousemove=function()
		{
			clearTimeout(time);
			num=this.index;
			num2=this.offsetLeft;
			
			oImg.parentNode.parentNode.style.display='block';
			oImg.parentNode.parentNode.style.left=this.offsetLeft-49+'px';
			oImg.src=attr[num];
			
		};
		
	}
	for(var i=0; i<aDiv.length-2; i++)
	{
		aDiv[i].onmouseout=function()
		{
			time=setTimeout(function(){
				
				oImg.parentNode.parentNode.style.display='none';
				//oImg.src="";
				},500);
		};
		
	};
	
	oImg.parentNode.parentNode.onmousemove=function()
	{
		clearTimeout(time);
		oImg.parentNode.parentNode.style.display='block';
		oImg.parentNode.parentNode.style.left=num2-49+'px';
		oImg.src=attr[num];
		
	};
	oImg.parentNode.parentNode.onmouseout=function()
	{
		time=setTimeout(function(){
			
			oImg.parentNode.parentNode.style.display='none';
			},500);
	};
	
	oImg.onclick=function()
	{
		window.location=attr2[num];
		num=null;
	};
	
	aDiv[4].onclick=function()
	{
		if(!bEn)
		{
			oImg.parentNode.parentNode.style.display='none';
			aDiv[num].style.display='none';
			bEn=true;
		}
		
	};
	
	
	for(var i=0; i<aEm.length; i++)
	{
		aEm[i].index=i;
		
		aEm[i].onclick=function()
		{
			if(!bEn)
			{
				aDiv[this.index].style.display='none';
				oImg.parentNode.parentNode.style.display='none';
				bEn=true;
			}
			else
			{return}
		}
	}
	
	var sotip=document.getElementById('realtime_tips');
    var cltip=document.getElementById('cltip');
	//?????
    /*setTimeout("sotip.style.display=\"block\";",1000);*/
	
}	
    	
    

   
                    
                
      