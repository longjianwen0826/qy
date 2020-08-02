
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

//=================传参数 定义高亮和隐藏start
$(function(){

    $("#sd_has_nav").click(function(){
        $('#content_icon').toggleClass('_div').removeClass('iv');
        if($('#content_icon').hasClass('_div')){

            if(!$('#content_icon').hasClass('layer_hide')){
                $('.btn_set_logo_bg').css('display','none');
            }else{


                $('.btn_set_logo_bg').css('display','block');
            }
        }else{

            $('.top_conceal').slideUp(500);
            $('#content_icon').toggleClass('_div');
            if(!$('#content_icon').hasClass('layer_hide')) {
                $('.btn_set_logo_bg,.icon_16_edit').toggle();
            }else{
                $('.btn_set_logo_bg').css('display','block');
            }
        }
    });
    $("#item_has_nav").click(function(){
        $('#content_icon').toggleClass('iv').removeClass('_div');
        if($('#content_icon').hasClass('iv')){
            if(!$('#content_icon').hasClass('layer_hide')){
                $('.btn_set_logo_bg').css('display','none');
            }else{
                $('.btn_set_logo_bg').css('display','block');
            }
        }else{
            $('.top_conceal').slideUp(500);
            $('#content_icon').toggleClass('iv');
            if(!$('#content_icon').hasClass('layer_hide')) {
                $('.btn_set_logo_bg,.icon_16_edit').toggle();

            }else{
                $('.btn_set_logo_bg').css('display','block');
            }
        }
    });
    changeOver($('.dz_vtn'),$('#content_icon'),$('.login_between'),$('.login_dz_logo'),$('.btn_set_logo_bg'),$('.icon_16_edit'));
    $('.new_login_popup').find('i').click(function(){
        if($('#content_icon').hasClass('layer_hide')){
            _hide();
        }else{
            _show();
        }
    });
    $('.right_login_popup').find('i').click(function(){
        if($('#content_icon').hasClass('layer_hide')){
            _hide();
            $('.icon_16_edit').css('display','inline-block');
        }else{
            _show();
        }
    });
    $('.content_login_popup').find('i').click(function(){
        if($('#content_icon').hasClass('layer_hide')){
            _hide();
            $('.icon_16_edit').css('display','inline-block');
        }else{
            _show();
            $('#content_icon').css('display','block');
        }
    });
    $('.popup_btn1,.popup_btn2').click(function(){
        if($('#content_icon').hasClass('layer_hide')){
            _hide();
            $('.icon_16_edit').css('display','inline-block');
        }else{
            _show();
            $('#content_icon').css('display','block');
        }
    });
    function _hide(){
        $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
    }
    function _block(){
        $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg,.icon_16_edit').css('display','none');
    }
    function _show(){
        $('.dz_vtn,.login_between,#content_icon,.login_dz_logo,.btn_set_logo_bg').toggle();

    }
    $('.login_between_a4,.login_between_a2,.login_between_a3').click(function(){
        _block();
    });
    $('.panel-tool-close,.pbd_btn_standard').click(function(){
        _hide();
        $('.icon_16_edit').css('display','inline-block');
    })
    function changeOver(obj1,obj2,obj3,obj4,obj5,obj6){
        if($('#content_icon').hasClass('layer_hide')){
            $(obj1,obj2,obj3,obj4,obj5).css('z-index','');
            return false;
        }else{
            obj1.on('click',function(){
               /* $('#setTheme,#setLoginBar').slideUp(800);*/
                $('.panel').addClass('hide');
                $('.top_conceal,.login_conceal').css('display','none');
                if($('#content_icon').hasClass('layer_hide')){
                    $('#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
                    $('.icon_16_edit').css('display','inline-block')
                }else{
                    $('#phd_login').find('img').eq(0).css('z-index','0');
                    obj2.css('display','none');obj3.toggle();obj4.toggle();obj5.css('display','none');obj6.css('display','none');
                    $('.pbd_login_warp').removeClass('_sItem')
                }
            });
            obj2.on('click',function(){
                $('.panel').addClass('hide');
                if($('#content_icon').hasClass('layer_hide')){
                    $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
                }else{
                   obj5.toggle();
                }
            });
            obj4.on('click',function(){
                $('.panel').addClass('hide');
                $('.top_conceal,.login_conceal').css('display','none');
                if($('#content_icon').hasClass('layer_hide')){
                    $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
                    /*$('#setTheme,#setLoginBar').slideUp(800);*/
                }else{
                    obj2.css('display','none');obj1.toggle();obj3.toggle();obj6.css('display','none');
                    $('#phd_login').find('img').eq(1).css('z-index','0');
                    $('.pbd_login_warp').removeClass('_sItem')
                   /* $('#setTheme').slideUp(800);*/
                    obj5.css('display','none');
                }
            });
            obj5.on('click',function(){
                $('.panel').addClass('hide')
                if($('#content_icon').hasClass('layer_hide')){

                    $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
                }else{

                    obj6.toggle();obj2.toggle()
                }
            });
            obj6.on('click',function(){
                $('.panel').addClass('hide');
               /* $('#setTheme,#setLoginBar').slideUp(800);*/
                if($('#content_icon').hasClass('layer_hide')){
                    $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
                }else{
                    obj1.toggle();obj5.toggle();obj3.toggle();obj4.toggle();obj2.toggle();
                }
            });

        }
    }
})

//=================传参数 定义高亮和隐藏end
//==========================添加步骤和蒙版 start
$(function(){
    $('.set_theme_item1').click(function(){
        $('#setTheme').css('z-index','');
        $('.set_theme_item1').addClass('_init');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed').removeClass('hide').children('span').addClass('hide');
        }else{
            $('.layer_fixed').removeClass('hide');
            $('.pbd_login_warp').removeClass("_sItem");
        }
    })
    $(".layer_fixed_close").click(function(){
        //关闭蒙版===============
        _login_mb();
    });
    function _login_mb(){
        $(".layer_fixed,.right_login_sure,.new_login_popup,.right_login_popup,.this_compter_img,._select_bg").addClass("hide");
        $('#setLoginBar').addClass("setLoginBar_back");
        $('#setLoginBar').removeClass("setLoginBar_FFF");
        var _hideLi=$('.right_btns').find('.has_nav').eq(0);
        _hideLi.addClass('layer_hide');
        $('.logo_ylxx').find('i.icon_16_edit').css('background',$(".icon_16_edit").attr("style","background:url('/images/login/icon_16_edit.png')np-repeat 3px -1px;"));
        $('#content_icon,.dz_vtn,.btn_set_logo_bg,.login_dz_logo,.popup_btn1,.popup_btn2,#preview2,.btn_2,.right_login_popup,._select_bg').addClass('layer_hide');
        $('.right_uploading').find('i').addClass('layer_hide');
        var _hideLi1=$('.right_btns').find('.has_nav').eq(1);
        _hideLi1.addClass('layer_hide');
        $('#content_icon,.btn_set_logo_bg,.login_between').css('display','block');
        $("#content_icon,.pbd_login_warp,.login_between,.btn_set_logo_bg").css('z-index',"0");
        $('.login_dz_logo').css({
            'z-index':'0',
            'background':$(".login_dz_logo").attr("style","background:url('images/login/tj.png') no-repeat;"),
            'background-size':'100% 100%'
        });
        $('.login_area').removeClass('_css');
        var first_i=$('.logo_ylxx').find('i').eq(0);
        first_i.removeClass('_ter');
        first_i.css({'z-index':'','border':'none'});
        $('.dz_vtn').css({
            'z-index':'0',
            'background':$(".dz_vtn").attr("style","background:url('images/login/dz.png') no-repeat;"),
            'background-size':'100% 100%'
        });
        $('.login_between').css('background','url("images/login/lanse.png") no-repeat');
        $('#setLoginBar,.top_conceal').slideUp(500);
      /*  $('#setTheme,.login_conceal').slideUp(800);*/
    }
//=================添加步骤和蒙版 start
    _hide();
    function _hide(){
        $(".layer_fixed").css("z-index","10").removeClass('hide');
        var _content_icon=$('#content_icon');//定制窗口按钮
        var _dz_vtn=$('.dz_vtn');//定制左边logo按钮
        var _login_dz_logo=$('.login_dz_logo');//定制右边logo按钮
        var _btn_set_logo_bg=$('.btn_set_logo_bg');//定制换主题按钮
        _content_icon.css('z-index','20');
        _dz_vtn.css('z-index','20');
        _login_dz_logo.css({'z-index':'18'});
        _btn_set_logo_bg.css({'z-index':'50'});
        _btn_set_logo_bg.css('z-index','20');
        _content_icon.on('click',function(){
            //$('#setLoginBar').css({'z-index':20,'background':'#FFF'});
            $('#setLoginBar').addClass("setLoginBar_FFF");
            $('#setLoginBar').removeClass("setLoginBar_back");
        });
        var _right_btns=$('.right_btns');
        var has_nav=_right_btns.find('.has_nav').eq(0);
        var _id=_right_btns.find('#sd_has_nav');
        _id.click(function(){
            $(".layer_fixed").css("z-index","10").removeClass('hide');
            $('.login_area').addClass('_css');
            if($(this).hasClass('on')){
                $('#setLoginBar').slideUp(500);
                $('.login_area').removeClass('_css');
            }
        });
        var _item_has_nav=_right_btns.find('#item_has_nav');
        _item_has_nav.click(function(){
            $(".layer_fixed").css("z-index","10").removeClass('hide');
            $('.login_area').addClass('_css');
            if($(this).hasClass('on')){
                $('#setLoginBar').slideUp(500);
                $('.login_area').removeClass('_css');
            }
        })
    }
});

