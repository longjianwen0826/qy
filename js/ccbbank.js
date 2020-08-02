$(function () {
    $('.pbd_input_normal[needmony="true"]').keyup(function () {
        var val = $(this).val();
        var reg = /^\d+\.{0,1}\d{0,}$/;
        val = getoff_Qfw(val);
        if (!reg.test(val)) {
            $(this).val('');
        } else {
            $(this).val(add_Qfw(val));
        }
    });

    $('.pbd_input_normal[needmony="true"]').blur(function () {
        var val = $(this).val();
        if(val == ''){
            return;
        }
        val = getoff_Qfw(val);
        val = (val * 1).toFixed(2);
        $(this).val(add_Qfw(val));

        /*判断支用金额是否超过可支用金额 end*/

    });


    //按钮234个字定宽
    //
    //通知信息动作
    //边距
    $("input:radio,input:checkbox").css("margin-right", "5px");

    //hover

    //表格中的展开动作


    //导航


    /*=======================页面中的动作链接=================*/


    //table

    //自定义过滤
    $("#fuhe,.fuhe").click(function () {
        if ($(this).attr("checked") == "checked") {
            $(this).siblings("form,.fuhe-con").show();
        } else {
            $(this).siblings("form,.fuhe-con").hide();
        }
    });
    $("#fuhe2").click(function () {
        if ($(this).attr("checked") == "checked") {
            $(this).parent().next(".fuhe-con").show();
        } else {
            $(this).parent().next(".fuhe-con").hide();
        }
    });
    $("#js_searcoktable").find("input:checkbox,input:radio").each(function (i) {
        //复选复核
        $(this).filter(".no").click(function () {
            if ($(this).attr("checked") == 'checked') {
                $(this).next().show();
                $(this).parent().prev().find(".yes").attr("checked", false);
            } else {
                $(this).next().hide();
            }
        })
        $(this).filter(".yes").click(function () {
            if ($(this).attr("checked") == 'checked') {
                $(this).parent().next().find(".no").attr("checked", false)
                .next().hide();
                $(this).closest("tr").next().hide();
            }
        })
        $(this).filter(".no").next().click(function () {
            if ($(this).prev().attr("checked") == 'checked') {
                $(this).closest("tr").next().show();
            } else {
                $(this).closest("tr").next().hide();
            }
        })

    })

    //单选复核
    $("#js_fuheradio").find("input:text").each(function () {
        $(this).val("请输入复核不通过原因").css("color", "#ccc");
        $(this).focus(function () {
            if ($(this).val() == "请输入复核不通过原因") {
                $(this).val("").css("color", "#333");
            }
        })
    })
    $("#js_fuheradio").find("input:checkbox,input:radio").each(function (i) {
        $(this).filter(".no2").click(function () {
            $(this).siblings("input:text").removeClass("text-disabled").attr("disabled", false);
        });
        $(this).filter(".yes2").click(function () {
            $(this).siblings("input:text").addClass("text-disabled").attr("disabled", true);
        });
    })


    /*===================菜单拖拽===============*/

    /*=============panel===========*/
    $(".panel_title").each(function (i) {
        $(this).find("a.panel_bnt").click(function () {

            if ($(this).parent().next().is(":visible")) {
                $(this).parent().next().hide();
                $(this).addClass("panel-up");
            } else {
                $(this).parent().next().show();
                $(this).removeClass("panel-up");
            }
        })
    })


    /*================修改和删除 begin===================*/
    jQuery("#pbd_content .pbd_table_show input[value='删除']:gt(0)").bind("click", function () {
        if($(this).attr("class") != "pbd_button_2_full_width delete") {
            alertOpen(true,'您是否删除数据？删除后无法恢复。', false, false);
            var tempObj = $(this);
            var obj = {
                'callBack': function () {
                    tempObj.parent().parent().remove();
                    $(".pbd_table_show tr").each(function () {
                     $(this).children('td').eq(1).text($(this).index());
                 });
                }
            };
            jQuery('html').data('callBack', obj);
        }
    });
    /*================修改和删除 end===================*/

    //  保存模板 start
    $("#savemb").click(function () {
        var winhtml = '<div id="mbnamewin">' +
        '<div class="table-feedback">' +
        '<label class="label-style" style="width:135px;">请输入模板名称：</label><input type="text" class="pbd_input_normal" id="mbname"/>' +
        '</div>' +
        '<div class="bnt-con"><input type="button" class="pbd_btn_standard" value="确认"/>' +
        '<input type="button" class="pbd_btn_standard" value="取消"/>' +
        '</div>' +
        '</div>';
        $(winhtml).appendTo("body");
        $("#mbnamewin").window({
            dom: 'mbnamewin',
            title: '系统提示',
            width: 460,
            height: 200,
            modal: true,
            minimizable: false,
            maximizable: false,
            collapsible: false
        });
        $("#mbnamewin").find(".pbd_btn_standard").eq(1).click(function () {
            $("#mbnamewin").window("close");
            $("#mbnamewin").remove();
        });
        $("#mbnamewin").find(".pbd_btn_standard").eq(0).click(function () {
            if ($("#mbname").val() == '') {
                $("#mbname").addClass("pbd_input_normal_error");
            }
            else {
                var name = $("#mbname").val();
                var inhtml = '<p><input type="button" class="pbd_button_2_full_width right mt5" value="删除" onclick="$(this).parent().remove();"/> <input type="radio" name="mode" /> <label>' + name + '</label></p>';
                $(".mode-plist").append(inhtml);
                $("#mbnamewin").window("close");
                $("#mbnamewin").remove();
                isok();
            }
        });
        $("#mbname").click(function () { $(this).removeClass("pbd_input_normal_error"); });
    });
    //  保存模板 end


    //调用模板 start
    $("#historybtn").click(function () {
        $("#change-mode").window({
            dom: 'change-mode',
            width: 370,
            height: 400,
            modal: true,
            minimizable: false,
            maximizable: false,
            collapsible: false,
            title: '调用历史模板'
        });
    });
    $("#change-mode").find(".pbd_btn_standard").eq(0).click(function () {
        $(".pbd_input_normal[rel]").each(function (index, item) {
            $(this).val($(this).attr("rel"));
        });
        $("#change-mode").window("close");
    });
    $("#change-mode").find(".pbd_btn_standard").eq(1).click(function () {
        $("#change-mode").window("close");
    });
    //调用模板 end

	//选择收款人start
	$('#field_4').keyup(function(){
		var obj1 = ['4226 0063 3333 3503','安捷伦科技有限公司','中国银行','广东省','广州市','广东省分行'];
		var obj2 = ['4229 0095 5555 5606','网众信息技术有限公司','中国工商银行','广东省','广州市','广州花城支行营业室'];
		var arr = [obj1,obj2];
		fill(arr,$(this).val());
	});
	
	$('#acc_ul').children().click(function(){
		var obj1 = ['4226 0063 3333 3503','安捷伦科技有限公司','中国银行','广东省','广州市','广东省分行'];
		var obj2 = ['4229 0095 5555 5606','网众信息技术有限公司','中国工商银行','广东省','广州市','广州花城支行营业室'];
		var arr = [obj1,obj2];
		fill(arr,$(this).find('a').text());
	});
	//选择收款人end
});


  // 添加商品详细 strat
  function addproduct() {
    var pnum = $('#cp-bianma').val();
    var pname = $('#seled_kh').val();
    var addhtml;
    if (pnum == '') {
        $('#cp-bianma').next().show();
        $('#cp-bianma').addClass('pbd_input_normal_error');
    }
    else {
        $('#cp-bianma').next().hide();
        $('#cp-bianma').removeClass('pbd_input_normal_error');
        addhtml = '<tr><td>' + pnum + '</td><td>' + pname + '</td><td><input type="button" class="pbd_button_2_full_width modify" value="修改" />  <input type="button" class="pbd_button_2_full_width delete" value="删除" /></td></tr>';
        $(".pbd_table_show").append(addhtml);
        $(".table-warp").show();
    }
    $('input[value="删除"]').click(function () {
        $(this).parent().parent().remove();
    });
    $('input[value="修改"]').click(function () {
        $('#cp-bianma').val($(this).parent().parent().find("td").eq(0).text());
        $('#seled_kh').val($(this).parent().parent().find("td").eq(1).text());
        $(this).parent().parent().remove();
    });
}
// 添加商品详细 end


