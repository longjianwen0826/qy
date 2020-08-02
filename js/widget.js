//公共部分JS

/*=============下拉组件 START===========*/
(function($){
	$.fn.extend({
		'toSelect':function(){
			var $this = $(this);
			var option = this.next('ul.option');

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

/*
 *  自用简单tab
 *  arguments
 *  tab切换标签父元素  jQuery对象或选择器
 *  con切换内容父元素 jQuery对象或选择器
 *  选中时tab的class String或默认current
 */
		
function jsonzTab(tabPar,conPar,_class){
	var $tabChild, $conChild;
	var _class = _class || 'current';
	
	if (typeof tabPar === 'string') {
		$tabChild = $(tabPar).children();
		$conChild = $(conPar).children();
	} else {
		$tabChild = tabPar.children();
		$conChild = conPar.children();
	}
	
	$conChild.eq(0).siblings().hide();
	
	$tabChild.on('click',function(){
		var $this = $(this);
		console.log('a')
		$this.addClass(_class).siblings().removeClass(_class);
		$conChild.eq($this.index()).show().siblings().hide();
	});
}

/*
 * =============弹窗 START===========
 * 依赖 jquery.easyui.min.js
 * 	   easyui.css
 * 	   num 按钮个数，boolean
 * 	   tips 内容 string
 * 	   url1 确定跳转
 * 	   url2 取消跳转
 * 	   title 标题
 */
function alertOpen(num, tips, url1, url2,_title) {
	$(".panel.window").remove();
	$(".window-shadow").remove();
	$(".window-mask").remove();
	var cancelHtml = '';
	if (num) {
		cancelHtml = '<span class="pbd_btn_standard pbd_btn_w100 ml15" id="exit-close" ><b>取消</b></span>';
	}
	var imgSrc = '';

	imgSrc = '../../images/popUp/CCB_popUp_logo.png';
	if (arguments[5] == 'index') {
		imgSrc = 'images/popUp/CCB_popUp_logo.png';
	}
	var winhtml = '<div id="alert-tips">' +
		'<div class="alter_logo"><img src="'+imgSrc+'" /></div>'+
		'<div class="alert-feedback">'+
		'<span class="fail-icon"></span>'+
		'<div class="feedback-infor"><p>'+tips+'</p></div>'+
		'</div>'+
		'<div class="bnt-con"><span class="pbd_btn_standard pbd_btn_w100" id="sure_btn" ><b>确定</b></span>' + cancelHtml + '</div>' +
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
/*=============弹窗 END===========*/
(function(){




$(function(){
	/*=============侧边功能栏 START===========*/
	var fnMenu = function(){
		var $menu = $('#fn_menu');
		var _w = $menu.width();
		var $tab = $('#subnav');
		var $tabCon = $('#submenu_con').children();
		var $label = $menu.find('.fn_menu_lable');
		
		//显示隐藏操作
		$label.on('click',function (ev){
			var _this = $(this);
			if ( _this.data('open') ){
				$menu.animate({'right':-_w});
				_this.addClass('fn_menu_lable_out');
				_this.data('open',false);
			}else {
				$menu.animate({'right':0});
				_this.removeClass('fn_menu_lable_out');
				_this.data('open',true);
			}
			ev.stopPropagation();
		});

		//侧边栏关闭按钮切换显示
		$menu.on('mouseover mouseout','.fn_menu_lable,.fn_menu_hide_btn',function(){
			$('.fn_menu_hide_btn').toggle();
			$('.fn_menu_hide_msg').toggle();
		});

		$(".fn_menu_title_close").on("click",function(){
			$menu.animate({'right':-_w});
			$label.addClass('fn_menu_lable_out');
			$label.data('open',false);
		});
		
		//切换侧边栏tab操作
		$tab.on('click','li',function(){
			
			if ($tab.children().length !== $tabCon.length) return;
			var _index = $(this).index();
			
			$(this).siblings().find('a').removeClass('selected')
				.end().end()
				.find('a').addClass('selected');
				
			$tabCon.hide().eq(_index).show();
		});

		//条目删除
		$menu.find('.fn_menu_links_wrap').on('click','.fn_menu_closebtn',function (){
			$(this).parent().remove()
		})
	}();
	/*=============侧边功能栏 END=============*/


	/*=============返回顶部 START=============*/
	$(window).scroll(function(){
		//触发显示返回顶部功能按钮
		if ($(window).scrollTop()>$(window).height()-300){
			$("#back_to_top").fadeIn(600);
		}else{
			$("#back_to_top").fadeOut(600);
		}
	});  
	$('#back_to_top').on('click',function(){
		//返回顶部功能
		$('body,html').animate({scrollTop:0},600);
		return false;
	});
	/*===============返回顶部 END=============*/


	/*=============底部小工具 START===========*/
	//小工具编辑
	var tool = {
		init : function(){
			var that = this;
			that.redactTool();//点击确定按钮添加小工具到面板上
			that.maxLength();//限制选择的个数
			that.toggleTool();//切换显示小工具弹窗编辑面板
			that.toggleLLB();//切换显示利率表
			that.toggleMinTool();//切换显示小工具面板
			that.toggleCalculator();//切换显示计算器
		},
		//切换显示小工具弹窗编辑面板
		toggleTool : function(){
			var $toolPar = $('#foot_float');
			var $toolPanel = $toolPar.find('.system_set');
			var $bg = $toolPar.find('#window_blue');
			
			$toolPar.on('click','.edit',function(){
				$bg.toggleClass('hide');
				$toolPanel.toggleClass('hide');
			});
			
			$toolPar.on('click','#window_blue,.closebt4,.closebt3',function(){
				$bg.addClass('hide');
				$toolPanel.addClass('hide');
			})
			
		},
		//切换显示小工具面板，并判断是否给body绑定移入移除显示底部事件
		toggleMinTool : function(){
			var $toolPar = $('#foot_float');
			var $minTool = $toolPar.find('.fixed_tool');
			var $body = $('body');

			$toolPar.on('click','.scheme_r_tool,.fixed_tool_reduce',function(){
				$minTool.toggleClass('hide');
				if ($minTool.is(':visible')) {
					//先将全局的底部显示函数定时器清除，防止会有bug；
					clearTimeout(showFootTimer);
					//解除body绑定事件
					$body.off('mousemove.showFoot');
					$toolPar.animate({
						'bottom' : 0
					});
				} else {
					//底部隐藏
					$toolPar.animate({
						'bottom' : '-30px'
					});
					//给body重新绑定事件。
					$body.on('mousemove.showFoot',function(ev){
						showFootFloat.showFoot(ev);
					});
				}
			})
		},
		//点击确定按钮添加小工具到面板上
		redactTool : function(){
			var that = this;
			var $elm = $('.set_tool_btn');
			var $toolCon = $('.b-tool');

			$elm.on('click',function(){
				var $check = $('.tool_list').find("input[type=checkbox]");

				//点击时将内容转换为text,储存在msg中。
				var msg = '';
				$check.each(function(){
					var $this = $(this);
					//判断是否勾选
					if ($this.prop('checked') && $(this).hasClass('mytool')) {
						var $text = $this.parent().text();
						var $img = $this.parent().prev().attr('src');
						msg += '<span><img src="' + $img + '" >';
						msg += '<p><a class="blue" href="javascript:;">'+ $text +'</a></p></span>'
					}
				});
				//填充在小面板里
				$toolCon.html(msg);

				//重新给生成的利率表绑定事件
				that.toggleLLB();

				//退出时给li解绑限制8个选项的函数
				$('.tool_list li').unbind('.checkLen');
			})
		},
		//限制选择的个数
		maxLength : function(){
			var $elm = $('.b-tool-add').find('a');
			$elm.on('click',function(){
				var $checkCon = $('.tool_list li');
				$checkCon.bind('click.checkLen',function(){
					var $checkedLen = $(this).parent().find('input:checked').length;
					//限制8个多选框
					if ($checkedLen > 8) {
						$(this).find('input').prop('checked',false);
					}
				})
			});
		},
		//切换显示利率表
		toggleLLB : function(){
			var $toolPar = $('#foot_float');
			var $showLLB = $toolPar.find('.fixed_tool :contains(利率表)').parents('span');
			var $lLBCon = $toolPar.find('.system_set3');
			var $bg = $toolPar.find('#window_blue3');
			
			$showLLB.on('click',function(){
				$bg.removeClass('hide');
				$lLBCon.removeClass('hide');
			});
			
			$toolPar.on('click','.closebt3,#window_blue3',function(){
				$bg.addClass('hide');
				$lLBCon.addClass('hide');
			})
		},
		toggleCalculator : function(){
			var $toolPar = $('#foot_float');
			var $showCal = $toolPar.find('.fixed_tool :contains(计算器)').parents('span');

			var $calculator = $('#calculator');
			var $calculatorMark = $('#calculator_mark');

			$('body').on('click','.calculator_min,#calculator_mark',function(){
				$calculator.toggle();
				$calculatorMark.toggle();
			});

			$showCal.on('click',function(){
				$calculator.toggle();
				$calculatorMark.toggle();
			})

		}
	};
	//利率表相关
	var profit = {
		init : function(){
			var that = this;
			that.fillCon();//填充内容
			that.tabCon();//根据下拉框切换显示
		},
		//利率表数据
		fillJson :{
			'name' : ['一、城乡居民存款','（一）活期','（二）定期',' 1.整存整取','三个月','半年','一年','二年','三年','五年',' 2.零存整取、整存零取、存本取息','一年','三年','五年',' 3.定活两便','二、通知存款','一天','七天'],
			'annual' : [
				['',0.35,'','',1.60,1.80,2.00,2.50,3.00,3.05,'',1.60,1.80,1.85,'按一年以内定期整存整取同档次利率打六折执行','',0.80,1.35],
				['',0.35,'','',1.85,2.05,2.25,2.75,3.25,3.35,'',1.85,2.05,2.15,'按一年以内定期整存整取同档次利率打六折执行','',0.80,1.35]
			]
		},
		//填充内容
		fillCon : function(){
			var that = this;
			var Json = that.fillJson;
			var $table = $('.pbd_table_show');
			var $thatTime = $('.thatTime');
			var $checkVal = $('#choose_llb').find('.define_input').val();
			var msg = '';
			
			//右边日期显示内容
			if ( $checkVal == '') {
				$thatTime.html('日期：2015-08-06')
			} else {
				$thatTime.html('日期：' + $checkVal);
			}
			
			//初始化填充
			for (var i = 0 ,len = Json.name.length; i < len; i++) {
				//tr填充
				if (i % 2 == 1) {
					msg += '<tr class="odd">'
				} else {
					msg += '<tr>'
				}
				//td填充
				msg += '<td>' + Json['name'][i] + '</td>';
				var td2Html = Json['annual'][0][i];
				if (typeof td2Html == 'number') {
					td2Html = td2Html.toFixed(2);
				}
				msg += '<td>' + td2Html + '</td>';
				msg += '</tr>'
			}
			$table.html(msg);
		},
		tabCon : function(){
			var that = this;
			var Json = that.fillJson;
			var $footFloat = $('#foot_float');
			var $timeNow = $footFloat.find('.thatTime');
			var $tabOption = $('#choose_llb').find('.option');
			var $tr = $footFloat.find('.pbd_table_show tr');
			
			//下拉框点击时触发
			$tabOption.on('click','a',function(){
				var chooseDay = $(this).text();
				$timeNow.html('日期：' + chooseDay);
				
				$tr.each(function(i){
					
					//判断显示哪一条数据
					var msg = '';
					if (chooseDay == '2015-06-28') {
						msg = Json['annual'][1][i];
					} else {
						msg = Json['annual'][0][i];
					}
					
					//给数字加两位小数位
					msg = (typeof msg == 'number') ? msg.toFixed(2) : msg;
					$(this).find('td:eq(1)').html(msg);
					
				})
				
			})
		}
	};
	tool.init();
	profit.init();
	/*==============底部小工具 END============*/


	/*==============系统设置 START============*/
	var systemSet = {
		init : function(){
			var that = this;
			that.toggleSet();//切换显示系统设置弹窗
			that.checkChoose();//选择框相关
			that.toggleSidebar();//切换显示侧边栏
			that.setIndex();//设置首页
			that.defaultSet();//还原设置
			that.indexInit();//初始化显示
		},
		_obj : {
			eventBtn : $('#windowPop_set'),
			popup : $('#phd_common').find('.system_set2'),
			mask : $('#window_blue2'),
			par : $('#phd_common'),
			title : $('#set_con')
		},
		//切换显示系统这是弹窗
		toggleSet : function(){
			var that = this;
			var $elm = that._obj.eventBtn;
			var $mask = that._obj.mask;
			var $popup = that._obj.popup;
			var $par = that._obj.par;
			var $titleTab = that._obj.title;
			
			//显示隐藏系统设置弹窗
			$par.on('click','#windowPop_set,#window_blue2,.closebt5,.closebt4,.window_blue_close',function(){
				$popup.toggleClass('hide');
				$mask.toggleClass('hide');
			});
			
			//标题栏tab切换
			$titleTab.on('click','a',function(){
				$(this).addClass('current').siblings().removeClass('current');
				var _index = $(this).index();
				var _aCon = $(this).parents('.window_blue_body').children('div'); 
				_aCon.eq(_index + 1).removeClass('hide').siblings().not(':eq(0)').addClass('hide');
			})
			
		},
		//多选框相关
		checkChoose : function(){
			var $elm = $('.allChecked');
			var $checkCon = $('.tool_list');
			var $checkElm = $checkCon.find(':checkbox');

			//全选按钮点击事件
			$elm.on('click',function(){
				var $ul = $(this).parent().next('.tool_list');
				var $check = $ul.find('input');
				$check.prop('checked',$(this).prop('checked'));
			});

			//多选按钮点击后反选全选按钮
			$checkCon.on('click','li',function(){
				//点击li触发选择
				var $checkbox = $(this).find(':checkbox');
				$checkbox.prop('checked',!$checkbox.prop('checked'))
				
				var checkedLen = $(this).parents('.tool_list').find('input:checked').length;
				var checkboxLen = $(this).parents('.tool_list').find('input').length;
				
				var $elm = $(this).parents('.tool_list').prev().find('.allChecked');
				//判断选择的个数是否等于多选框个数
				if (checkboxLen == checkedLen) {
					$elm.prop('checked',true);
				} else {
					$elm.prop('checked',false);
				}
			});
			
			//修改点击多选框没有选择bug
			$checkElm.on('click',function(){
				$(this).prop('checked',!$(this).prop('checked'));
			})
		},
		//侧边栏显示隐藏功能
		toggleSidebar : function(){
			var $btn = $('.setSidebar');
			var $hideSidebar = $('#fn_menu').find('.fn_menu_hide_btn');
			var ifShow = true;

			$btn.on('click',function(){//点击系统设置事件
				if ($('.window_help').hasClass('hide')) return;
				
				//判断该多选框是否选中
				ifShow = $('.assist_table').find('input[value="show_sidebar"]').is(':checked');
				alertOpen(true, '尊敬的客户，你确认保存当前设置吗？', false, false,'辅助功能定制');

				//侧边栏显示隐藏，并把信息储存在sessionStorage.sidebar [show,hide]
				$('#sure_btn').on('click',function(){
					sidebarFn();
				});
			});

			//侧边栏点击关闭侧边栏功能按钮
			$hideSidebar.on('click',function(){
				ifShow = !($('#fn_menu').is(':visible'));
				sidebarFn();
			});

			//侧边栏闲时隐藏核心函数
			function sidebarFn(){
				if (ifShow) {
					$('#fn_menu').show();
					$.storage.set('sidebar','show');
				} else {
					$('#fn_menu').hide();
					$.storage.set('sidebar','hide');
				}
			}
		},
		//设置主页
		setIndex : function(){
			var _elm = $('#set_index');
			_elm.on('click',function(){
				alertOpen(true, '尊敬的客户，你确定要将当前页设置为首页吗？', false, false,'设为首页');
				
				$('#sure_btn').on('click',function(){
					
					var _sHref = window.location.href;
					$.storage.set('indexURL',_sHref);
				})
			});
			
		},
		//恢复系统设置
		defaultSet : function(){
			var $btn = $('.defaultSet');
			var $checkCon = $('.window_help2');
			var $fontSet = $checkCon.find('.fontSet');
			var $setIndex = $checkCon.find('.setIndex');

			$btn.on('click',function(){
				if ($checkCon.hasClass('hide')) return;
				alertOpen(true, '尊敬的客户，你确定要还原设置吗？', false, false,'恢复默认设置');
				$('#sure_btn').on('click',function(){
					//还原字体设置
					if ($fontSet.prop('checked')) {
						setFontSize.setTableInit();
					}
					
					//主页还原
					if ($setIndex.prop('checked')) {
						$.storage.remove('indexURL');
					}
				});
			});
		},
		//首页初始化
		indexInit : function(){

			var that = this;

			//辅助功能定制表格隔行换色
			function assistTableTabTr(){
				var $table = $('.assist_table');
				$table.find('tr').each(function(i){
					if (i % 2 == 0) {
						$(this).addClass('odd');
					}
				})
			}
			assistTableTabTr();

			//侧边栏判断显示和勾选框问题
				function sidebarInit (){
					if (!$.storage) return;
					var sidebar =$.storage.get('sidebar');
					var common_lable = $('#fn_menu');
					var $sidebar = $(':checkbox[value=show_sidebar]');

					if (sidebar == 'show' || sidebar == null) {
						common_lable.show();
						$sidebar.prop('checked',true);
					} else {
						common_lable.hide();
						$sidebar.prop('checked',false);
					}
				};
				sidebarInit();

			//小工具勾选 初始化li第四个的边距
			var $minTool = $('.tool_list').find('li');
			$minTool.each(function(index){
				if ($(this).index() % 4 == 3) {
					$(this).css({
						'margin-right' : '0px'
					})
				}
			});
			

			var $setFontElm = $('#windowPop_set');
			$setFontElm.on('click',function(){

				//还原字体设置选项
				var _fontStyle = $.storage.get('fontStyle');
				var _size = _fontStyle ? _fontStyle.substr(0,2) : '14';
				var _family = _fontStyle ? _fontStyle.substr(2) : '宋体';
				var $fontRadio = $('.set_font_size').find('[value='+ _size +']');
				var $fontSelect = $('#set_font_family :input');
				var $fontText = $('#set_font_family span');

				//表格内的字体还原
				setFontSize.setTableInit(_size,_family);
				//单选框和下拉框还原
				$fontRadio.prop('checked',true);
				$fontSelect.val(_family);
				$fontText.html(_family);
				if ($fontText.html() != '请选择')  $fontText.css('color','#000');

				//初始化侧边栏勾选
				sidebarInit();

				//初始化系统设置的全选按钮状态
				function windowSetAllCheckInit(){
					var $allCheck = $('.system_set2 .allChecked');
					$allCheck.each(function () {
						var $that = $(this);
						var $childCheck = $(this).parent().next().find(':checkbox');
						var _checkLen = $childCheck.length;
						var _checkedLen = $childCheck.filter(':checked').length;

						if (_checkedLen == _checkLen) {
							$that.prop('checked',true);
						} else {
							$that.prop('checked',false);
						}
					})
				}
				windowSetAllCheckInit();

				//辅助功能网银登录超时设置
				(function(){
					var $lockCheckbox = $('#lock_screen_input');
					var $lockInput = that._obj.popup.find('[name ^="lock_screen"]');

					//判断是否有设置过时间，有的话反显信息
					try {
						var lockTime = $.storage.get('lockTime');
						if (lockTime) {
							var secTime = toMin(lockTime);
							$lockInput.eq(0).val(secTime.min);
							$lockInput.eq(1).val(secTime.sec);
						} else if (lockTime == null) {
							$lockCheckbox.prop('checked',false);
							$lockInput.eq(0).val('03');
							$lockInput.eq(1).val('00');
						}
						function toMin(_val){
							var sec = Math.round(_val % (1000 * 60) / 1000);
							var min = Math.floor(_val / (1000 * 60));

							sec = sec > 10 ? sec : '0' + sec;
							min = min > 10 ? min : '0' + min;

							return {
								sec : sec,
								min : min
							};
						}
					}catch(err){}


					function chooseLockInput(){
						var _lockChecked = $lockCheckbox.prop('checked');
						if (_lockChecked) {
							$lockInput.removeAttr('disabled');
						} else {
							$lockInput.attr('disabled',true);
						}
					}
					chooseLockInput();

					$lockCheckbox.on('click',function(){
						chooseLockInput();
					})
				})()
			});
		}
	};
	systemSet.init();
	/*===============系统设置 END=============*/


	/*==============字体设置 START============*/
	var setFontSize = {
		init : function(){
			var that = this;
			that.setFontSize();//设置字体
			that.radioStyle();//预览效果
			that.setTableStyle();//默认样式
		},
		setFontSize : function(){//设置字体大小
			var that = this;
			var $trueBtn = $('.window_blue_set .closebt4');
			var $radioCon = $('.set_font_size');
			//点击确认时修改样式
			$trueBtn.on('click',function(){
				var _size = $radioCon.find(':checked').val();
				
				var _family = $('#set_font_family').find('input').val();
				//调用设置样式函数
				that.setTableInit(_size,_family);
	
			});
		},
		//设置第五行默认样式
		setTableStyle : function(){
			var $tr =  $('.set_font_table tr');
			$tr.each(function(){
				var $td = $(this).find('td');
				$td.each(function(index){
					//操作第五列
					if (index == 4) {
						$(this).css({
							/*'width' : '12em',*/
							'font-size' : '14px'
						})
					}
				})
			})
		},
		//实时显示预览效果
		radioStyle : function(){
			var $radio = $('.set_font_size').find('input');
			var $select = $('.window_blue_set #set_font_family .define_input');
			var $pTxet = $('.popUp_font_default_text');
			var $option = $('#set_font_family .option');
	
			//当单选框点击时触发，点击迷你table的样式
			$radio.on('click',function(){
				var _val = $radio.filter(':checked').val();
				var $tableTd = $(this).parent().prev().find('.set_font_table td');
				var $tableTh = $(this).parent().prev().find('.set_font_table th');
	
				var arr = [$tableTd,$tableTh,$pTxet];
				for (var i = 0 ; i < arr.length; i ++) {
					arr[i].css({
						'font-size' : _val+'px'
					})
				}
			});
	
			//下拉框
			$option.on('click',function(){
				var _val = $select.val();
				var _family = _val == undefined ? '宋体' : _val;
				var $tableTd = $(this).parents('.window_blue_set').find('.set_font_table td');
				var $tableTh = $(this).parents('.window_blue_set').find('.set_font_table th');
	
				var arr = [$tableTd,$tableTh,$pTxet];
				for (var i = 0 ; i < arr.length; i ++) {
					arr[i].css({
						'font-family' : _family
					})
				}
			})
	
		},
		setTableInit : function(_size,_family) {
			var that = this;
			var _iframe = $('#mainIframe');
			var _minTable = $('.popUp_font_table');
			var $bigTr = $('.set_font_table tr');
			var $bigTd = $('.set_font_table td');
			var $bigTh = $('.set_font_table th');
			var $minTd = _minTable.find('td');
			var $minTh = _minTable.find('th');
			var $minTitle = _minTable.find('p');
			var _size = (_size == undefined) ? '14' : _size.toString().substr(0,2);
			var _family = (_family == undefined) ? '宋体' : _family;
			var arr = [$bigTd,$bigTh,$minTd,$minTh,$minTitle];
	
			for (var i = 0,len = arr.length; i < len ; i++) {
				arr[i].css({
					'font-size' : _size + 'px',
					'font-family' : _family
				});
			}
	
			that.setTableStyle();
			$.storage.set('fontStyle',_size + _family);
		}
	};
	setFontSize.init();
	/*===============字体设置 END=============*/


	/*=========判断下载打印触发时机 START=======*/
	function allowDownload() {
		var _len = $('.set_font_table').find(':checked').length;
		var $downWran = $('.download_second');
		var $downChild = $downWran.children('li');
		var $downLi = $downWran.find('li');
		var aDownBtn = [];
		
		//把符合条件的加进array
		$downLi.each(function(){
		    var $this = $(this);
		    if ($this.children('a').text().length === 2) {
		        aDownBtn.push($this);
		    }
		});
		
		//根据逐个循环家预设的class。或删除class
	    for (var i = 0;i < aDownBtn.length;i++) {
	        if (_len) {
	            
	            i % 2 === 0 ? aDownBtn[i].addClass('b') : aDownBtn[i].addClass('bd').attr('href','javascript:print();');
	            aDownBtn[i].removeClass('noDownload');
	            
	        } else {
	            aDownBtn[i].removeClass('b').addClass('noDownload');
            $downWran.find('.download_second_current').attr('href','javascript:;');
	        }
	   }
		
	};
	//将事件暴露出来
	window.allowDownload = allowDownload;
	/*=========判断下载打印触发时机 END=========*/


	/*========表格里全选和单选事件 START========*/
	var AllCheckAndCheck = (function(){
		var $all = $('.allCheck');
		var $table = $('.set_font_table tbody');
		var $childCheck = null;

		$all.on('click',function(){
			var that = $(this);
			$childCheck = $table.find(':checkbox');
			if ($(this).parents('.set_font_table').length) {
				//上面的全选
				$childCheck = that.parents('thead').next().find(':checkbox');
			} else {
				//下面的全选
				$childCheck = that.parent().prev().find('tbody :checkbox')
			}

			var _allBox = that.prop('checked');
			$childCheck.prop('checked',_allBox);
			$all.prop('checked',_allBox);

			//调用函数判断是否可以进行图形操作
			allowDownload()

		});

		$table.on('click',':checkbox',function(){
			var $childCheck = $table.find(':checkbox');
			var that = $(this);
			checkedLen = that.parents('tbody').find(':checked').length;
			if (checkedLen == $childCheck.length) {
				$all.prop('checked',true);
			} else {
				$all.prop('checked',false);
			}

			//调用函数判断是否可以进行图形操作
			allowDownload();
		});
	})();
	/*=========表格里全选和单选事件 END=========*/


	/*============表格筛选框 START=============*/
	var filter = (function(){
		var $filterBtn = $("input[name='checkbox']");
		var $filterCount = $('.pbd_table_form_filter');
		$filterBtn.on('click',function(){
			var isTrue = $(this).prop('checked');
			
			//根据勾选状态来判断是否显示及调样式
			if (isTrue) {
				$filterCount.removeClass('hide');
				$('.pbd_table_show_title .download_second').css('margin-top','0');
			} else {
				$filterCount.addClass('hide');
				$('.pbd_table_show_title .download_second').css('margin-top','-40px');
			}

		})
	})();
	/*=============表格筛选框 END==============*/


	/*========littleToolTip 组件 START========*/
	/*
	* @arguments
	* eml 触发小tip的事件，一般为jq对象
	* con 显示内容，string
	* y y轴偏移量 默认是-30px
	* x x轴偏移量 默认是 -100%
	* timeStamp 事件，单位ms 默认是500ms
	*
	*调用
	*	littleToolTip({
	*	 	elm : $('.scheme_r_info'),
	*	 	con : '这是小工具',
	*	 	x : '10px',
	*	 	y : '10%'
	*	 });
	*/
	var littleToolTip = function (){
		//初始化参数
		var argument = arguments[0];
		var elm = (argument.elm instanceof jQuery) ? argument.elm : $('' + argument.elm + ''),
			con = argument.con || '小tip',
			x = argument.x || '-100%',
			y = argument.y || '-30px',
			timeStamp = argument.timeStamp || 500,
			timer = null;

		//把小tip添加到dom中
		var msg = $('<div class="littleToolTip">' + con + '</div>');
		msg.css({
			'top' : y,
			'left' : x
		});
		elm.css('position','relative').append(msg);

		//绑定鼠标移入移出事件
		elm.on('click',function(){
			clearTimeout(timer);
			msg.hide();
		}).on('mouseover',function(){
			var that = $(this);
			timer = setTimeout(function(){
				showTip(that);
			},timeStamp)
		}).on('mouseout',function(){
			clearTimeout(timer);
			$(this).parent().find('.littleToolTip').hide();
		});

		function showTip(that){
			that.find('.littleToolTip').show();
		}


	};
	littleToolTip({
		elm : '.scheme_r_info',
		con : '消息提醒'
	});
	littleToolTip({
		elm : '.scheme_r_tool',
		con : '小工具',
		y : '-35px'
	});
	/*=========littleToolTip 组件 END==========*/


	/*=========底部迷你消息框 足迹预览 START=============*/
	var minRemind = (function (firstTime,againTime) {

		var $foot = $('#foot_float');
		var $body = $('body');
		var $minRemind = $foot.find('.min-remind');
		var $elm = $foot.find('.min-remind-minimize');
		var $input = $foot.find('.min-remind-no-show-again');
		var timer = null;
		var $showWindow = $('#scheme_d').find('.scheme_div');

		//预览底部足迹
		$showWindow.on('mouseover mouseout',function(){
			$(this).find('img').toggleClass('hide');
		});

		//设置第一次显示的事件。
		setTimeout(function(){
			//显示迷你消息框函数调用
			$minRemind.show();
			//调用显示foot的函数
			aboutFootShow();
		},firstTime);

		//最小化按钮事件
		$elm.on('click',function(){
			//消息框隐藏。底部隐藏
			$minRemind.hide(0,function(){
				$foot.animate({
					'bottom' : '-30px'
				});
			});

			//给body重新绑定事件。
			$body.on('mousemove.showFoot',function(ev){
				showFootFloat.showFoot(ev);
			});

			//判断是否勾选了 “不再显示”
			var isAgain = !($input.prop('checked'));
			//先清除定时器
			clearInterval(timer);
			//如果没有勾选 “不再显示”，调用定时器隔一段时间显示出来
			if (isAgain) {
				timer = setInterval(function(){
					$minRemind.show();
					aboutFootShow()
				},againTime);
			}
		});

		//判断迷你消息框是否显示，如果不是隐藏状态，将body的事件解绑。foot显示出来。
		function aboutFootShow() {
			if ($minRemind.is(':visible')) {
				//先将全局的底部显示函数定时器清除，防止会有bug；
				clearTimeout(showFootTimer);
				//解除body绑定事件
				$body.off('mousemove.showFoot');
				$foot.animate({
					'bottom' : 0
				});
			}
		}
	})(50000,15000);
	/*==========底部迷你消息框 END ==============*/


	/*==========自用弹窗 START =================*/
	/*
	* 如果要用弹窗，看顶部 alertOpen 组件
	* @argument
	* 	elm : 点击触发事件,jq对象或类名等选择器
	* 	title : 标题，默认消息提醒
	* 	msg : 内部内容
	* 	mark : boolear 是否有蒙板
	*   opation : 透明度，默认0.5
	*   close : 关闭元素 可以用类名等选择器
	*/
	function JsonzAlertMsg() {
		var argument = arguments[0],
			elm = argument.elm,
			title = argument.title || '消息提醒',
			msg = argument.msg || '消息内容',
			hasMark = argument.mark || true,
			opacity = argument.opacity || 0.5,
			close = argument.close || '',
			$body = $('body');

		//把公共部分加载到body中
		var alertWrap = '';
		alertWrap += '<div class="j-alert-wrap">';
		alertWrap += '<div class="j-alert-title">';
		alertWrap += title;
		alertWrap += '<span class="j-alert-close"></span>';
		alertWrap += '<span class="j-alert-min"></span>';
		alertWrap += '</div>';
		alertWrap += '<div class="j-alert-contains">';
		alertWrap += msg;
		alertWrap += '</div>';
		alertWrap += '</div>';
		alertWrap += '<div class="j-mark"></div>';

		$body.append(alertWrap);

		var $mark = $('.j-mark');
		var $con = $('.j-alert-wrap');

		$mark.css('opacity',opacity);

        elm = elm instanceof jQuery ? elm : $('' + elm + '');
        if (elm instanceof Array) {
            for (var i = 0,j = elm.length;i < j;i++) {
                $(elm[i]).on('click',showDom)
            }
        } else {
            elm.on('click',showDom);    
        }
		
		//显示函数
		function showDom(){
		    if (hasMark) {
                $mark.show();
            }
            $con.show();
		}

		var closeOption = '.j-mark,.j-alert-min,.j-alert-close' + close;
		$body.on('click',closeOption,function(){
			$mark.hide();
			$con.hide();
		})

	}
	/*================自用弹窗 END =============*/

	JsonzAlertMsg({
		elm : ['.scheme_r_info','.min-remind-contains a'],
		title : '消息提醒',
		msg : '<img src="../../images/alert_temp.png">'
	});
	/*=========关于自用弹窗调用 END =============*/


	/*=====底部鼠标移入弹出底部足迹 START ========*/
	var showFootTimer = null;
	var showFootFloat = {
		init : function(){
			var that = this;
			//窗口改变时，调用函数更行可视区宽高数据
			$(window).on('resize',that._criticalCoords);
			//初始化调用底部显示函数
			$('body').on('mousemove.showFoot',function(ev){
				that.showFoot(ev)
			})
		},
		_obj : {
			$body : $('body'),
			$msgRemind : $('#foot_float').find('.min-remind')
		},
		//记录鼠标位置 窗口可视区高度和宽度
		_mouseCoords : function(ev){
			return {
				x : ev.clientX,
				y : ev.clientY,
				w : document.body.clientWidth,
				h : document.documentElement.clientHeight
			}
		},
		//记录触发事件所需参数。包括 foot左边位置，右边位置，上面位置。
		_criticalCoords : function(){
			var $foot = $('#foot_float');
			var _bodyW = document.body.clientWidth || document.documentElement.clientWidth;
			var _bodyH = document.documentElement.clientHeight;
			var _footW = $foot.width();
			var _footH = $foot.height();
			return {
				leftX : (_bodyW - _footW)/2,
				rightX : (_bodyW - _footW)/2 + _footW,
				topY : (_bodyH - _footH),
				bottomY : (_bodyH)
			}
		},
		//显示底部核心函数
		showFoot : function(ev){
			var that = showFootFloat;
			var $foot = $('#foot_float');
			//如果有定时器存在，先将定时器清除。
			if (showFootTimer) {
				clearTimeout(showFootTimer);
			}

			//设置定时器,防止触发多次事件性能问题。
			showFootTimer = setTimeout(function(){
				var _pos = that._mouseCoords(ev);
				var _coors = that._criticalCoords();
				var _footBottom = parseFloat($foot.css('bottom'));
				//判断鼠标位置是否在触发事件的范围内
				var _showFoot = _pos.x >= _coors.leftX && _pos.x <= _coors.rightX && _pos.y >= _coors.topY;

				//if foot is showed or hided ，return
				if (_footBottom != 0 && _footBottom != -30) return ;

				//如果鼠标位置符合要求，显示出来，否则隐藏
				if (_showFoot) {
					$foot.stop().animate({
						'bottom' : '0'
					});
				} else {
					$foot.stop().animate({
						'bottom' : '-30px'
					});
				}
			},100);
		}
	};
	//初始化调用
	showFootFloat.init();
	/*======底部鼠标移入弹出底部足迹 END ========*/


	/*======超时锁屏 START ========*/
	var lockScreen = function(timeOut){
		var timer = null;
		var interTime = null;
		var $head = $('#phd_common');
		var $btn = $head.find('.setSidebar');
		var $minuteInput = $head.find('[name="lock_screen_minute"]');
		var $secondInput = $head.find('[name="lock_screen_second"]');

		//如果有设置过锁屏时间，从本地获取，如果没有设置则不改变
		try {
			var storageTime = $.storage.get('lockTime');
			timeOut = storageTime ? storageTime : timeOut;
		}catch(err){}


		$btn.on('click',function(){
			var $sureBtn = $('#sure_btn');

			$sureBtn.on('click',function(){
				var $lockChecked = $head.find('#lock_screen_input:checked').length;

				if (!$lockChecked) {
					//如果没有勾选按钮，不再跳页面。
					$.storage.remove('lockTime');
					timeOut = 10000000;
					return;
				}

				//获得用户输入的数值，转换成毫秒数输出
				_minute = $minuteInput.val();
				_second = $secondInput.val();
				timeOut = toMs(_minute,_second);
				//将设置的时间储存在本地
				try{
					$.storage.set('lockTime',timeOut);
				}catch(err){}

				//先清除原有定时器，下面再次开启
				clearTimeout(timer);
				timer = null;
			});
		});

		//把时间转换为毫秒
		function toMs(minute,second){
			var val = 0;
			minute = parseInt(minute,10);
			second = parseInt(second,10);
			val = ((minute * 60) + second - 1) * 1000;
			return isNaN(val) ? 0 : val;
		}

		//每隔一秒执行一次定时器事件
		interTime = setInterval(function(){
			if (!timer) {
				timer = setTimeout(function(){
					lockFn();
				},timeOut)
			}
		},1000);

		//时间到执行的函数
		function lockFn(){
			window.location.href="../../login_content.html?lock=true";
		}

		//鼠标移动时清除定时器
		$('body').on('mouseover',function(){
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
		})

	};
	//初始化调用锁屏
	lockScreen(1801000);
	/*======定时锁屏 END ========*/
})
})();

/*============ 插件计算器 START============*/
(function(){

	var sNum1='';
	var sOpr='';

	var bNeedClear=false;	//是否需要清除输入框中已有的内容

	function calc(iNum1, iNum2, sOpr)
	{
		var iResult=0;
		switch(sOpr)
		{
			case '×':
				iResult=iNum1*iNum2;
				break;
			case '+':
				iResult=iNum1+iNum2;
				break;
			case '-':
				iResult=iNum1-iNum2;
				break;
			case '÷':
				iResult=iNum1/iNum2;
				break;
			default:
				iResult=iNum2;
		}

		return iResult;
	}

	function doInput()
	{
		var oInput=document.getElementById('calculator_input');
		var sHtml=this.innerHTML.replace(' ','');

		switch(sHtml)
		{
			case '=':
				oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);

				sNum1='';
				sOpr='';
				bNeedClear=true;
				break;
			case '+':
			case '-':
			case '×':
			case '÷':
				bNeedClear=true;

				if(sNum1.length!=0)
				{
					oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
				}

				sOpr=sHtml;

				sNum1=oInput.value;
				break;
			case 'C':
				oInput.value='0';
				sNum1='';
				sOpr='';
				break;
			default:	//数字
				if(bNeedClear)
				{
					oInput.value=parseInt(sHtml, 10);
					bNeedClear=false;
				}
				else
				{
					oInput.value=parseInt(oInput.value+sHtml, 10);
				}
				break;
		}
	}
	$(function(){
		var cou = document.getElementById('calculator');
		if (!cou) return;
		var aLi=cou.getElementsByTagName('li');
		var i=0;

		for(i=0;i<aLi.length;i++)
		{
			aLi[i].onmousedown=doInput;
			aLi[i].onmouseover=function ()
			{
				this.className='active';
			};

			aLi[i].onmouseout=function ()
			{
				this.className='';
			};
		}
	})
})();
/*=============插件计算器 END =============*/


	/*----------根据金额小写输入，动态输出大写金额。带四舍五入保留小数点后两位。 start----------*/
	/*使用说明：在onkeydown与onkeyup触发事件中同时启动脚本，参数controlInputId是输入金额的输入框，参数targetId是显示大写金额的输入框。*/
	function show_amt(obj, div){
		var strWithQfw=$(obj).val();
		if(strWithQfw==""){
			$(div).empty();
		}
		else{	
			//去掉千分位
			var strWithoutQfw = getoff_Qfw(strWithQfw);
			if(!checkFloat(strWithoutQfw)){
				if(!$('html').data('strLast')){
					$(obj)[0].value = '';
				}else{
					$(obj)[0].value = $('html').data('strLast');
				}
				$(obj)[0].focus();
				return false;
			}
			var dot=strWithoutQfw.indexOf(".");
			if (dot<0)
				dot=strWithoutQfw.length;
			intLen=(strWithoutQfw.substring(0,dot)).length;
			var bigCash=toChineseCash(strWithoutQfw);
			div.empty().append(bigCash);
			//添加千分位，重新显示在小写输入框中
			strWithQfw = add_Qfw(strWithoutQfw);
			if($('html').data('strLast') && $('html').data('strLast').length != strWithoutQfw.length){
				$(obj).val(strWithQfw);
			}
			$('html').data('strLast',strWithoutQfw);
		}
	}
	/*使用说明：在元素onblur触发事件中启动脚本，参数controlInputId是输入金额的输入框，参数targetId是显示大写金额的输入框。*/
	//格式化小写字符串，四舍五入后两位。
	/*function FunFormat(controlInputId,targetId)	{
		var tradeMoney=document.getElementById(controlInputId).value;
		tradeMoney = tradeMoney.replace(/,/g, '');
		var tradeMoneyNum = new Number(tradeMoney);
		tradeMoneyNum = tradeMoneyNum.toFixed(2);
		document.getElementById(controlInputId).value = tradeMoneyNum;
		if(document.getElementById(controlInputId).value==0.00)
		{
			document.getElementById(controlInputId).value = '';
		}
		show_amt(controlInputId,targetId)
	}*/
	function FunFormat(obj,div)	{
		var tradeMoney=$(obj).val();
		tradeMoney = tradeMoney.replace(/,/g, '');
		var tradeMoneyNum = new Number(tradeMoney);
		tradeMoneyNum = tradeMoneyNum.toFixed(2);
		$(obj).val(tradeMoneyNum);
		if($(obj).val()==0.00){
			$(obj).val('');
		}
		show_amt(obj,div);
	}
	
	
	var aNum = new Array(10);
	aNum[0] = "%u96F6";  //零
	aNum[1] = "%u58F9";  //壹
	aNum[2] = "%u8d30";  //贰
	aNum[3] = "%u53c1";  //叁
	aNum[4] = "%u8086";  //肆
	aNum[5] = "%u4F0D";  //伍
	aNum[6] = "%u9646";  //陆
	aNum[7] = "%u67D2";  //柒
	aNum[8] = "%u634C";  //捌
	aNum[9] = "%u7396";  //玖
	var HUNDREDMILLION = 0
	var TENTHOUSAND = 1;
	var THOUSAND = 2;
	var HUNDRED = 3;
	var TEN = 4;
	var YUAN = 5;
	var JIAO = 6;
	var CENT = 7;
	var ZHENG = 8;
	var aUnit = new Array(9);
	aUnit[HUNDREDMILLION] = "%u4EBF";	//亿
	aUnit[TENTHOUSAND] = "%u4E07";		//万
	aUnit[THOUSAND] = "%u4EDF";			//仟
	aUnit[HUNDRED] = "%u4F70";			//佰
	aUnit[TEN] = "%u62FE";				//拾
	aUnit[YUAN] = "%u5143";				//元
	aUnit[JIAO] = "%u89D2";				//角
	aUnit[CENT] = "%u5206";				//分
	aUnit[ZHENG] = "%u6574";			//整
	//大写金额组件
	function toChineseCash( cash )
	{
		var integerCash="";
		var decimalCash="";	
		var integerCNCash = "";
		var decimalCNCash = ""
		var dotIndex = 0;
		var cnCash = "";
		var Cash = "";
		Cash = javaTrim( cash );
		if( Cash == null || Cash.length == 0 )
			return cnCash;
		if( !checkFloat( Cash ) )
			return cnCash;	
		dotIndex = Cash.indexOf('.');
		if( dotIndex != -1 ) {
			integerCash = Cash.substring( 0, dotIndex );
			decimalCash = Cash.substring( dotIndex + 1 );	
		}else {
			integerCash = Cash;
			decimalCash = null;
		}
		integerCNCash = filterCharacter( integerCash, '0' );
		if( integerCNCash == null )
			integerCNCash = "";
		else
			integerCNCash = convertIntegerToChineseCash( integerCNCash );
		decimalCNCash = convertDecimalToChineseCash( decimalCash, false );
		if( decimalCNCash == null || decimalCNCash.length == 0 ){
			if( integerCNCash == null || integerCNCash.length == 0 )
				cnCash = aNum[0] + aUnit[YUAN] + aUnit[ZHENG]; //"零元整"
			else
				cnCash = integerCNCash + aUnit[YUAN] + aUnit[ZHENG]; //"元整"
		}else {
			if( integerCNCash == null || integerCNCash.length == 0 )
				cnCash = decimalCNCash;
			else
				cnCash = integerCNCash + aUnit[YUAN] + decimalCNCash;  //"元"
		}
		return unescape(cnCash);	
	}
	//大写金额组件
	function filterCharacter( filterString, filterChar )
	{
		if( filterString == null || filterString.length == 0 )
		{
			return null;
		}
		var i = 0;	
		for( ; i < filterString.length; i++ )
		{
			if( filterString.charAt( i ) != filterChar )
				break;
		}
		var ret = filterString.substring( i, filterString.length );
		ret = (ret.length > 0) ? ret : null;
		return ret;	
	}
	//大写金额组件
	function convertIntegerToChineseCash( cash )
	{
		var tempCash = "";
		var returnCash = "";
		if( cash == null || cash.length == 0 )
			return null;
		var totalLen = cash.length;
		var times = ((cash.length % 4) > 0) ? ( Math.floor(cash.length/4) + 1 ) : Math.floor(cash.length/4);	
		var remainder = cash.length % 4;
		var i = 0;	
		for( ; i < times; i++ )
		{
			if( i == 0 && (remainder > 0) ) {
				tempCash = cash.substring( 0, remainder );
			}else {
				if( remainder > 0 )
					tempCash = cash.substring( remainder+(i-1)*4, remainder+i*4 );
				else
					tempCash = cash.substring( i*4, i*4+4 );
			}
			tempCash = convert4ToChinese( tempCash, false );
			returnCash += tempCash;
			if( tempCash != null && tempCash.length != 0 ) 
				returnCash += getUnit( times - i );
		}
		return returnCash;
	}
	//大写金额组件
	function convert4ToChinese( cash, bOmitBeginZero )
	{
		var i = 0;
		var length = cash.length;
		var bBeginZero = false;
		var bMetZero = false;
		var returnCash = "";	
		for( ; i < length; i++ )
		{
			if( i == 0 && bOmitBeginZero && cash.charAt(i) == '0' )
			{
				bBeginZero = true;
				continue;
			}
			if( bBeginZero && cash.charAt(i) == '0' )
				continue;
			if( cash.charAt(i) != '0' )	{
				if( bMetZero )
					returnCash += aNum[0]; //"零"
				bMetZero = false;
				returnCash += convert( cash.charAt(i) );
				switch( i + (4-length) )
				{
				case 0:
					returnCash += aUnit[THOUSAND]; //"千"
					break;
				case 1:
					returnCash += aUnit[HUNDRED]; //"佰"
					break;
				case 2:
					returnCash += aUnit[TEN]; //"拾"
					break;
				case 3:
					returnCash += "";
					break;
				default:
					break;				
				}
			}else {
				bMetZero = true;
			}
		}
		return returnCash;
	}
	//大写金额组件
	function getUnit( part )
	{
		var returnUnit = "";
		var i = 0;
		switch( part )
		{
		case 1:
			returnUnit = "";
			break;
		case 2:
			returnUnit = aUnit[TENTHOUSAND]; // "万"
			break;
		case 3:
			returnUnit = aUnit[HUNDREDMILLION]; //"亿"
			break;
		default:
			if( part > 3 )
			{
				for( ; i < part - 3; i++ )
				{
					returnUnit += aUnit[TENTHOUSAND]; // "万"
				}
				returnUnit += aUnit[HUNDREDMILLION]; //"亿"
			}
			break;
		}
		return returnUnit;
	}
	//大写金额组件
	function convert( num )
	{
		return aNum[parseInt(num)];
	}
	//大写金额组件
	function convertDecimalToChineseCash( cash, bOmitBeginZero )
	{
		var i = 0;
		var bBeginZero = false;
		var bMetZero = false;
		var returnCash = "";
		if( cash == null || cash.length == 0 )
			return returnCash;
		for( ; i < cash.length; i++ )
		{
			if( i >= 2 )
				break;
			if( i == 0 && bOmitBeginZero && cash.charAt(i) == '0' )
			{
				bBeginZero = true;
				continue;
			}
			if( bBeginZero && cash.charAt(i) == '0' )
				continue;
			if( cash.charAt(i) != '0' )	{
				bMetZero = false;
				returnCash += convert( cash.charAt(i) );
				switch( i )
				{
				case 0:
					returnCash += aUnit[JIAO]; //"角"
					break;
				case 1:
					returnCash += aUnit[CENT]; //"分"
					break;
				default:
					break;				
				}
			}else {
				bMetZero = true;
			}
		}
		return returnCash;	
	}
	/*
	//去掉 ","
	function getoff_Qfw(cash){
		var len=cash.length;
		var ch="";
		var newCash="";
		for (var ii=0;ii<len;ii++){
			ch=cash.charAt(ii);
			if (ch!=","){newCash=newCash+ch;}
		}
		return newCash;
	}*/
	/*
	//加上","
	function add_Qfw(cash)
	{
		var len=cash.length;
		var cashNew="";//加上","的字符串
		var tt=0;//计数器，每加一个"," tt 加 1 
		var t=0;//添加","的个数
		if(intLen>3)
			{
				t=(intLen-intLen%3)/3;
			}
		else
			return cash;
		if(intLen%3 !=0)
		{
			for (var ii=0;ii<len;ii++)
			{
				cashNew=cashNew+cash.charAt(ii);
				if (ii== (intLen%3+3*tt-1) &&  tt<t)
				{
					tt=tt+1;
					cashNew=cashNew+",";
				}
			}
		}
		//个数部分长度是3的倍数
		else
		{
			tt=tt+1;
			for (var ii=0;ii<len;ii++)
			{
				cashNew=cashNew+cash.charAt(ii);
				if (ii== (3*tt-1) &&  tt<t)
				{
					tt=tt+1;
					cashNew=cashNew+",";
				}
			}	
		}
		return cashNew;
	}*/
	/*****************************************
	//判断数值,是否为浮点数
	function checkFloat(string) { 
		var length1 , i , j;
		var string1="";
		var ofstr=getoff_Qfw(string);
		var oflen=ofstr.length;
		if(oflen>0 && ofstr.charAt(oflen-1)==" ") return(false);
		string1 = javaTrim(string)
		length1 = string1.length;
		if (length1 == 0) 
		{
			//alert( "错误！空串！");
			return(false); 
		}
			
			if(string.charAt(0)=="0")
		{
			if(length1 > 1){
			var num=0;
			for(var i = 0; i < oflen; i++){
					var c = ofstr.charAt(i);
					if(c==0) num++;
				}
				if(num==oflen || (num==oflen-1 && ofstr.charAt(oflen-3)==".")){
					//alert("金额不能为0，请重新填写！");
					return(false);
				}
			}
			if(length1 == 4 && string == "0.00")
			{
				//alert("金额不能为0，请重新填写！");
				return(false);
			}
		}
		j=0;
		for (i = 0 ; i < length1 ; i++) {  //判断每位数字
			if(isNaN(parseInt(string.charAt(i),10)))  {
				if(string.charAt(i) != ".")  {
					//alert( "错误！请输入数值型数据！");					
					return(false); 
				} else  {j++;
				}
			}		
		}
		if(j > 1) {
			//alert( "错误！小数点只能有一个!");			
			return(false);
		}
		return (true);
	};*/
	/**************去掉字符串前后的空格************
	function javaTrim(string){
		var length1, i, j;
		var string1 = "";
		length1 = string.length;
		for (i = 0 ; i < length1 ; i++)	{
			if(string.charAt(i) != " ")	{
				for (j = i ; j < length1 ; j++) 
					string1 = string1 + string.charAt(j);
					break;
			}
		}	
		length1 = string1.length;
		string = string1;
		string1 = "";
		for (i = length1 - 1 ; i >= 0 ; i--) {
			if(string.charAt(i) != " ") {
				for (j = 0 ; j <= i ; j++) 
					string1 = string1 + string.charAt(j);
					break;	
			}
		}
		string = string1;	
		return(string)	
	}
	----------根据金额小写输入，动态输出大写金额。带四舍五入保留小数点后两位。 end----------*/