//=================================添加步骤和蒙版 send
function _zhidex(){
    $('#content_icon','.dz_vtn','.btn_set_logo_bg').css('z-index','20');
    $('.dz_vtn,.login_dz_logo').css('display','block');
    $('.login_dz_logo').css('z-index','18');
}

//=======================关闭三个弹出层
$(function(){
    $('.login_between').css('z-index','11');
    var new_btn2=$('.new_login_popup').find('.popup_btn2');
    var new_i=$('.new_login_popup').find('i');
    var right_btn2=$('.right_login_popup').find('.popup_btn2');
    var right_i=$('.right_login_popup').find('i');
    var content_btn2=$('.content_login_popup').find('.popup_btn2');
    var content_i=$('.content_login_popup').find('i');
    var _in=$('.layer_fixed');
    var _head=$('#setLoginBar');

//==================调用关闭内容框js start
    function _empty(){
        var content_login_popup=$('.content_login_popup');
        var new_login_popup=$('.new_login_popup');
        var right_login_popup=$('.right_login_popup');
        content_login_popup.find('img').addClass('hide').parent().addClass('hide');
        content_login_popup.find('input').val('');
        new_login_popup.find('img').addClass('hide').parent().addClass('hide');
        new_login_popup.find('input').val('');
        right_login_popup.find('img').addClass('hide').parent().addClass('hide');
        right_login_popup.find('input').val('');
    }
//==================调用关闭内容框公用方法 js end

//==================调用关闭logo公用方法 js end
    function closeIcon(_id,content){
        if(_id.hasClass('layer_hide')){
            _empty();
            _in.addClass('hide');
            _in.children('span').addClass('hide');
            content.addClass('hide');
        }else{
            _empty();
            _zhidex();
            $('#phd_login').find('img').eq(1).css({'z-index':0,'background':'none'});
            _in.children('span').removeClass('hide');
            _in.removeClass('hide').css('z-index','10');
            content.addClass('hide');
        }
    };
//===================关闭左边logo框 start
    new_btn2.on('click',function(){
        closeIcon($(this),$('.new_login_popup'));
    });
    new_i.click(function(){
        closeIcon($(this),$('.new_login_popup'));
    });
//===================关闭左边logo框 end
//===================关闭右边logo框 start
    right_btn2.on('click',function(){
        closeIcon($(this),$('.right_login_popup'));
    });
    right_i.click(function(){
        closeIcon($(this),$('.right_login_popup'));
    });
//===================关闭右边logo框 end

//===================关闭内容logo框 start
    content_btn2.click(function(){
        $('.top_conceal').slideUp(500);
        var _imgs=$('#preview2').find('img').attr('src');
        if(_imgs==""){
            if($('.login_area').width()==445){
                $('.login_area').removeClass('_css');
            }else{
                $('.right_content_logo').css('background',$('.right_content_logo').attr('style',"background:url('images/login/logo.png')no-repeat"));
                $('.login_area').removeClass('_css');
            }
        }
        if($(this).hasClass('layer_hide')){
            _head.slideUp(500);
            _empty();
            _in.addClass('hide');
            _in.children('span').addClass('hide');
            $(this).parents('.content_login_popup').addClass('hide');
        }else{
            _zhidex();
            _empty();
            _head.slideUp(500);
            $('.login_area').removeClass('_css');
            _in.children('span').removeClass('hide');
            _in.removeClass('hide').css('z-index','10');
            $(this).parents('.content_login_popup').addClass('hide');
        }
    });
    content_i.click(function(){
        $('.top_conceal').slideUp(500);
        var _imgs=$('#preview2').find('img').attr('src');
        if(_imgs==""){
            if($('.login_area').width()==445){
                $('.login_area').removeClass('_css');
            }else{
                $('.right_content_logo').css('background',$('.right_content_logo').attr('style',"background:url('images/login/logo.png')no-repeat"));
                $('.login_area').removeClass('_css');
            }
        }
        if($(this).hasClass('layer_hide')){
            _head.slideUp(500);
            _empty();
            _in.addClass('hide');
            _in.children('span').addClass('hide');
            $(this).parents('.content_login_popup').addClass('hide');
        }else{
            _zhidex();
            _empty();
            _head.slideUp(500);
            $('.login_area').removeClass('_css');
            _in.children('span').removeClass('hide');
            _in.removeClass('hide').css('z-index','10');
            $(this).parents('.content_login_popup').addClass('hide');
        }
    });
//=====================关闭内容logo框end
});
//========================加载进来
$(function(){
    $("#last_icon").click(function(){
        if($('.dz_vtn').hasClass('layer_hide')){
            $('.layer_fixed').removeClass('hide');
            $('.layer_fixed').children('span').addClass('hide');
        }
        $('#setTheme').css('z-index','0');
    });

    //弹出选择图片大图
    $('._select_bg_span1').click(function(){
        $(this).parent().addClass('hide');
        $('#setTheme').slideUp(800);
        $('.pbd_login_warp').removeClass('_sItem');
        $('.login_conceal').css('display','none');
        if($('.uploadImg').hasClass('sel')){
            $('.set_theme_item1,#preview6').addClass('hide');
            $('#preview5,.uploadImg').removeClass('hide');
        }else{
            $('.set_theme_item1').removeClass('hide');
            $('#preview5,.uploadImg').addClass('hide');
        }
        if($('._select_bg').hasClass('layer_hide')){
            $('.layer_fixed').addClass('hide');
        }else{
            $('.layer_fixed').removeClass('hide');
        }
    });
    $('#uoloadFile5').click(function(){
        $('.uploadImg').addClass('sel');
    })
    $('._select_bg_span2').click(function(){
        $(this).parent().addClass('hide');
        if($('.uploadImg').hasClass('sel')){
            $('.set_theme_item1,#preview5').addClass('hide');
            $('.uploadImg,#preview6').removeClass('hide');
        }else{
            $('.set_theme_item1').addClass('hide');
            $('.uploadImg').removeClass('hide');
        }
        if($('._select_bg').hasClass('layer_hide')){
            $('.layer_fixed').addClass('hide');
        }else{
            $('.layer_fixed').removeClass('hide');
            $('#setTheme').css('z-index','12');
        }
    })

});
//======================显示相册start
$(function(){
    //退出弹窗=====================start

    $('.login_between_a2').on('click',function(){
        $('.layer_fixed_1').removeClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').children('span').addClass('hide');
        }
        $('.panel').find('div.panel-title').html('保存设置');
        $('#sure_btn1').addClass('hide');
        $('#sure_btn2').addClass('hide');
        $('#sure_btn').removeClass('hide');
        $('.panel').removeClass('hide');
        $('.feedback-infor').find('p').eq(0).html('');
        $('.feedback-infor').find('p').eq(1).html('');
        $('.feedback-infor').find('p').eq(0).html("尊敬的用户，您确认要保存设置吗？").css('line-height','25px');
        $('.feedback-infor').find('p').eq(1).html("保存成功后，请退出重新登录查看设置效果。").css('line-height','25px');
    });
    $('.login_between_a3').on('click',function(){
        $('.layer_fixed_1').removeClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').children('span').addClass('hide');
        }
        $('#sure_btn').addClass('hide');
        $('#sure_btn2').removeClass('hide');
        $('#sure_btn1').addClass('hide');
        $('.panel').removeClass('hide');
        $('.panel').find('div.panel-title').html('取消设置');
        $('.feedback-infor').find('p').eq(0).html('');
        $('.feedback-infor').find('p').eq(1).html('');
        $('.feedback-infor').find('p').eq(0).html("尊敬的用户，您确认要取消设置吗？").css('line-height','50px');

    });
    $('.login_between_a4').on('click',function(){
        $('.layer_fixed_1').removeClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').children('span').addClass('hide');
        }
        $('.panel').removeClass('hide');
        $('#sure_btn1').removeClass('hide');
        $('#sure_btn').addClass('hide');
        $('#sure_btn2').addClass('hide');
        $('.panel').find('div.panel-title').html('恢复默认');
        $('.feedback-infor').find('p').eq(0).html('');
        $('.feedback-infor').find('p').eq(1).html('');
        $('.feedback-infor').find('p').eq(0).html("尊敬的用户，您确认要恢复默认吗？").css('line-height','50px');

    });
    $('.panel-tool-close,.pbd_btn_standard').click(function(){
        $('.feedback-infor').find('p').empty();
    })
    $('.panel-tool-close,.pbd_btn_standard').click(function(){
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').addClass('hide');
            $(this).parents('.panel').addClass('hide');
        }else{
            $(this).parents('.panel').addClass('hide');
        }
    })
    //退出弹窗=====================end
    $('.popup_btn3').click(function(){
        $(this).parents('.right_login_sure').addClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').addClass('hide');
        }else{
            $('.layer_fixed_1').removeClass('hide');
        }
    });
    $('.right_login_sure').find('i').click(function(){
        $(this).parents('.right_login_sure').addClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.layer_fixed_1').addClass('hide');
        }else{
            $('.layer_fixed_1').removeClass('hide');
        }
    });
    var _this=$('.btn_set_logo_bg');
    _this.click(function(){
        $('#setTheme').slideToggle(800).css('z-index','12');
        if(_this.hasClass("layer_hide")){
            $('.login_conceal').slideToggle(800);
            $('.pbd_login_warp').css('z-index','0');
        }else{
            $('.login_conceal').slideToggle(800).css('z-index','20');
            $('.right_login_popup').addClass('hide');
            $('#phd_login').find('img').eq(1).css({
                'z-index':0,
                'background':'none'
            });
            $('.new_login_popup').addClass('hide');
            $('.pbd_login_warp').toggleClass('_sItem');

            $('.login_area').removeClass('_css');
        }
        $('#setLoginBar,.top_conceal').slideUp(500);
        $('.select_icon_way').css('z-index','12');
        $("html,body").animate({scrollTop:0},50);
       
    });
    $(function(){
// ==========================选择主题start
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
    });