//  保存模板 start
function isok() {
    var winhtml = '<div id="exitwin">' +
    '<div class="alert-feedback">' +
    '<span class="success-icon"></span>' +
    '<div class="feedback-infor">' +
    '<strong>尊敬的用户,您的模板保存已成功!</strong>' +
    '</div>' +
    '</div>' +
    '<div class="bnt-con"><input type="button" class="pbd_btn_standard" value="确认"/>' +
    '</div>' +
    '</div>';
    $(winhtml).appendTo("body");
    $("#exitwin").window({
        dom: 'exitwin',
        title: '系统提示',
        width: 460,
        height: 200,
        modal: true,
        minimizable: false,
        maximizable: false,
        collapsible: false
    })
    $("#exitwin").find(".pbd_btn_standard").each(function () {
        $(this).click(function () {
            $("#exitwin").window("close");
            $("#exitwin").remove();
        })
    })
}
//  保存模板 end

//添加扫描件 start
function addfile() {
    var filename = $("#p_file").val();
    var addhtml;
    if (filename == '') {
        $('#p_file').next().show();
        $('#p_file').addClass('pbd_input_normal_error');
    }
    else {
        $('#p_file').next().hide();
        $('#p_file').removeClass('pbd_input_normal_error');
        addhtml = '<p><span>' + filename + '</span></span><a href="../../down/fap0001.jpg" class="pbd_button_2_full_width ml5 mt5"  target="_blank">查看</a><a class="pbd_button_2_full_width ml5 del">删除</a></p>';
        $("#file-list-txt").append(addhtml);
    }
    $('a[class*="del"]').click(function () {
        $(this).parent().remove();
    });
}
    //添加扫描件 end


