$(function(){
	(function($){
		"use strict";
		
		/*
		 *  自用系统提示弹窗
		 *  argument 
		 * 	num Boolean 是否显示两个按钮 默认两个
		 * 	title String 标题内容
		 *  msg String 内容
		 *  mark Boolean 是否显示蒙版 默认显示
		 *  opacity Number 透明度 默认 0.3
		 *  close String 关闭按钮的jq选择器 默认 .jsonz_alert_close,.alert_btn,#jsonzMark
		 *  callback 确定按钮的回调
		 */
		$.fn.jsonzAlert = function(argument){
			var $this = $(this);
			var $body = $('body');
			var arg = arguments[0] || {};
			var $alertCon,$alertBg,$alertTitle,$alertMsg,$trueBtn;
			
			//初始化参数
			var _num = typeof arg.num == 'undefined' ? true : false,
				_title = arg.title || '消息提示',
				_mark = typeof arg.mark == 'undefined' ? true : false,
				_opacity = arg.opacity || 0.3,
				_close = arg.close || '',
				_msg = arg.msg || '内容部分';
			
			//判断要不要加入多个弹窗
			var nAlertLen = $body.find('#jsonzAlert').length;
			var mAlertMsg = '<div id="jsonzAlert">'+
                            '<div class="jsonz_alert_title">'+
                                '<p></p>'+
                                '<i class="jsonz_alert_close icon-alert-close"></i>'+
                            '</div>'+
                            '<div class="jsonz_alert_con">'+
                                '<div class="jsonz_alert_logo"></div>'+
                                '<div class="jsonz_alert_body">'+
                                    '<span class="jsonz_alert_icon"></span>'+
                                    '<p class="jsonz_alert_mes"></p>'+
                                '</div>'+
                                '<div class="jsonz_alert_footer">'+
                                    '<button class="jsonz_alert_true alert_btn">确定</button>'+
                                    '<button class="jsonz_alert_false alert_btn">取消</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div id="jsonzMark"></div>';
							
			if (!nAlertLen) {
				$body.append(mAlertMsg);
			}
			
			$alertCon = $body.find('#jsonzAlert');
			$alertBg = $body.find('#jsonzMark');
			$alertMsg = $body.find('.jsonz_alert_mes');
			$alertTitle = $body.find('.jsonz_alert_title p');
			$trueBtn = $alertCon.find('.jsonz_alert_true');
			
			//触发显示弹窗
			$this.on('click',function(){
				//初始化按钮数量
				if (_num) {
					$body.find('.jsonz_alert_false').show();
				} else {
					$body.find('.jsonz_alert_false').hide();
				}
				
				//初始化蒙版
				$alertBg.css('opacity',_opacity);
				
				//初始化内容
				$alertMsg.text(_msg);
				$alertTitle.text(_title);
				
				//显示蒙版与内容
				_mark && $alertBg.show();
				$alertCon.show();
				
                //确定按钮回调
                $trueBtn.on('click',function(){
                    if (typeof arg.callback === "function") {
                        arg.callback();
                    }
                })
                
			});
			
			//隐藏函数
			_close += '.jsonz_alert_close,.alert_btn,#jsonzMark';
			$body.on('click',_close,function(){
				$alertCon.hide();
				$alertBg.hide();
			});
			return this;
		};
		/*自用系统提示弹窗 END*/
		
		
		
		/*
		 *  自用上传弹窗
		 *  调用 upload.init
		 *  arguments
		 *  self 调用本身
		 */
		var upload = (function(){
			var $btn,$file,$save,$unSave,$mark,$self,$upload;

			function init (){
				var arg = arguments[0] || {};
				$mark = $('#jsonzMark');
				var $body = $('body');

				//添加到body
				!$body.find('#uploadPic').length && $body.append(uploadMsg);

				$upload = $('#uploadPic');
				var $path = $upload.find('.uploadPath');

				$upload.show();
				$mark.show();

				//初始化参数与dom;
				$btn = arg['btn'] || $upload.find('.uploadBtn');
				$file = arg.file || $upload.find('.uploadFile');
				$self = arg.self || null;
				$save = $upload.find('.uploadSave');
				$unSave = $upload.find('.uploadUnSave');

				$path.val('');
				$upload.find('.uploadShow').hide();

				//先清除绑定
                clearEvent();

				//按钮触发上传
				$btn.on('click.tiggleUpFile',function(ev){
					$(this).prev().val('');
					$(this).next().val('').click();
					ev.preventDefault();
				});

				//文件路径获取到之后触发事件
				$file.on('change',function(){
					uploadFile(this,'.uploadShow');
				});

				//保存事件触发
				$save.on('click',function(){
					if ($path.val() !== '') {
					    //将上传的图显示在dom
						showUploadImg($self,$file);

						//临时加的大众旁边上传图标判断，后期可删
						if (!$('.head-user-logo').is(':visible')) {
                            $('#headUpload').hide();
                        }
					}
				});

				//取消事件触发
				$unSave.on('click',function(){
				    
				})

				//关闭蒙版和上传窗口
				var sClose = '#uploadPic .uploadSave,#uploadPic .uploadUnSave,#uploadPic .uploadPicClose,#jsonzMark';
				$body.on('click',sClose,function(){
					closeUpload();
				})
			}

			//图片显示到上传窗口上
			function uploadFile(file){
				var $this = $(file);

				//显示路径
				var _val = $this.val();
				$this.parent().find('.uploadPath').val(_val);

				//显示图片
				var $img = $this.parent().next();
				$img.show();

				//判断是否有路径
				if (file.files && file.files[0]) {
				    
					//非IE
					var reader = new FileReader();
					
					reader.onload = function(evt) {
					    $img.html('<img src="' + evt.target.result + '" class="img"/>');
					};
					
					reader.readAsDataURL(file.files[0]);
					
				} else {
				    
					//IE情况下
					$img.html('<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>');
				}
			}

			//弹窗和蒙版关闭
			function closeUpload (){
				$upload.hide();
				$mark.hide();
			}

            //清除绑定事件
            function clearEvent() {
                $btn.off();
                $file.off();
                $save.off();
            }

			//图片显示到dom上
			function showUploadImg(showbox,uploadFile){
			    if (uploadFile.get(0).files && uploadFile.get(0).files[0]){
			        
			         var reader = new FileReader();
			         reader.onload = function(evt){
			         	showbox.show().find('.uploadImg').remove().end()
			         		.prepend('<img src="' + evt.target.result + '" class="uploadImg"  />');
			        };
			        
			        reader.readAsDataURL(uploadFile.get(0).files[0]);
			    }else{
			        
			    	showbox.show().find('.uploadImg').remove().end()
			    		.prepend('<div class="img" name="upload" id="'+$("#whichbox").val()+'" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + uploadFile.get(0).value + '\'"></div>');
			    		
			    }
			}

			//上传弹窗
			var uploadMsg =	'<div id="uploadPic">'+
                                '<h3>上传Logo</h3>'+
                                '<i class="uploadPicClose"></i>'+
                                '<form class="uploadForm">'+
                                    '<div class="uploadCon">'+
                                        '<span><i style="color: red;">*</i>上传图片:</span>'+
                                        '<input type="text" class="uploadPath"/>'+
                                        '<button class="uploadBtn">浏览</button>'+
                                        '<input type="file" class="uploadFile"/>'+
                                    '</div>'+
                                    '<div class="uploadShow" style="display: none;">'+
                            
                                    '</div>'+
                                    '<p class="uploadTip">1.支持JPG、PNG、JPEG、GIF、BMP格式 <br />2.选择图片单张不超过 2M。</p>'+
                                '</form>'+
                                '<div class="uploadFoot">'+
                                    '<button class="alert_btn uploadSave">保存</button>'+
                                    '<button class="alert_btn_false uploadUnSave">取消</button>'+
                                '</div>'+
                            '</div>';

			return {
				init : init
			}
		})();
		
		
		
		
		/*
		 *  自用简单tab
		 *  arguments
		 *  tab切换标签父元素  jQuery对象或选择器
		 *  con切换内容父元素 jQuery对象或选择器
		 *  选中时tab的class String或默认current
		 *  调用 jsonzTab('.a','.b','c') || jsonzTab($('#a'),$('.b a'));
		 */
		
		function jsonzTab(tabPar,conPar,_classN){
			var $tabChild, $conChild;
			var _class = _classN || 'current';
			
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
				$this.addClass(_class).siblings().removeClass(_class);
				$conChild.eq($this.index()).show().siblings().hide();
			});
		}
		
        jsonzTab('.wel_menu_tab','.wel_menu_con');
		
		
        /*
         *  自用获取参数函数
         */
        
        var jsonzSearch = function(){
            var obj = {};
            var url = location.search;
            
            if (url.indexOf('?') !== -1) {
                var str = url.slice(1);
                str = str.split('&');
                
                for (var i = 0,j = str.length;i < j;i++) {
                    var sea = str[i].split('=');
                    obj[sea[0]] = sea[1]; 
                }
            }
            
            return obj;
        }
		
		
		/*
		 * 大众等logo鼠标移入编辑事件
		 * 父标签加钩子.picload  生成编辑按钮和删除按钮
		 */
		
		$.fn.upLoadPic = function(){
			var $this = $(this);
			var $del,$re;
			var oParStyle = {
				'cursor': 'pointer',
				'position': 'relative'
			};
			
			//添加dom结构，编辑和删除
			$this.css(oParStyle)
				.append('<span class="picload-del">删除</span><span class="picload-re">编辑</span>');
			$del = $this.children('.picload-del');
			$re = $this.children('.picload-re');
			
			//鼠标移入移出切换显示隐藏
			$this.hover(function(){
				$(this).find('[class ^=picload-]').show();
			},function(){
				$(this).find('[class ^=picload-]').hide();
			});
			
			//删除事件
			$del.jsonzAlert({
				callback : function(){
					$this.hide();
					//如果是大众logo，则出现再次上传按钮
					if ($this.hasClass('head-user-logo')) {
					    $('#headUpload').show();
					}
				},
				title : '消息提醒',
				msg : '确定删除？'
			});
			
			//编辑事件
            $re.off();
			$re.on('click',function(){
				upload.init({
					self : $this
				})
			});
			
		};
		
		//调用上传函数
		(function(){
			var $pic = $('.picload');
			$pic.each(function(){
				$(this).upLoadPic();
			});
			
			//大众上传按钮事件
            $('#headUpload').on('click',function(){
                $('.head-user-logo').children('.picload-re').trigger('click');
            });
            
		})();
		
		
		
		/*
		 * 鼠标移入移出三个模块事件
		 */
		
		var welConTab = (function(){
			var $conDiv = $('#welcome-con').find('.wel-con-div');
			
			function init(){
				divEven();
			}
			
			function divEven(){
				$conDiv.on('mouseover.welConMouseover',function(){
					tabConWidth($(this));
				})
			}
			
			return {
				init : init,
				divEven : divEven
			}
		})();
		welConTab.init();
		
		
		
		/*
		 * 日历相关操作
		 * #weiDateClose 关闭按钮
		 */
		
		var dateOperation = {
			init : function(){
				var that = this;
				that.closeDate();
			},
			dom : {
                con : $('#welcome-con'),
                btn : $('#weiDateClose')
			},
			closeDate : function(){
			    var that = this;
				var $oCloseBtn = that.dom.btn;
				
				$oCloseBtn.on('click',that.closeFn)
			},
			//关闭日历后触发的事件
			closeFn : function(){
                var $welCon = dateOperation.dom.con;
                var $allCon = $welCon.find('.wel-con-div');
                var $date = $welCon.find('.wel-date');
                
			    $allCon.off('mouseover.welConMouseover');
                $date.hide();
                tabConWidth('.wel-hint','.wel-backlog');
			},
			showFn : function(){
			    var $date = dateOperation.dom.con.find('.wel-date');
			    $date.show();
                tabConWidth('.wel-backlog');
                welConTab.init();
			}
		};
		dateOperation.init();
		
		
		
		/*
		 * welcome三个模块 鼠标移入移出封装函数
		 * 传入jq对象或jq选择器
		 * 如  tabConWidth('.wel-hint') || tabConWidth($('.wel-hint')) 
		 */
	
		function tabConWidth (){
			var arg = arguments;

			if (arg === undefined) {
				return false;
			} else if (arg.length > 1){
				//如果是两个
				$('#welcome-con').find('.wel-date').hide();
				
				for (var i = 0,j = arg.length;i < j;i ++) {
					if (!(arg[i] instanceof jQuery)) {
						arg[i] = $('' + arg[i] + '');
					}
					arg[i].addClass('big').removeClass('small');
				}
			} else {
				//不是数组，一个变宽，其他变窄
				arg = (arguments[0] instanceof jQuery) ? arguments[0] : $('' + arguments[0] + '');
				arg.removeClass('small').addClass('big')
					.siblings('.wel-con-div').addClass('small').removeClass('big');
			}
		}
		
		/*
		 * 欢迎页常用功能设置
		 */
		
		(function(){
		    
		    return;
		    //重写前
			var $ent = $('#welMenuEnt'), //侧边菜单按钮
			    $menu = $('#welMenu'), //菜单主体
    			$mark = $('#jsonzMark'), //蒙版
    			$welBox = $('#welSelectBox'), //常用功能列表
    			$input = $welBox.find('input'), //常用功能列表下多选框
    			$boxLabel = $welBox.find('label'), //常用功能列表下label
    			$menuChild1 = $menu.find('.wel_menu_con_child1'), //常用功能
    			$numText = $menu.find('.wel_menu_title b'), //常用功能选中数量显示标签
    			$welOther = $('#welOtherMedule'), //其他功能
    			$otherLi = $welOther.find('li'), //其他功能下li
    			$foot = $('#footer'), //底部
    			$saveBtn = $('#setWelTrue'), //确定按钮
    			$bigBox = $('#welFnUl'), //常用功能展示区
    			$bqxx = $welOther.find('.wel-gndz-bqxx').next(),
                $dblm = $welOther.find('.wel-gndz-dblm').next(),
    			hideDom = '',
    			showBoxTemp = null;
			
			//初始化显示事件
			$ent.on('click',function(){
				$menu.show();
				$mark.show();
				
				//初始化其他模块勾选状态
                if ($('#footer-copyright').is(':visible')) {
                    $bqxx.prop('checked',true);
                } else {
                    $bqxx.prop('checked',false);
                }
                
                if ($('#footer').is(':visible')) {
                    $dblm.prop('checked',true);
                } else {
                    $dblm.prop('checked',false);
                }
                
                //个人日程
                $('.wel-gndz-grrc').next().prop('checked',$('.wel-date').is(':visible'));
                
			});
			
			//隐藏事件
			hideDom = '#welMenu .wel_menu_head i,#setWelTrue,#jsonzMark';
			$('body').on('click',hideDom,hideMenu);
			function hideMenu(){
				$menu.hide();
				$mark.hide();
			}
			
			
			//常用功能模块初始化和点击事件
			(function(){
			    $input.each(function(){
                    var $this = $(this);
                    $this.prop('checked') && $this.prev().attr('data-on',true);
                });
                
                var _checkLen = $boxLabel.find('[data-on = true]').length;
                $numText.html(_checkLen);
                
                $boxLabel.on('click',function(){
                    var $this = $(this);
                    
                    //更新状态
                    $this.find('i').attr('data-on',$this.find(':checkbox').prop('checked'));
                    _checkLen = $boxLabel.find('[data-on = true]').length;
                    $numText.html(_checkLen);
                    
                });
			})();
			
			//其他模块功能
			(function(){
			    
			    //初始化缓存数据
			    $otherLi.each(function(){
			        var $input = $(this).find('input');
			        var $img = $(this).find('i');
			        
			        $input.data('class',$img.attr('class'));
			        
			    });
			    
			    //点击栏目选择事件
			    $otherLi.on('click',function(){
			        
			        var $itemClass = $(this).find('i').attr('class');
			        
			        switch ($itemClass) {
			            case 'wel-gndz-dblm' :
			                $bqxx.prop('checked',$dblm.prop('checked'));
			                break;
			            case 'wel-gndz-bqxx' :
			                $dblm.prop('checked',true);
			        }
			        
			    })
			})();
			
			
			//保存触发事件
			$saveBtn.on('click',function(){
                
    		    if ($menuChild1.is(':visible')) {
    		        
    		        //常用功能保存
    		        showBoxTemp = $menu.find('[data-on = true]');
    		        $bigBox.children().hide();
    		        showBoxTemp.each(function(){
    		            $bigBox.find('.' + $(this).attr('class')).parent().show();
    		        });
    		        
    		        var dataVisible = $('.wel-gndz-grrc').next().prop('checked');
    		        if (dataVisible) {
    		          $('.wel-date').show();
                        tabConWidth($('.wel-backlog'));
                        welConTab.init();
    		        } else {
    		            dateOperation.closeFn();
    		        }
    		        
    		        
    		        
    		    }  else {
    		        
    		        //其他模块保存
    		        
                    if (!$bqxx.prop('checked')) {
                        $('#footer-copyright').hide();
                    } else {
                        $('#footer-copyright').show();
                    }

                    if (!$dblm.prop('checked')) {
                        $foot.hide();
                    } else {
                        $foot.show();
                        $('#footer-scan').show();
                    }
    		        
    		    }
			})
		})();
		
		
		//重写欢迎页功能设置
		(function(){
		    
		    var $ent = $('#welMenuEnt'), //侧边菜单设置按钮入口
		        $menu = $('#welMenu'), //菜单主体
		        $mark = $('#jsonzMark'), //蒙版
		        $oftenModule = $('#welSelectBox'), //常用功能模块
		        $otherModule = $('#welOtherMedule'), //其他功能模块
		        $bqxx = $otherModule.find('.wel-gndz-bqxx').next(), //版权信息多选框
		        $dblm = $otherModule.find('.wel-gndz-dblm').next(), //底部栏目
		        hideDom = '#welMenu .wel_menu_head i,#setWelTrue,#jsonzMark',//隐藏设置菜单
		        $saveBtn = $('#setWelTrue'), //保存按钮
		        $boxOften = $('#welcome-con').find('.wel-fn-ul'), //主页面常用功能
		        $date = $('#welcome-con').find('.wel-date'), //日期
		        nul = null;
		        
		    
		    //显示设置菜单和初始化勾选状态
		    $ent.on('click',function(){
		        $menu.show();
                $mark.show();
                
                //初始化勾选状态
                changeBox({
                    '#footer' : ['.wel-gndz-bqxx','.wel-gndz-dblm'],
                    '#footer-copyright' : '.wel-gndz-bqxx',
                    '#welcome-con .wel-date' : '.wel-gndz-grrc'
                })
                
                //隐藏事件
                $('body').on('click',hideDom,hideMenu);
                
		    });
		    
		    //其他模块联动选择
		    (function(){
		        
		        //版权信息联动
		        $bqxx.on('click',function(){
		           var isChecked =  $(this).prop('checked');
		           if (isChecked) {
		               $dblm.prop('checked',true);
		           }
		        });
		        
		        //底部栏目联动
		        $dblm.on('click',function(){
		            $bqxx.prop('checked',$(this).prop('checked'));
		        });
		    })();
		    
		    //保存事件触发函数
		    $saveBtn.on('click',function(){
		        
		        if ($oftenModule.is(':visible')) {
		            //常用功能保存事件
		            var $oftenCheck = $oftenModule.find(':checked');
		            
		            //常用功能反显出来
		            $boxOften.children().hide();
		            $oftenCheck.each(function(item){
		                var $this = $(this);
		                $boxOften.find('.' + $this.prev().attr('class'));
		                $boxOften.find('.' + $this.prev().attr('class'))
		                        .parent().show();
		            });
		            
		            //个人日程处理
		            if (isChecked('.wel-gndz-grrc')) {
                        dateOperation.showFn();
		            } else {
		                dateOperation.closeFn();
		            }
		            
		            
		        } else if ($otherModule.is(':visible')) {
		            //其他功能模块保存事件
		            if (!$bqxx.prop('checked')) {
                        $('#footer-copyright').hide();
                    } else {
                        $('#footer-copyright').show();
                    }

                    if (!$dblm.prop('checked')) {
                        $('#footer').hide();
                    } else {
                        $('#footer').show();
                        $('#footer-scan').show();
                    }
		        }
		    });
		    
		    
		    //初始化勾选状态函数
		    function changeBox() {
		        var arg = arguments[0],
		            i,j,k;
		        
		        for (i in arg) {
		            var isVisible = $(i).is(':visible');
	                if (arg[i].constructor === Array) {
	                    for (j = 0,k = arg[i].length;j < k;j++) {
	                       $menu.find(arg[i][j]).next().prop('checked',isVisible);
	                    }
	                } else {
	                    $menu.find(arg[i]).next().prop('checked',isVisible);
	                }
		        }
		    }
		    
		    //隐藏函数
		    function hideMenu(){
		        $menu.hide();
		        $mark.hide();
		    }
		    
		    //返回选中多选框的类
		    function isChecked(_obj) {
		        return $(_obj).next().prop('checked');
		    }
		    function geiIconClass(_obj) {
		        return $(_obj).prev().attr('class');
		    }

		    
		})();
		
		
		/*
		 * 底部导航操作
		 */
		(function(){
			var $foot = $('#footer');
			var $footerClose = $foot.find('.wei-date-close');
			
			$footerClose.on('click',function(){
				$(this).parent().hide();
				if (!$('#footer-copyright').is(':visible') && !$('#footer-scan').is(':visible')) {
				    $foot.hide();
				}
			});
		})();


		/*
		 * 拖拽事件
		 * 具体查看html\demo
		 */
		(function(){
		    try {
		        dragula([$('#welFnUl').get(0)], {
                    accepts: function () {
                        return true;
                    },
                    revertOnSpill:false,
                    removeOnSpill: false,
                    direction:'vertical'
                });
		    } catch(err) {console.warn(err)}
		})();
		
		
		
	})(jQuery);
});