// ==========================选择主题end

//================将选择得图片加到对应位置
    function setTheme(dataSrc){
        var bgUrl="url(images/login/"+dataSrc+")";
        $("#pbd_login").css({"background-image":bgUrl});
    }
//=================定制左边广告logo js start
    $('.dz_vtn').click(function(){
        var _new_login_popup=$('.new_login_popup');
        _new_login_popup.find('img').addClass('hide').parent().addClass('hide');
        _new_login_popup.toggleClass('hide').css('z-index','100');//弹出层显示
        if($(this).hasClass('layer_hide')){
            $('.layer_fixed').removeClass('hide').children('span').addClass('hide');
            $('#setTheme').css('z-index','0').removeClass('show');
            $('#setLoginBar').slideUp(500);
            $('#phd_login').find('img').eq(1).css({
                'z-index':'0',
                'background':'none'
            })
        }else{
            $('#phd_login').find('img').eq(1).css({
                'z-index':'12',
                'background':'#FFF'
            });
            $('#setLoginBar').slideUp('500');
            $('#setTheme').removeClass('show');
            $('.pbd_login_warp').css('z-index','');
            $('.right_login_popup').addClass('hide');
            $('.login_area').removeClass('_css');
        }
        $('#uoloadFile').click(function(){
            $('#preview').removeClass('hide');
        });
        var popup_btn1=_new_login_popup.find('button.popup_btn1');
        var popup_btn2=_new_login_popup.find('button.popup_btn2');
        var i=_new_login_popup.find('i');
        popup_btn2.click(function(){
            $('.dz_vtn').css('display','block');
        });
        i.click(function(){
            $('.dz_vtn').css('display','block');
        });
        var popup_btn1=_new_login_popup.find('button.popup_btn1');
        popup_btn1.on('click',function(){
            $('.dz_vtn').css('display','block');
            var src_=_new_login_popup.find('img').attr('src');

            $('#phd_login').find('img').eq(1).attr('src',src_);
            _new_login_popup.find('img').addClass('hide').parent().addClass('hide');
            _new_login_popup.find('input').val('');
            _new_login_popup.addClass('hide');
            if($('.popup_btn1').hasClass('layer_hide')){
                $('.layer_fixed').addClass('hide');
                if(src_==""){
                    var src_=$('#phd_login').find('img').eq(0).attr('src');
                    $('#phd_login').find('img').eq(1).css({
                        'z-index':''
                    }).attr('src',src_);
                }else{
                    $('#phd_login').find('img').eq(1).css({
                        'z-index':'12',
                        'background-color':'#FFF'
                    });
                }
            }else{
                $('.layer_fixed').removeClass('hide').css('z-index','10');
                $('.login_area').removeClass('_css');
                if(src_==""){
                    var src_=$('#phd_login').find('img').eq(0).attr('src');
                    $('#phd_login').find('img').eq(1).css({
                        'z-index':''
                    }).attr('src',src_);
                }else{
                    $('#phd_login').find('img').eq(1).css({
                        'z-index':'12',
                        'background-color':'#FFF'
                    });
                }
            }
        });
    });