//tree
function treeAction(clickObj) {
    if (clickObj.hasClass("selected")) {
        clickObj.filter(".selected").parents("ul").show();
        clickObj.filter(".selected").parents("ul").prev("a").addClass("afold");
    }
    clickObj.each(function () {
        $(this).click(function () {
            var ul = $(this).next("ul");
            if (ul.is(":visible")) {

                $(this).next("ul").hide();
                $(this).removeClass("afold").parent().removeClass("fold");
                return;
            } else {
                $(this).next("ul").show();
                $(this).addClass("afold").parent().addClass("fold");
              //  $(this).parent().siblings().children(".afold").removeClass("afold").next("ul").hide()
				//.parent().removeClass("fold");
                return;
            }
        });
    })
}
//menu

//load



//按钮

//通知信息动作
function shortNote() {
    $("#showgroup").click(function () {
        if ($(this).attr("checked") == 'checked') {
            $(this).parent().next().show();
        } else {
            $(this).parent().next().hide();
        }

    })
    $("#message,#email").click(function () {
        if ($(this).attr("checked") == 'checked') {
            $(this).next().next().css("color", "#333");
            $(this).next().next().find("a.linea").removeClass("gray");
        } else {
            $(this).next().next().css("color", "#888");
            $(this).next().next().find("a.linea").addClass("gray");
        }
    })
    $(".changemsg").find("a.linea").each(function () {
        $(this).toggle(function () {
            if ($(this).hasClass("gray")) return;
            $(this).text("保存");
            $(this).prev().hide();
            $(this).prev().prev().show().val($(this).prev().text());
        },
        function () {
          if ($(this).hasClass("gray")) return;
          $(this).text("修改");
          $(this).prev().prev().hide();
          $(this).prev().text($(this).prev().prev().val()).show();

      })
    })
}




/////////////////////////    20140625       /////////////////////////////////////////
function exitwin(tips,url){
    var tips = tips;
    var url = url;
    var winhtml = '<div id="exitwin">' +
    '<div class="winlogo"></div>' +
    '<div class="window-feedback">'+
    '<span class="warn-icon"></span>' +
    '<div class="feedback-infor">'+tips+'</div>'+
    '</div>'+
    '<div class="bnt-con">' + '<input type="button" class="pbd_btn_standard" value="确认" id="surebtn" />' +
    '<input type="button" class="pbd_btn_standard" value="取消" id="exitclose" />' +
    '</div>' +
    '</div>';
    $(winhtml).appendTo("body");
    $("#exitwin").window({
        dom: 'exitwin',
        title: '系统提示',
        width: 460,
        height: 220,
        modal: true,
        minimizable: false,
        maximizable: false,
        collapsible:false
    });
    $("#exitclose").click(function () {
        $("#Warp").nextAll().remove();
    });
    $("#surebtn").click(function () {
        $("#exitwin").window("close");
        location.href = url;
    });
}


