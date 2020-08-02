$(function(){
    (function($){
        "use strict";//才用严格模式

        /*  登陆页作者yangfeng
         *  设置统一删除函数
         *  argument 对象
         * 	num Boolean 是否显示两个按钮 默认两个
         * 	title String 标题内容
         *  msg String 内容
         *  mark Boolean 是否显示蒙版 默认显示
         *  opacity Number 透明度 默认 0.3
         *  close String 关闭按钮的jq选择器 默认 .jsonz_alert_close,.alert_btn,#jsonzMark
         *  callback 确定按钮的回调
         */
        $.fn.publicDel=function(object){
            var $this = $(this);//当前传来的对象
            var $body = $('body');//获取body
            var argument = arguments[0] || {};//如果不存在就给空
            var $alertCon,$alertBg,$alertTitle,$alertMsg,$trueBtn;
            var _num=typeof  argument.num=='undefined' ? true:false,
                _title=argument.title || '消息提示',
                _mark = typeof argument.mark == 'undefined' ? true : false,
                _opacity=argument.opacity || 0.3,
                _close = argument.close || '',
                _msg = argument.msg || '内容部分';


            var nAlertLen = $body.find('#jsonzAlert').length;
            var mAlertMsg = '<div id="jsonzAlert" style="z-index: 101">'+
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
            if(!nAlertLen){
                $body.append(mAlertMsg)
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
                    if (typeof argument.callback === "function") {
                        argument.callback();
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

        /*
         *鼠标移如顶部导航栏
         *才用传参的形式
         *obj1===移如的元素
         *obj2===内容的显示
         */
        function headHover(obj1,obj2,obj3,obj4){
            obj1.hover(
                function(){
                    obj2.stop(true,true).fadeIn(500);
                    obj3.stop(true,true).fadeOut(0);
                    obj4.stop(true,true).fadeOut(0);
                    obj1.parent().addClass('tzbj_bg').siblings().removeClass('tzbj_bg');
                }
            );

        };
        /*
         *定义窗口的位置变化
         *才用传参的形式
         *btn1===layout_l
         *btn2===layout_2
         *btn3===layout_3
         */
         function placeChange(btn1,btn2,btn3){
            var _window=$('.login_div');
             btn1.on('click',function(){
                 $(this).addClass('_select_on');
                 _window.addClass('left').removeClass('right');
                 _window.addClass('left').removeClass('margin');
                 $(this).siblings().removeClass('_select_on');
             });
             btn2.on('click',function(){
                 $(this).addClass('_select_on');
                 _window.addClass('margin').removeClass('left');
                 _window.addClass('margin').removeClass('right');
                 $(this).siblings().removeClass('_select_on');
             });
             btn3.on('click',function(){
                 $(this).addClass('_select_on');
                 _window.addClass('margin').removeClass('left');
                 _window.addClass('margin').removeClass('margin');
                 $(this).siblings().removeClass('_select_on');
             });

         };

        /*
         *调用hover事件函数
         */
        (function(){
            var _btnHover=$('.tzbj');
            var _main=$('.buju_1');
            var _zb=$('.zb_1');
            var _zbbb=$('.zbbb');
            headHover(_btnHover,_main,_zb,$('.moduleHandle'));
            headHover(_zbbb,_zb,_main,$('.moduleHandle'));
            headHover($('.module_li'),$('.moduleHandle'),_main,_zb)
        })();

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
            };
            //图片显示到dom上
            function showUploadImg(showbox,uploadFile){
                if (uploadFile.get(0).files && uploadFile.get(0).files[0]){

                    var reader = new FileReader();
                    reader.onload = function(evt){
                        showbox.show().find('.uploadImg').remove().end()
                            .prepend('<img src="' + evt.target.result + '" class="uploadImg"  />');
                        $('.uploadImg').parent('li').css('background','none');
                        $('.uploadImg').parents('.set_theme_item1').css('background','none');

                    };
                    reader.readAsDataURL(uploadFile.get(0).files[0]);
                }else{
                    showbox.show().find('.uploadImg').remove().end()
                        .prepend('<div class="img" name="upload" id="'+$("#whichbox").val()+'" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + uploadFile.get(0).value + '\'"></div>');
                    $('.uploadImg').parent('li').css('background','none');
                    $('.uploadImg').parents('.set_theme_item1').css('background','none');
                    $('.uploadImg').parents('.set_theme_item1').addClass('_select');
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
         *登录窗口的位置变化函数
         */
        (function(){
            var _btn1=$('.layout_l');
            var _btn2=$('.layout_2');
            var _btn3=$('.layout_3');
            placeChange(_btn1,_btn2,_btn3);
        })();

        /*
         *定义删除函数和上传图片函数
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
                $(this).find('[class ^=picload-]').stop(true,true).animate({'opacity':'1'});
            },function(){
                $(this).find('[class ^=picload-]').stop(true,true).animate({'opacity':'0'});
            });

            //删除事件
            $del.publicDel({
                callback : function(){
                    $this.hide();
                    $this.addClass("del");

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
       /* (function(){
            var $pic = $('.picload');
            $pic.each(function(){
                $(this).upLoadPic();
            });
        })();*/

        //调用上传函数
        (function(){
            var $pic1 = $('.select_li_1');
            $pic1.each(function(){
                $(this).upLoadPic();
            });
            var $pic2 = $('.select_li_2');
            $pic2.each(function(){
                $(this).upLoadPic();
            });
            var $pic3 = $('.select_li_3');
            $pic3.each(function(){
                $(this).upLoadPic();
            });
            var $pic4 = $('.select_li_4');
            $pic4.each(function(){
                $(this).upLoadPic();
            });

            appendDemo1($('.set_theme_item1'),$('.select_li_1'),$('.set_theme_item2'));
            appendDemo2($('.set_theme_item2'),$('.select_li_2'),$('.set_theme_item3'));
            appendDemo3($('.set_theme_item3'),$('.select_li_3'),$('.set_theme_item4'));
            appendDemo4($('.set_theme_item4'),$('.select_li_4'),$('.set_theme_item5'));
        })();


        /*
         *定义动态生产div追加到ul里面去
         *才用传参的形式
         *theme 上传按钮
         *logoContent//对应的图片显示出来
         *
         */
        function appendDemo1(theme,logoContent1,logoContent2){

            theme.on('click',function(){
                logoContent1.children('.picload-re').trigger('click');
                $('.uploadSave').click(function(){
                    theme.parent().remove();
                    logoContent2.parent().removeClass('hide');
                    logoContent1.removeClass('hide');
                    $('#setTheme').prepend($('.icon_select').children('.select_li_1'));
                    $('#setTheme').append($('.icon_select').children('.icon_select_li1'));
                })
            })
        };
        function appendDemo2(theme,logoContent1,logoContent2){
            theme.on('click',function(){
                logoContent1.children('.picload-re').trigger('click');
                $('.uploadSave').click(function(){
                    theme.parent().remove();
                    logoContent2.parent().removeClass('hide');
                    logoContent1.removeClass('hide');
                    $('#setTheme').prepend($('.icon_select').children('.select_li_2'));
                    $('#setTheme').append($('.icon_select').children('.icon_select_li2'));
                })
            })
        };
        function appendDemo3(theme,logoContent1,logoContent2){
            theme.on('click',function(){
                logoContent1.children('.picload-re').trigger('click');
                $('.uploadSave').click(function(){
                    theme.parent().remove();
                    logoContent2.parent().removeClass('hide');
                    logoContent1.removeClass('hide');
                    $('#setTheme').prepend($('.icon_select').children('.select_li_3'));
                    $('#setTheme').append($('.icon_select').children('.icon_select_li3'));
                })
            })
        };
        function appendDemo4(theme,logoContent1,logoContent2){
            theme.on('click',function(){
                logoContent1.children('.picload-re').trigger('click');
                $('.uploadSave').click(function(){
                    theme.parent().remove();
                    logoContent2.parent().removeClass('hide');
                    logoContent1.removeClass('hide');
                    $('#setTheme').prepend($('.icon_select').children('.select_li_4'));

                })
            })
        };
        /*
         *定义左边上传logo函数
         *才用传参的形式
         *btn1 点击当前的对象
         *btn2 获取的图片
         *fixed蒙版
         *content 显示图标内容 _span.click(function(event){event.stopPropagation();})
         */

        (function(){
            var _td1=$( '.td2');
            var _td2=$('#td2');
            var popup=$('.new_login_popup');
            var fixed=$('.layer_fixed_1');

            _td1.on('click',function(e){
                popup.removeClass('hide');
                fixed.removeClass('hide');
                popup.find('img').addClass('hide').parent().addClass('hide');
                $('#uoloadFile').click(function(){
                    $('#preview').removeClass('hide');
                });
                e.stopPropagation();

            });
            var popup_btn1=popup.find('button.popup_btn1');
            var popup_btn2=popup.find('button.popup_btn2');
            //点击确定按钮上传图片
            popup_btn1.on('click',function(e){
                var src_=popup.find('img').attr('src');
                if(src_==""){
                    var src_=_td2.find('img').eq(0).attr('src');
                    _td2.find('img').attr('src',src_);
                }else{
                    _td2.find('img').attr('src',src_);
                }
                debugger
                popup.find('img').addClass('hide').parent().addClass('hide');
                popup.find('input').val('');
                popup.addClass('hide');
                fixed.addClass('hide');
                e.stopPropagation();
            });
            //点击取消按钮
            popup_btn2.on('click',function(e){
                popup.addClass('hide');
                fixed.addClass('hide')
                e.stopPropagation();
            });
            var _i=popup.find('i');
            _i.click(function(){
                popup_btn2.click();
            })
        })();

        /*
         *定义右边边上传logo函数
         *才用传参的形式
         *btn1 点击当前的对象
         *btn2 获取的图片
         *fixed蒙版
         *content 显示图标内容 _span.click(function(event){event.stopPropagation();})
         */

        (function(){
            var _td1=$( '.td4');
            var _td3=$('.td3');
            var popup=$('.right_login_popup');
            var fixed=$('.layer_fixed_1');
            _td1.on('click',function(e){
                popup.removeClass('hide');
                fixed.removeClass('hide');
                popup.find('img').addClass('hide').parent().addClass('hide');
                $('#uoloadFile2').click(function(){
                    $('#preview1').removeClass('hide');
                });
                e.stopPropagation();

            });
            var popup_btn1=popup.find('button.popup_btn1');
            var popup_btn2=popup.find('button.popup_btn2');
            //点击确定按钮上传图片
            popup_btn1.on('click',function(e){
                var src_=popup.find('img').attr('src');
                if(src_==""){
                    var src_=_td3.find('img').eq(0).attr('src');
                    _td3.find('img').attr('src',src_);
                }else{
                    _td3.find('img').attr('src',src_);
                }

                popup.find('img').addClass('hide').parent().addClass('hide');
                popup.find('input').val('');
                popup.addClass('hide');
                fixed.addClass('hide');
                e.stopPropagation();
            });
            //点击取消按钮
            popup_btn2.on('click',function(e){
                popup.addClass('hide');
                fixed.addClass('hide')
                e.stopPropagation();
            });
            var _i=popup.find('i');
            _i.click(function(){
                popup_btn2.click();
            })
        })();

        /*
         *定义选择图片换背景函数
         *才用传参的形式
         *_icon 每个li
         *_not 默认的li
         *_itemn 列表显示
         *
         */
         (function(){
             var _icon=$('.l_other');
             var _not=$('#setTheme').find('div._not');
             var _itemn=$('.select_icon_way').find('li');
             _icon.each(function(i){

                 var _this=$(this);
                 _this.click(function(){
                     _this.toggleClass('on');
                     if(_icon.hasClass('on')){
                         _itemn.addClass('visibility');
                         _itemn.eq(i).toggleClass('ot');
                         var _num=$(_icon).parents().find('.l_other.on').length;
                         if(_num>=2){
                             _itemn.removeClass('visibility');
                         }
                     }else{
                         _itemn.eq(i).removeClass('ot');
                     }
                     var _emNum=$(this).parents("#setThemeFocus").find(".l_other.on").length;
                     if(_emNum>3){
                         _item.eq(i).removeClass('on');
                         $("#setTheme").slideUp("show");
                     }
                     if($(this).hasClass('on')){
                         if($('.dz_vtn').hasClass('layer_hide')){
                             $('.pbd_login_warp').css('z-index','0');
                         }
                         _not.removeClass('on');
                         var dataSrc = $(this).attr("data-src");//选中对应属性

                         setTheme(dataSrc);//调用方法
                     }else if($('#setThemeFocus').find('.l_other').hasClass('on')){
                         var _emNu1=$(this).parents("#setThemeFocus").find(".l_other.on");
                         var dataSrc = _emNu1.attr("data-src");//选中对应属性
                         setTheme(dataSrc);//调用方法
                     }else{
                         _not.addClass('on');
                         var da = _not.attr("data-src");//选中对应属性
                         setTheme(da);//调用方法
                         $('.pbd_login_warp').css('z-index','0');
                     }
                 });
                 _itemn.on('click',function(){
                     if($(this).eq(i).hasClass('ot')){
                         var _it = $(this).attr("data-src");//选中对应属性
                         setTheme(_it);
                         $(this).addClass('li_select').siblings().removeClass('li_select');
                     }
                 });
             });
         })();

        //将选择得图片加到对应位置
        function setTheme(dataSrc){
            var bgUrl="url(images/login/"+dataSrc+")";
            $("#pbd_login").css({"background-image":bgUrl});
        }

        /*
         *定义轮播图标函数
         *
         *preBtn 点击上一张
         *nextBtn点击下一直
         *_itemn 列表显示
         *cs位置的变动
         *len li 的个数
         *liWidth 整个ul的宽
         */
        (function(){
            var preBtn=$('.preBtn');
            var nextBtn=$('.nextBtn');
            var cs = 0;
            var liWidth = $('#setTheme li').outerWidth(true);

            var len = $('#setTheme li').length;
            var preAllow = true;
            var nextAllow = true;
            //点击上一张
            preBtn.on('click',function(){
                if(preAllow){
                    preAllow=false;
                    cs=cs-liWidth;
                    $('#setTheme').css('left',cs);//向左移动cs位置

                        $('#setTheme li:last').prependTo('#setTheme');

                    $('#setTheme').animate({
                        left:cs+liWidth
                    },
                     500,
                     function(){
                         cs=parseInt($('#setTheme').css('left'),10);//位置变成0 转为整数
                         preAllow = true;
                     }
                    );
                }
            });
            //点击下一张
            nextBtn.on('click',function(){
                if(nextAllow){
                    nextAllow=false;
                    $('#setTheme').animate({
                        left:cs-liWidth
                    },
                     500,
                     function(){
                         $('#setTheme li:first:not(hide)').appendTo('#setTheme')
                         cs = parseInt($('#setTheme').css('left'), 10);
                         cs=cs+liWidth;
                         $('#setTheme').css('left', cs);
                         nextAllow=true;
                     }
                    )
                }
            })
        })();

        /*
         *定义鼠标移如移除模块
         *采用传参的形式
         *_content 移入模块
         *_closeBtn 移除按钮
         *layer_fixed_1 蒙版
         */
         /*function hoverContent(main,fixed,main_btn){
             main.on({
                 mouseenter:function(e){
                     if(main.find('i').hasClass('tit')){
                         main.css('color','#333');
                     }
                     main.css({'z-index':'100','background':'#FFF'});
                     fixed.removeClass('hide');
                     $('.main_3').addClass('hide');
                     main_btn.removeClass('hide');
                     e.stopPropagation();
                     $('#footer').css({'background':'#109cd9','z-index':''});
                 },
                 mouseleave:function(e){
                     if(main.find('i').hasClass('tit')){
                         main.css('color','#333');
                     }
                     $('.main_3').removeClass('hide');
                     main.css({'z-index':'','background':'none'});
                     main_btn.addClass('hide');
                     e.stopPropagation();
                     $('#footer').css({'background':'#fff','z-index':'100'});
                 }
             })
         };

        (function(){
            hoverContent($('#footer-copyright'),$('.layer_fixed_1'),$('.main_2'));
            $('#footer').on({
                mouseenter:function(){
                    $(this).css({'z-index':'100','background':'#FFF'});
                    $('#footer-copyright').css('color','#333');
                    $('.main_3').removeClass('hide');
                    $('.layer_fixed_1').removeClass('hide');
                },
                mouseleave:function(){
                    $(this).css({'z-index':'','background':'#109cd9'});
                    $('.layer_fixed_1').addClass('hide');
                    $('.main_3').addClass('hide');
                    $('#footer-copyright').css('color','#fff');
                }
            });
            $('.main_1,.main_2,.main_3').on('click',function(){
                $(this).parent().slideUp(800);
            });
        })();
        (function(){
            hoverContent($('.footer-copyright'),$('.layer_fixed_1'),$('.main_2'));
            $('.main').on({
                mouseenter:function(){
                    $(this).css({'z-index':'100','background':'#FFF'});
                    $('.layer_fixed_1').removeClass('hide');
                    $('.main .main_1').removeClass('hide');
                },
                mouseleave:function(){
                    $(this).css({'background':'none','z-index':''});
                    $('.main .main_1').addClass('hide');
                    $('.layer_fixed_1').addClass('hide');

                }
            });
        })();*/

        /*
         *定义鼠标移如logo显示虚线
         *采用传参的形式
         *_content 移入模块
         *_closeBtn 移除按钮
         *
         */
         /*function logoHover(_icon,showBtn){
             _icon.on({
                mouseenter:function(){
                    _icon.css('border','1px dashed #0066b3');
                    showBtn.removeClass('hide');
                },
                mouseleave:function(){
                    _icon.css('border','none');
                    showBtn.addClass('hide');
                }
             });
         };
        (function(){
            logoHover($('#td1'),$('.td2>img'))
        })()*/

    })(jQuery);
});

    //========================上传图片js start
    //图片预览
    function preview(file,obj){
        //路径地址
        var _val = $(file).val();
        $(file).prev().prev().val(_val);
        //图片预览的容器
        var prevDiv =$(obj);
        if(obj=="#preview6"){
            $('#preview5').addClass('hide');
            $('#preview6,._select_bg').removeClass('hide');
        }
        if(obj=="#preview5"){
            $('._select_bg').removeClass('hide');
        }
        //判断是否有路径非IE情况下
        if (file.files && file.files[0]){
            var reader = new FileReader();
            reader.onload = function(evt){
                prevDiv.html('<img src="' + evt.target.result + '" class="img" width="" height=""/>');};
            reader.readAsDataURL(file.files[0]);
            if($('.set_theme_item1').hasClass('_init')){
                if($('.btn_set_logo_bg').hasClass('layer_hide')){
                    $('.uploadImg').removeClass('hide');
                    $('#setTheme').css('z-index','');
                    $('.layer_fixed').removeClass('hide');
                }else{
                    $('#setTheme').css('z-index','12');
                    $('.pbd_login_warp').addClass('_sItem');
                    $('.layer_fixed').removeClass('hide');
                }

            }
        }else{//IE情况下
            prevDiv.html('<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>');
        }
    }
    //图片显示
    function showUploadImg(showbox,uploadFile){
        var hig = '100%';
        var width = '100%';
        if (uploadFile.get(0).files && uploadFile.get(0).files[0]){
            var reader = new FileReader();
            reader.onload = function(evt){
                showbox.html('<img src="' + evt.target.result + '" class="img"  /><input type="button" value="" name="upload" class="m-small-btn"></div>');
                showbox.find('.img').width(width).height(hig);
            };
            reader.readAsDataURL(uploadFile.get(0).files[0]);
        }else{
            showbox.html('<div class="img" name="upload" id="'+$("#whichbox").val()+'" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + uploadFile.get(0).value + '\'"></div>');
            showbox.find('.img').height(hig).width(width);
        }
    }
    //========================上传图片js end