//=====================定制左边广告logo js end

//=====================定制右边广告logo js start
    var _btn=$('.login_dz_logo');
    var different=$('#different');
    var _sp='<span id="setThemeFocus" style="font-size: 12px">'
        +'<b class="_logo_b" style="margin: 0 10px;">简</b>'
        +'<a class="box" href="#d" class="hover"style="margin: 0 10px;">简体中文'+'</a>'
        +'<b class="other_logo_b" style="margin: 0 7px;">繁</b>'
        +'<a  href="#d" class="hover" style="margin: 0 7px;">繁体中文'+'</a>'
        +'<b class="other_logo_b" style="margin: 0 7px;">EN</b>'
        +'<a  href="#d" class="hover">English'+'</a>'
        +'</span>'
    _btn.on('click',function(){
        var right_login_popup=$('.right_login_popup');
        right_login_popup.find('img').addClass('hide').parent().addClass('hide');
        right_login_popup.removeClass('hide').css('z-index','100');
        if(_btn.hasClass('layer_hide')){
            $('#setTheme').css('z-index','0').removeClass('show');
            $('#setLoginBar').slideUp(500);
            var layer_fixed=$(".layer_fixed").removeClass('hide');//显示蒙版
            layer_fixed.find('.layer_fixed_close').addClass('hide');
        }else{
            var layer_fixed=$(".layer_fixed").removeClass('hide');//显示蒙版
            $('#phd_login').find('img').eq(1).css({
                'z-index':'0',
                'background':'none'
            });
            $('#setLoginBar').slideUp('500');
            $('#setTheme').removeClass('show');
            $('.pbd_login_warp').css('z-index','');
            $('.new_login_popup').addClass('hide');
            $('.login_area').removeClass('_css');
        }
        $('#uoloadFile2').click(function(){
            $('#preview1').removeClass('hide');
        });
        var popup_btn1=right_login_popup.find('.popup_btn1');
        var popup_btn2=right_login_popup.find('button.popup_btn2');
        var i=right_login_popup.find('i');
        popup_btn2.click(function(){
            $('.login_dz_logo').css('display','block');
        });
        i.click(function(){
            $('.login_dz_logo').css('display','block');
        });
        popup_btn1.on('click',function(){

            $('.login_dz_logo').css('display','block');
            var src_=right_login_popup.find('img').attr('src');
            if(src_==""){
                var _this=$('#phd_login').find('img').eq(0).attr('src',src_).addClass('hide');
                different.addClass('hide');
            }else{
                var _this=$('#phd_login').find('img').eq(0).attr('src',src_).removeClass('hide');
                _this.parent().find('a._th').addClass('hide');
                right_login_popup.find('img').addClass('hide').parent().addClass('hide');
                different.removeClass('hide');
            }
            right_login_popup.find('input').val('');
            right_login_popup.addClass('hide');
            if(different.length){
                different.html(_sp);
                if(different.css('text-align')=='right'){

                    different.find('span').css({'marginRight':'225px'})
                }else if(different.css('text-align')=='left'){
                    different.find('span').css({'marginLeft':'225px'})
                }
            }
            if($(this).hasClass('layer_hide')){
                $('.layer_fixed').addClass('hide');
                $('.login_area').removeClass('_css').css('z-index','0');
            }else{
                $('.layer_fixed').removeClass('hide').css('z-index','0');
                $('#phd_login').find('img').eq(0).css('z-index','12');
            }
        });
    });