function alertOpen(num,tips, url1, url2) {
    var num = num;
    var tips = tips;
    var url1 = url1;
    var url2 = url2;
    var Cancelhtml = '';
    if (num) {
        Cancelhtml = '<input type="button" value="取消" class="pbd_btn_standard" id="exit-close" />';
    }
    var winhtml = '<div id="alert-tips">' +
    '<div class="alert-feedback">'+
    '<span class="fail-icon"></span>'+
    '<div class="feedback-infor"><strong>'+tips+'</strong></div>'+
    '</div>'+
    '<div class="bnt-con"><input type="button" value="确认" class="pbd_btn_standard" id="sure_btn" />' + Cancelhtml + '</div>' +
    '</div>';
    $(winhtml).appendTo("body");
    $("#alert-tips").window({
        dom: 'alert-tips',
        title: '系统提示',
        width: 460,
        height: 200,
        modal: true,
        minimizable: false,
        maximizable: false,
        collapsible: false
    });
    if (num) {
        jQuery("#exit-close").click(function () {
            $("#Warp").nextAll().remove();
            if (url2) {
                location.href = url2;
            }
        });
    }
    $("#sure_btn").click(function () {
        $("#Warp").nextAll().remove();
        if(!url1){
            var cb = jQuery('html').data('callBack');
            if (!cb.callBack()) {
                cb.callBack();
            }
        }
        else {
            location.href = url1;
        }
    });
}


//表单验证 start ////
function checkform() {
    var flag =true;
    var tips = ' ';
    var Wdiv = '<div class="error-tip-div"></div>';
    var Cdiv = '<div class="error-tip-box"><p>';
    var Ediv = '</p><span class="header_bar_arrow"></span></div>';
    jQuery("input[relcheck='true']").each(function (index, element) {
        var input_value = jQuery(this).val();
        tips = jQuery(this).attr("reltips");
        if (input_value == "") {
            flag = false;
            jQuery(this).addClass("pbd_input_normal_error");
            jQuery(this).wrap(Wdiv);
            jQuery(this).after(Cdiv + tips + Ediv);
            $('html,body').scrollTop($(this).offset().top - 50);
            return false;
        }
        else {
            flag = true;
        }
    });
    $('input[relcheck="true"]').click(function () {
    //    $(this).focusin();
    $(this).removeClass("pbd_input_normal_error");
    $(this).parent().parent().find(".error-tip-div").before($(this));
    $(this).next(".error-tip-div").remove();
    $(this).focus();
    $(this)[0].focus();
});
    return flag;
}
//表单验证 end ////

//最终交易对手显示 start
function showform() {
    var GL = $("input[name='GL-radio']").attr("checked");
    var LX = $("input[name='LX-radio']").attr("checked");
    if (GL && LX) {
        $("#zzjyds-mes").hide();
    }
    else {
        $("#zzjyds-mes").show();
    }
}
//最终交易对手显示 end




///  金额效果  start  //

var intLen = 0;
//设置千分位
function set_Qfw(obj) {
    if (!obj) {
        return;
    }
    var val = getoff_Qfw(obj.value);
    if (val != '') {
        if (!checkFloat(val)) {
            obj.value = $('body').data('lastStr');
            return false;
        }
    }
    var dot = val.indexOf(".");
    if (dot < 0)
        dot = val.length;
    intLen = (val.substring(0, dot)).length;
    if ($('head').data('tempLeg') != intLen) {
        obj.value = '';
        obj.value = add_Qfw(val);
    }
    $('head').data('tempLeg', intLen);
    $('body').data('lastStr', obj.value);
}