//============================定制右边广告logo js end

//============================定制顶部布局 js start
    $('#content_icon').click(function(){
        if($(this).hasClass("layer_hide")){//判断这个类是否存在，存在改变元素得值
            $('#setLoginBar').addClass("setLoginBar_back");
            $('#setLoginBar').removeClass("setLoginBar_FFF");
        }else{
            $('#phd_login').find('img').eq(1).css({'z-index':'0','background':'none'});
            $('.new_login_popup').addClass('hide');
            $('.pbd_login_warp').css('z-index','');
            $('.right_login_popup').addClass('hide');
            $('.pbd_login_warp').removeClass('_sItem');
            $('.login_area').toggleClass('_css');
            $('#phd_login').find('img').css('z-index','0');
        }
        $('#setTheme,.login_conceal').slideUp(800);
        if($('.dz_vtn').hasClass('layer_hide')){
            $('.top_conceal').slideToggle(800);
        }else{
            $('.top_conceal').slideToggle(800).css('z-index','20');
        }
        $('html,body').animate({scrollTop:0},600);
        $('#setLoginBar').slideToggle(800);
    });
    var _li= $('#sd_has_nav');
    var _icon=$('.has_nav').eq(0).children('div');
    var _span=_icon.find('span');
    _span.click(function(event){event.stopPropagation();})
    var login_area=$('.login_area');
    _li.click(function(){
        $(this).addClass('on').children('div').removeClass('hide');
        $(this).siblings().removeClass('on');
        if(login_area.hasClass('_css')){
            login_area.find('input').eq(0).css('border','1px solid #0066B3');
        }
        if($(this).hasClass('layer_hide')){
            $(".layer_fixed").addClass('hide');
        }else{
            $(".layer_fixed").removeClass('hide');
        }
        $('.logo_ylx').removeClass('z-lo');
        $('.handle_content').addClass('hide');
        if(!$(this).hasClass('on')){
            $(this).children('div').addClass('hide');
        }
        _span.eq(0).click(function(){
            $(this).addClass('logoMove').siblings().removeClass('logoMove');
            login_area.css({'marginLeft':'28px','marginRight':''});
            $('#different').css('text-align','left');
            if($('.login_area').width()==445){
                $('#different').find('span').css({'marginLeft':'87px','marginRight':''})
            }else{
                $('#different').find('span').css({'marginLeft':'225px','marginRight':''});
            }
        });
        _span.eq(1).click(function(){
            $(this).addClass('logoMove').siblings().removeClass('logoMove');
            login_area.css("margin"," 0 auto");
            $('#different').css('text-align','center');
            if($('.login_area').width()==445){
                $('#different').find('span').css({'marginLeft':'-4px','marginRight':''})
            }else{
                $('#different').find('span').css({'marginRight':'','marginLeft':''});
            }
        });
        _span.eq(2).click(function(){
            $(this).addClass('logoMove').siblings().removeClass('logoMove');
            login_area.css({'marginRight':'28px','marginLeft':''});
            $('#different').css('text-align','right');
            if($('.login_area').width()==445){
                $('#different').find('span').css({'marginRight':'110px','marginLeft':''})
            }else{
                $('#different').find('span').css({'marginRight':'225px','marginLeft':''});
            }

        });
    });

//=============================删除和编辑图标js start
    var _li=$('.has_nav').eq(1);
    var _div=_li.find('div.handle_content');
    var right_content_logo=$('.right_content_logo');
    _li.on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.login_template').addClass('hide');
        if(login_area.hasClass('_css')){
            login_area.find('input').eq(0).css('border','1px solid #0066B3');
        }
        if($(this).hasClass('layer_hide')){
            $(".layer_fixed").addClass('hide');
            $('.login_area').removeClass('_css')
        }else{
            $(".layer_fixed").removeClass('hide');
        }
        $('.logo_ylx').removeClass('z-lo');
        _div.removeClass('hide');
        if(!$(this).hasClass('on')){
            $(this).children('div').addClass('hide');
            $('.login_area').removeClass('_css');
        }
        $('.btn_1').on('click',function(){
            $('.panel').removeClass('hide');
            if($('.dz_vtn').hasClass('layer_hide')){
                $(".layer_fixed").removeClass('hide').css('z-index','111').children('span').addClass('hide');
            }else{
                $(".layer_fixed").removeClass('hide').css('z-index','111').children('span').removeClass('hide');
            }
            $('.panel').find('div.panel-title').html('删除图标');
            $('.feedback-infor').find('p').eq(0).html('');
            $('.feedback-infor').find('p').eq(1).html('');
            $('.feedback-infor').find('p').eq(0).html("尊敬的用户，您确认要删除图标吗？").css('line-height','50px');
            $('#sure_btn3,#top-close,.panel-tool-close1').removeClass('hide');
            $('#sure_btn,#sure_btn1,#sure_btn2,#exit-close,.panel-tool-close').addClass('hide');
            $('#sure_btn3').click(function(){
                $('.right_content_logo').hide().addClass('switchover');
                $('.logo_ylxx').css('margin-left','155px');
                $('.login_area').animate({width:'445px'},200).addClass('_mo');
                if($('.login_area').width()==695){

                    if($('#different').css('text-align')=='left'){
                        $('#different').find('span').css({'marginLeft':'87px'})
                    }else if($('#different').css('text-align')=='center'){
                        $('#different').find('span').css({'marginLeft':'-4px'})
                    }else if($('#different').css('text-align')=='right'){
                        $('#different').find('span').css({'marginRight':'110px'})
                    }
                }
                $('.btn_1').addClass('hide');
                $('.btn_3').removeClass('hide');
                $('#sure_btn3,#top-close,.panel-tool-close1').addClass('hide');
                if($('.dz_vtn').hasClass('layer_hide')){
                    $(".layer_fixed").addClass('hide').css('z-index','');
                }else{
                    $(".layer_fixed").removeClass('hide').css('z-index','10');
                }
                $('#exit-close,.panel-tool-close').removeClass('hide');
            });
            $('.panel-tool-close1,#top-close').click(function(){
                $(this).parents('.panel').addClass('hide');
                $(this).addClass('hide');
                $('#exit-close,.panel-tool-close').removeClass('hide');
                $('#sure_btn3,.panel-tool-close1').addClass('hide');
                $('#setLoginBar').slideUp(800);
                $('.btn_set_logo_bg').css('display','block');
                if($('.dz_vtn').hasClass('layer_hide')){
                    $(".layer_fixed").addClass('hide').css('z-index','');
                }else{
                    $(".layer_fixed").removeClass('hide').css('z-index','10');
                    $('.login_area').removeClass('_css');
                }
            })
        });
        //编辑图标
        var content_login_popup=$('.content_login_popup');
        $('.btn_2').click(function(){
            $('.dz_vtn,.login_dz_logo,.login_between').css('display','none');
            $('.login_area').removeClass('_mo');
            var layer_fixed=$('.layer_fixed');
            $('.right_content_logo').removeClass('switchover');
            content_login_popup.find('img').addClass('hide').parent().addClass('hide');
            content_login_popup.removeClass('hide').css('z-index',999);
            if($('.dz_vtn').hasClass('layer_fixed')){
                layer_fixed.addClass('hide').css('z-index',10);//隐藏蒙版
            }else{
                layer_fixed.removeClass('hide').css('z-index',111);
            }
            layer_fixed.find('.layer_fixed_close').addClass('hide');
        });
        $('#uoloadFile3').click(function(){
            $('#preview2').removeClass('hide');
        });
        var popup_btn1=content_login_popup.find('button.popup_btn1');
        popup_btn1.on('click',function(){
            $('.btn_3').addClass('hide');
            $('.btn_1').removeClass('hide');
            var src_=content_login_popup.find('img').attr('src');
            if(src_==""){
                    if($('.login_area').width()=='695'){
                        $('.login_area').removeClass('_css');$('.right_content_logo').css('display','block');
                    }else{

                        $('.login_area').removeClass('_css');$('.right_content_logo').css('display','none');
                    }
            }else{
                var bgUrl="url("+src_+")";
                $(".right_content_logo").css({"background":bgUrl,'background-size':'100% 100%'});
                $('.right_content_logo').show();
                $('.login_area').css('width','715px');
                $('.login_area').addClass('_css');
            }

            if($('.login_area').width()==695){
                if($('#different').css('text-align')=='left'){
                    $('#different').find('span').css({'marginLeft':'225px'})
                }else if($('#different').css('text-align')=='center'){
                    $('#different').find('span').css({'marginLeft':'','marginRight':''})
                }else if($('#different').css('text-align')=='right'){
                    $('#different').find('span').css({'marginRight':'225px'})
                }
            }
            $('.logo_ylxx').css('margin-left','404px');
            $('#content_icon').css('display','block');
            content_login_popup.find('img').addClass('hide').parent().addClass('hide');
            content_login_popup.find('input').val('');
            content_login_popup.addClass('hide');
            if($(this).hasClass('layer_hide')){

                $('.layer_fixed').addClass('hide').css('z-index','0');
                $('.login_area').removeClass('_css').css('z-index','0');
            }else{

                $('.dz_vtn,.btn_set_logo_bg').css('z-index','20');
                $('.login_dz_logo').css('z-index','18');
                $('.layer_fixed').removeClass('hide').css('z-index','10').children('span').removeClass('hide');

            }
        });
        $('.btn_2,.btn_1').click(function(event){
            event.stopPropagation();
        });
    });