// 去掉 ","
function getoff_Qfw(cash) {
    if (!cash) {
        return;
    }
    var len = cash.length;
    var ch = "";
    var newCash = "";
    for (var ii = 0; ii < len; ii++) {
        ch = cash.charAt(ii);
        if (ch != ",") {
            newCash = newCash + ch;
        }
    }
    return newCash;
}
// 加上","
function add_Qfw(cash) {
    if (!cash) {
        return;
    }
    cash = cash + '';
    var dot = cash.indexOf(".");
    if (dot < 0)
        dot = cash.length;
    intLen = (cash.substring(0, dot)).length;
    var len = cash.length;
    var cashNew = "";// 加上","的字符串
    var tt = 0;// 计数器，每加一个"," tt 加 1
    var t = 0;// 添加","的个数
    if (intLen > 3) {
        t = (intLen - intLen % 3) / 3;
    } else
    return cash;
    if (intLen % 3 != 0) {
        for (var ii = 0; ii < len; ii++) {
            cashNew = cashNew + cash.charAt(ii);
            if (ii == (intLen % 3 + 3 * tt - 1) && tt < t) {
                tt = tt + 1;
                cashNew = cashNew + ",";
            }
        }
    }
        // 个数部分长度是3的倍数
        else {
            tt = tt + 1;
            for (var ii = 0; ii < len; ii++) {
                cashNew = cashNew + cash.charAt(ii);
                if (ii == (3 * tt - 1) && tt < t) {
                    tt = tt + 1;
                    cashNew = cashNew + ",";
                }
            }
        }
        return cashNew;
    }

    /** ************************************** */
// 判断数值,是否为浮点数
function checkFloat(string) {
    var length1, i, j;
    var string1 = "";
    var ofstr = getoff_Qfw(string);
    var oflen = ofstr.length;
    if (oflen > 0 && ofstr.charAt(oflen - 1) == " ")
        return (false);
    string1 = javaTrim(string)
    length1 = string1.length;
    if (length1 == 0) {
        // alert( "错误！空串！");
        return (false);
    }

    if (string.charAt(0) == "0") {
        if (length1 > 1) {
            var num = 0;
            for (var i = 0; i < oflen; i++) {
                var c = ofstr.charAt(i);
                if (c == 0)
                    num++;
            }
            if (num == oflen
               || (num == oflen - 1 && ofstr.charAt(oflen - 3) == ".")) {
                // alert("金额不能为0，请重新填写！");
            return (false);
        }
    }
    if (length1 == 4 && string == "0.00") {
            // alert("金额不能为0，请重新填写！");
            return (false);
        }
    }
    j = 0;
    for (i = 0; i < length1; i++) { // 判断每位数字
        if (isNaN(parseInt(string.charAt(i), 10))) {
            if (string.charAt(i) != ".") {
                // alert( "错误！请输入数值型数据！");
                return (false);
            } else {
                j++;
                /*
				 * if(length1 - i > 3 ){ alert("小数点后只能有两位！"); return(false);}
				 */
                }
            }
        }
        if (j > 1) {
        // alert( "错误！小数点只能有一个!");
        return (false);
    }
    return (true);
}

// **************去掉字符串前后的空格************
function javaTrim(string) {
    var length1, i, j;
    var string1 = "";
    length1 = string.length;
    for (i = 0; i < length1; i++) {
        if (string.charAt(i) != " ") {
            for (j = i; j < length1; j++)
                string1 = string1 + string.charAt(j);
            break;
        }
    }
    length1 = string1.length;
    string = string1;
    string1 = "";
    for (i = length1 - 1; i >= 0; i--) {
        if (string.charAt(i) != " ") {
            for (j = 0; j <= i; j++)
                string1 = string1 + string.charAt(j);
            break;
        }
    }
    string = string1;
    return (string)
}

//  **************金额效果 end  *********************************//

//  **************获取url的值 begin  *********************************//
var Request = {
    QueryString : function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
        return svalue?svalue[1]:svalue;
    },

    queryAllString : function() {
        var urlLocation = location.href;
        return urlLocation.slice(urlLocation.indexOf("?"));
    }
}

//  **************获取url的值 end  *********************************//

//选择收款人 填充 start
function fill(arr,key){
	var ohtml = $('[fill_data="fill"]');
	var obj = null;
	$(arr).each(function(){
		if(obj){
			return null;
		}
		obj = this[0] == key?this:null;
	});
	
	for(var i = 0;i<ohtml.length;i++){
		$(ohtml[i]).val(obj[i+1]);
		if(!obj[i+1]){
			$(ohtml[i]).blur();
			continue;
		}
		$(ohtml[i]).focus();
	}
}
//选择收款人 填充 end