//======================删除和编辑图标js end
    var _select=$('.login_template').find('span');
    _select.click(function(){$(this).addClass('_select_on').siblings().removeClass('_select_on');});

//=======================编辑标题start
    var logo_ylxx_span=$('.logo_ylxx').find('span');
    var logo_ylxx_input=$('.logo_ylxx').find('input');
    var _target=$("#target");
    var first_i=$('.logo_ylxx').find('i').eq(0);
    var second_i=$('.logo_ylxx').find('i').eq(1);
    first_i.css({'z-index':'20','background':'url("images/login/white_16.png") no-repeat 4px 5px '});
    first_i.on('click',function(){
        $(this).addClass('hide');
        second_i.removeClass('hide');
        $('.icon_16_color').removeClass('hide');
        logo_ylxx_span.toggleClass('hide');
        logo_ylxx_input.toggleClass('hide');
        if($('#content_icon').hasClass('layer_hide')){
            $('.logo_ylxx').css('z-index','');
        }else{
            $(this).addClass('_ter');
            $('.logo_ylxx').css('z-index','20');
            logo_ylxx_input.css('border','1px solid #589FF0');
        }
    });
    second_i.on('click',function(){
        var _text=$('.logo_ylxx').find('input').val();
        $(this).addClass('hide');
        first_i.removeClass('hide');
        $('.coloLump').hide()
        var _color=$('#pbd_login').find('input').css('color');
        $('#pbd_login').find('#target').css('color',_color);
        $('.icon_16_color').addClass('hide');
        $('.logo_ylxx').css('z-index','');
        logo_ylxx_input.toggleClass('hide');
        logo_ylxx_span.toggleClass('hide');
        _target.html(_text);
        if($('.login_area').hasClass('_css')){
            $(".layer_fixed").removeClass('hide');//显示蒙
        }else if(first_i.hasClass('_ter')){
            $(".layer_fixed").removeClass('hide');//显示蒙
        }
        else{$(".layer_fixed").addClass('hide');}//隐藏蒙
        $('#setLoginBar').slideUp(500);
        $('.logo_ylxx').removeClass('z-lo');
        $('.dz_vtn,#content_icon,.login_between,.login_dz_logo,.btn_set_logo_bg').css('display','block');
    });
//===========================编辑标题end

//=======================点击恢复默认start
    $('#sure_btn1').on('click',function(){

        var _img1=$('#phd_login').find('img').eq(1);
        var _img2=$('#phd_login').find('img').eq(0);
        _img1.attr('src','images/CCB_logo.png').css({
            'z-index':'',
            'background':'none'
        });
        $('.target_span').html('网上银行企业客户登录').css('color','#0066b3');
        _img2.addClass('hide');
        $('._th').removeClass('hide');
        $('#different').addClass('hide');
        if($('.login_area').hasClass('_mo')){
            $('.logo_ylxx').css('margin-left','404px');
            $('.login_area').css('width','715px');
            $('.right_content_logo').removeClass('hide').css('background',$(".right_content_logo").attr("style","background:url('images/login/logo.png') no-repeat;"));
            $('.login_area').removeClass('_mo');
        }
        $('.login_area').removeClass('_css');
        $('.login_area').css({'marginLeft':'','marginRight':''});
        $('#pbd_login').addClass('background-image_0')
        $('#pbd_login').css('background',$('#pbd_login').attr("style","background:url('images/login/b.png')repeat-x;"));
        $('.l_other').removeClass('on');
        $('._not').addClass('on');
        $('#setTheme,#setLoginBar,.top_conceal,.login_conceal').slideUp(800);
        $('.pbd_login_warp').removeClass('_sItem').css('z-index','');
        $('.select_icon_way').find('li').removeClass('ot');
    });

    //=======================点击恢复默认end

    //编辑 上传图标============start
    $('.show_com').hover(
        function(){
            $('.login_compile').stop(true,true).animate({'bottom':'5px','opacity':'0.7'},500)},
        function(){
            $('.login_compile').stop(true,true).animate( {'bottom':'-27px','opacity':'0'},500)
        }
    );
    $('#uoloadFile5').click(function(event){
        event.stopPropagation();
        $(".layer_fixed").removeClass('hide');//显示蒙
        if($('.dz_vtn ').hasClass('layer_hide')){
            $('#setTheme').css('z-index','');
        }
    });
    //隐藏图片菜单栏
    $('.login_conceal').click(function(){
        $('#setTheme,.login_conceal').slideUp(800);
        $('.pbd_login_warp').removeClass('_sItem');
        $('#content_icon').css('display','block');
        $('.icon_16_edit').css('display','inline-block');
    });
    //隐藏顶部菜单栏
    $('.top_conceal').click(function(){
        $('#setLoginBar,.top_conceal').slideUp(800);
        $('.login_area').removeClass('_css');
        $('.btn_set_logo_bg').css('display','block');
        $('.icon_16_edit').css('display','inline-block');
    })
    //设置自动换色块 start
    var _ul='<ul>'+
                   '<li class="coloLump_li1"><span>粉红色</span></li>'+
                   '<li class="coloLump_li2"><span>红色</span></li>'+
                   '<li class="coloLump_li3"><span>深蓝色</span></li>'+
                   '<li class="coloLump_li4"><span>浅白色</span></li>'+
                   '<li class="coloLump_li5"><span>绿色</span></li>'+
                   '<li class="coloLump_li6"><span>黄色</span></li>'+
                   '<li class="coloLump_li7"><span>黑色</span></li>'+
                   '<li class="coloLump_li8"><span>灰色</span></li>'+
                   '</ul>';
    var _coloLump=$('.coloLump');
    $('.icon_16_color').click(function(){
        if($('.dz_vtn').hasClass('layer_hide')){_coloLump.css('z-index','');
        }else{_coloLump.css('z-index','20');}
        setTimeout(function(){_coloLump.slideDown(800)},300);
    })
    if(_coloLump.length){_coloLump.html(_ul);}
    var _cLi=$('.coloLump').find('li');
    _cLi.click(function(){$(this).parents('.coloLump').slideUp(800);});
    _cLi.each(function(){
    var _this=$(this);
        _this.hover(
            function(){
                var _cSpan=$(this).find('span');
                _cSpan.animate(
                    {'bottom':'1px'},500);
                    $('#pbd_login').find('input').eq(0).css('color',$(this).css('backgroundColor'));
            },
            function(){
                var _cSpan=$(this).find('span');_cSpan.animate({'bottom':'-17px'});
            }
        );
    });
    _coloLump.hover(function(){},function(){$(this).slideUp(800);})

    //设置自动换色块 end

})