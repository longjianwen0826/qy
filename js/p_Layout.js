window.nav = null;
;(function (){
	var rel = '../';
	//页面初始数据
	var	menuList = [
		{itemTitle:'账户信息',
			list:[
				{itemTitle:'账户信息查询',
					list:[
						{itemTitle:'建行活期账户',url:rel+'zhcx/jxhqzh_1.html'},
						{itemTitle:'定期账户',url:rel + 'dqzh/dqzh_1.html'},
						{itemTitle:'银行内部账户',url:'javascript:;'},
						{itemTitle:'一户通',url:'javascript:;'},
						{itemTitle:'财资账户',url:'javascript:;'},
						{itemTitle:'透支账户',url:'javascript:;'},
						{itemTitle:'他行活期账户',url:'javascript:;'}
					]
				},
				{itemTitle:'批量账户查询',url:'javascript:;'},
				{itemTitle:'电子回单查询',url:'javascript:;'},
				{itemTitle:'集成资讯',
					list : [
						{itemTitle:'综合页',url:'javascript:;'},
						{itemTitle:'基金查询',url:'javascript:;'},
						{itemTitle:'贵金属查询',url:'javascript:;'},
						{itemTitle:'理财产品查询',url:'javascript:;'},
						{itemTitle:'汇率查询',url:'javascript:;'},
						{itemTitle:'理财计算器',url:'javascript:;'}
					]
				},
				{itemTitle:'电子对账',
					list : [
						{itemTitle:'对账单查询与回签',url:'javascript:;'},
						{itemTitle:'明细账单查询',url:'javascript:;'},
						{itemTitle:'对账结果查询',url:'javascript:;'},
						{itemTitle:'电子对账签约管理',url:'javascript:;'}
					]
				}
			]
		},
		{itemTitle:'转账业务',
			list:[
				{itemTitle:'转账制单',
					list : [
						{itemTitle:'单笔付款',url:'ZZZD_dbfk_index.html'},
						{itemTitle:'付款冻结',url:'javascript:;'},
						{itemTitle:'单笔收款',url:'javascript:;'},
						{itemTitle:'跨行实时转账',url:'javascript:;'},
						{itemTitle:'批量转账',url:'ZZZD_plzz_index.html'},
						{itemTitle:'请领款',url:'javascript:;'},
						{itemTitle:'证券资金转账',url:'javascript:;'},
						{itemTitle:'新股网下申购',url:'javascript:;'}
					]
				},
				{itemTitle:'单据维护',
					list : [
						{itemTitle:'单据修改',url:'javascript:;'},
						{itemTitle:'单据删除',url:'javascript:;'},
						{itemTitle:'单据收回',url:'javascript:;'},
						{itemTitle:'复核员变更',url:'javascript:;'}
					]
				},
				{itemTitle:'流水查询',
					list : [
						{itemTitle:'转账流水查询',url:'javascript:;'},
						{itemTitle:'定制交易查询',url:'javascript:;'}
					]
				},
				{itemTitle:'常用账户管理',url:'javascript:;'}
			]
		},
		{itemTitle:'代发代扣',
			list:[
				{itemTitle:'代发业务',
					list : [
						{itemTitle:'代发制单',url:'javascript:;'},
						{itemTitle:'代发复核',url:'javascript:;'},
						{itemTitle:'单据收回',url:'javascript:;'},
						{itemTitle:'单据修改删除',url:'javascript:;'},
						{itemTitle:'单据复核员变更',url:'javascript:;'},
						{itemTitle:'定制交易查询',url:'javascript:;'},
						{itemTitle:'代发工资额度查询',url:'javascript:;'}
					]
				},
				{itemTitle:'代扣业务',
					list : [
						{itemTitle:'代扣制单',url:'javascript:;'},
						{itemTitle:'代扣复核',url:'javascript:;'},
						{itemTitle:'单据收回',url:'javascript:;'},
						{itemTitle:'单据修改删除',url:'javascript:;'},
						{itemTitle:'单据复核员变更',url:'javascript:;'},
						{itemTitle:'授权账户查询',url:'javascript:;'},
						{itemTitle:'定制交易查询',url:'javascript:;'}
					]
				},
				{itemTitle:'E付通',
					list : [
						{itemTitle:'收款企业',url:'javascript:;'},
						{itemTitle:'付款企业',url:'javascript:;'}
					]
				},
				{itemTitle:'单据撤销',url:'javascript:;'},
				{itemTitle:'客户信息查询',url:'javascript:;'}
			]
		},
		/*{itemTitle:'企业级代收付',
			list:[
				{itemTitle:'企业级代收付',url:'javascript:;'}
			]
		},
		{itemTitle:'现金管理',
			list:[
				{itemTitle:'报告查询',url:'javascript:;'},
				{itemTitle:'报告定制',url:'javascript:;'}
			]
		},*/
		{itemTitle:'缴费业务',
			list:[
				{itemTitle:'订阅设置',url:'javascript:;'},
				{itemTitle:'通知公告',url:'javascript:;'},
				{itemTitle:'信息资讯',url:'javascript:;'},
				{itemTitle:'业务指南',list:[
					{itemTitle:'账户业务',url:'javascript:;'},
					{itemTitle:'资金业务',url:'javascript:;'},
					{itemTitle:'银行间业务',url:'javascript:;'},
					{itemTitle:'交易单元业务',url:'javascript:;'},
					{itemTitle:'联系方式查询',url:'javascript:;'}
				]
				},
				{itemTitle:'安全中心',list:[
					{itemTitle:'密码修改',url:'javascript:;'},
					{itemTitle:'日志查询',url:'javascript:;'}
				]
				},
				{itemTitle:'帮助',list:[
					{itemTitle:'用户操作手册',url:'javascript:;'}
				]
				},
			]
		},
		{itemTitle:'票据业务',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'信贷融资',
			list:[
				{itemTitle:'小微企业快贷',
					list : [
						{itemTitle:'支用',url:'../xdrz_xwqykd/xwqykd_zy_1.html'},
						{itemTitle:'还款',url:'../xdrz_xwqykd/xwqykd_hk_1.html'},
						{itemTitle:'查询',url:'../xdrz_xwqykd/xwqykd_cx_1.html'},
					]
				},
			]
		},
		{itemTitle:'国际业务',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'投资理财',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'创业服务专区',
			list:[]
		},
		{itemTitle:'电子商务',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'财政社保',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'卡类业务',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'服务管理',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		},
		{itemTitle:'特色业务',
			list:[
				{itemTitle:'批量管理',url:'javascript:;'},
			]
		}
	];
	
	
	
	//构建导航对象
	function Nav(){

		//加载导航列表初始数据
		this.initData = menuList;
		
		//导航数据容器（若有storage中存储的数据则用存储数据，否则用初始数据）
		//this.tempData = sessionStorage.getItem('menuData') ? JSON.parse(sessionStorage.getItem('menuData')) : this.initData;
		this.tempData = JSON.parse(JSON.stringify(this.initData));

		//存储数据容器
		this.storageData = JSON.parse(JSON.stringify(this.tempData));

		//回收站数据容器
		this.recycleTempData = [];
		
		//回收站数据容器
		this.recycleData = [];
		
		//导航最外层
		this.navWrap = $('<div id="pnav"><div class="hideNav hide"><ul  id="nav_third"><li><a class="nav_third_cddt" href="../menu/cddt.html">菜单地图</a></li><li><a class="nav_third_szyjcd" href="../menu/dyzfsq_1.html">设置一级菜单</a></li></ul></div></div>');
		
		//一级导航包裹层
		this.menuWrap = $('<div class="nav_first"></div>');
		
		//导航菜单列表包裹层
		this.menuLevel1Wrap = $('<div class="nav_f1" id="nav_sya"></div>');
		
		//展开按钮
		this.showAllBtn = $('<div href="javascript:;" title="展开所有一级菜单" class="getallnav" id="nav_f1"><span >展开</span></div>');
		
		//自定义设置按钮
		this.setBtn = $('<div class="nav_div"></div>');
		
		//二级和次级菜单包裹层
		this.menuLevel2Wrap = $('<div id="mainnav"></div>');

		/*
		*自定义设置
		
		//遮罩
		this.customMask = $('<div class="set_mask" id="set_mask"></div>');
		
		//自定义包裹层
		this.setWrap = $('<div class="set_wrap" id="set_custom"></div>');
		
		//自定义一级包裹层
		this.setMenuWrap = $('<div class="set_menu_wrap"></div>');
		
		//自定义一级列表包裹
		this.setMenuList = $('<div class="set_menu_list"></div>');
		
		//关闭设置按钮
		this.setCloseBtn = $('<div class="set_close_btn"></div>');
		
		//回收站
		this.setRecycle = $('<div class="set_recycle"></div>');
		
		//回收站弹层遮罩
		this.recycleMask = $('<div class="set_recycle_mask"></div>');
		
		//回收站弹层包裹
		this.recycleWrap = $('<div class="set_recycle_wrap clear"></div>');
		
		//回收站关闭按钮
		this.recycleCloseBtn = $('<div class="set_recycle_closebtn"></div>');
		
		//自定义二级和次级菜单包裹
		this.setSecondaryWrap = $('<div class="set_secondary_wrap clear"></div>');
		
		//自定义保存和取消
		this.setBtnWrap = $('<div class="set_btn_wrap"><input type="button" value="保存设置" /><input type="button" value="全部取消" /></div>');
		*/
		//导航对象创建后页面初始化自动构建导航
		this._init();
	}

	//对象原型添加方法
	//(为防止在深层函数引入而导致this指向出错，几乎所有方法手动传入_this实例化对象)
	Nav.prototype = {

		//初始化方法用于初始构建DOM
		_init: function (){
			//初始化构建
			this.create();
			
			//初始化首页frame
			//$('#mainIframe').attr('src','html/zhcx/zhxxcx/jxhqzh_1.html');
			//设置首页的时候改变初始化首页frame
//			try {
//				//var isSetIndex = window.sessionStorage.getItem('setIndex');
//				var isSetIndex = $.storage.get('setIndex');
//				if (isSetIndex != undefined) {
//					$('#mainIframe').attr('src',isSetIndex);
//				} else {
//					$('#mainIframe').attr('src','html/zhcx/zhxxcx/jxhqzh_1.html');
//				}
//			}catch (err){console.log('false')}

		},
		//构建导航
		create: function (){
			
			//构建过程
			var nav = $('#pnav'),
				_this = this;

			//若有导航存在，删除后重新构造
			if ( nav.length ) nav.remove();
			
			//构建导航DOM结构并添加至页面
			this.menuWrap.append(this.menuLevel1Wrap,this.showAllBtn);
			
			this.navWrap.append(this.menuWrap,this.setBtn,this.menuLevel2Wrap);
			
			this.navWrap.insertAfter('#phd_common');

			//执行菜单中填入数据的操作
			this.refreshHtml(_this);

			//自定义按钮绑定创建自定义界面的方法
//			this.setBtn.click(function (){
//				_this.showCustom(_this);
//			});
			//绑定收缩展开方法
			this.showAll(this);

			//一级菜单tab切换
			this.menuLevel1Wrap.delegate('a','click',function (){
				$(this).addClass('active').siblings().removeClass('active');
				
				//更新二级DOM
				_this.createLevel(_this,_this.storageData[$(this).index()].list);
			});
			

			//绑定生成iframe
			this.createIframe(this);
		},

		//刷新导航DOM(自定设置保存后刷新导航，也可用于初始创建)
		refreshHtml: function (_this,tIndex){
			_this == null ? _this = this : _this;
			tIndex == null ? tIndex = 0 : tIndex;
			var menuLevel1Str = menuLevel2Str = url ='', //一二级列表的字符串表示，可能存在导航链接
				data = _this.storageData; //构建时使用的保存数据
			//循环数据构建一级菜单
			for (var i=0;i<data.length;i++){
				url = data[i].url ? data[i].url : 'javascript:;';
				menuLevel1Str += '<a href="javascript:;">'+data[i].itemTitle+'</a>';
			}

			//清空原先可能有的DOM，添加新的DOM并将第一个激活
			_this.menuLevel1Wrap.empty()
			  .append($(menuLevel1Str))
				.children().eq(tIndex).addClass('active');

			//绑定拖拽排序
			_this.menuLevel1Wrap.sortable({
				helper: 'clone',
				revert:true,
				start: function (event,ui){
					ui.item.data('startIndex',ui.item.index());
				},
				stop: function( event, ui ) {

					//找到排序后索引变化
					var sIndex = ui.item.data('startIndex'),
						eIndex = ui.item.index(),

					//排序完成后数据的变化
						sortData = _this.storageData.splice(sIndex,1)[0];
					_this.storageData.splice(eIndex,0,sortData);
					
					event.stopPropagation();
				},
			});

			//刷新二级
			_this.createLevel(_this,data[tIndex].list || []);
		},

		//构造二级和三级菜单的函数
		createLevel: function (_this,arr){
			var htmlStr2 = htmlStr3 = '';
			arr.forEach(function (val){
				if ( val.list ){
					for (var i = 0; i < val.list.length; i++) {
						htmlStr3 += '<li><a href="'+val.list[i].url+'" data-text="'+val.list[i].itemTitle+'" data-href="'+val.list[i].url+'">'+val.list[i].itemTitle+'</a></li>'
					};
					htmlStr3 = '<ul class="nav_third">'+htmlStr3+'</ul>'
					htmlStr2 += '<li><a class="nav_second_a_tri" href="javascript:;">'+val.itemTitle+'</a>'+htmlStr3+'</li>'
				}else if (val.url) {
					htmlStr2 += '<li><a class="nav_second_a" href="'+val.url+'" data-text="'+val.itemTitle+'" data-href="'+val.url+'">'+val.itemTitle+'</a></li>'
				}
			})
			htmlStr2 = '<ul class="nav_second">'+htmlStr2+'</ul>';
			

			_this.menuLevel2Wrap.empty()
			  .append($(htmlStr2));

			//绑定拖拽至常用功能栏
			_this.toCommon();
		},

		//主导航下生成iframe
		createIframe: function (_this){
			_this.navWrap.on('click','a[data-href]',function (){
				if($(this).attr('data-href') == '#' || $(this).attr('data-href').indexOf('javascript') != -1){
					return false;
				}else{
					//点击生成历史浏览
					//createHistory($(this).attr('data-href'),$(this).text());
					//点击生成右侧历史记录
					createRecord($(this).attr('data-href'),$(this).text());
					//更新当前位置
					var arr = [];
					arr.push(_this.menuLevel1Wrap.children('.active').text());//绑定一级菜单添加active

					if ( $(this).parent().parent().is('.nav_second') ){
						arr.push($(this).text());
						
					}else {
						arr.push($(this).parent().parent().prev().text(),$(this).text());
					}
					//_this.getCurrentPostion(arr);

					//将位置信息保存至生成的历史记录元素
					top.$('#scheme_d').find('a[data-href]').last().data('position',arr);
				}
			})
		},
		//改变当前位置操作(传进存有位置信息的数组)
//		getCurrentPostion: function (arr){
//			var len = arr.length;
//			var htmlStr = '';
//			if (len == 3){
//				htmlStr = '当前位置：'+arr[0]+'<span>></span>'+arr[1]+'<span>></span><b>'+arr[2]+'</b>';
//			}else if (len == 2){
//				htmlStr = '当前位置：'+arr[0]+'<span>></span><b>'+arr[1]+'</b>';
//			}
//			$('.pbd_tab_current').empty().html(htmlStr);
//		},

		//拖拽至常用功能
		toCommon: function (){
			this.menuLevel2Wrap.find('a[data-href]').draggable({
				zIndex: 10000,
				appendTo: 'body',
				helper: "clone",
				start:function (){
					$('#common').animate({'right':0});
					
					
					$('#common').find('.common_lable').removeClass('common_lable_out');
					$('#common').find('.common_lable').data('open',true);
					$('#commonmask').show();
					
				},
				stop: function (event,ui){
					var common = $('.common_links_wrap').eq(0)
					//var str = '<div class="common_link"><a data-href="'+$(this).attr('data-href')+'" href="javascript:;">'+$(this).text()+'</a><i class="common_closebtn"></i></div>';
					var str = '<li class="common_link"><span class="dian">●</span><a data-href="'+$(this).attr('data-href')+'" href="javascript:;">'+$(this).text()+'</a><span class="icon_position"></span><i class="common_closebtn"></i></li>';
					var l = common.offset().left;
					var t = common.offset().top;
					var links = common.find('a[data-href]');
					var b = false;//控制添加进去的开关

					if ( ui.offset.top>t && ui.offset.left>l ){
						//拖拽至位置后判断是否已近存在
						links.each(function (){
							if ( $(this).text() == ui.helper.text() ){
								alert('您已添加该项！');
								b = true;
								return;
							}
						})

						if ( b ) return;

						if ( links.length > 10 ){
							alert('常用功能最多设置12个');
							return;
						}else {
							common.append($(str));
						}
					}
				}
			})
		},

		//导航显示收缩展开
		showAll: function (_this){
			
			var h = this.menuLevel1Wrap.outerHeight(true);//记录单行高度
			this.showAllBtn.click(function (){
				
				if ($(this).data('open')){
					$(this).removeClass('closeallnav');
					$(this).find("span").text("展开");
					_this.menuLevel1Wrap.height(h);
					$(this).data('open',false);
				}else {
					$(this).addClass('closeallnav');
					_this.menuLevel1Wrap.height(h*2);
					$(this).next().text("隐藏");
					$(this).data('open',true);
					
				}
			})
		},

		//显示设置的自定义导航界面
		showCustom : function (_this){
			_this.tempData = JSON.parse(JSON.stringify(_this.storageData));
			//首先创建一级列表
			var setMenuStr = '';
			for (var i = 0; i < _this.tempData.length; i++) {
				setMenuStr += '<a href="javascript:;"><span>'+_this.tempData[i].itemTitle+'</span><i class="set_delete_btn"></i></a>';
			};
			$(setMenuStr).appendTo(_this.setMenuList);

			//添加DOM
			_this.setMenuWrap.append(_this.setMenuList,_this.setCloseBtn,_this.setRecycle);
			_this.setWrap.append(_this.setMenuWrap,_this.setSecondaryWrap,_this.setBtnWrap);
			$('body').append(_this.customMask,_this.setWrap)
			
			//绑定关闭界面事件
			_this.setCloseBtn.click(function (){
				_this.closeCustom(_this);
				_this.tempData = JSON.parse(JSON.stringify(_this.storageData));
			});

			//绑定显示二级或次级菜单事件
			_this.showSecondary(_this);
			_this.showNextLevel(_this);

			//绑定升降级和回收站操作
			_this.levelUp(_this);
			_this.levelDown(_this);
			_this.recycle(_this);

			//绑定保存设置
			_this.saveData(_this);

			//绑定拖拽
			_this.setMenuList.sortable({
				helper: 'clone',
				revert:true,
				start: function (event,ui){
					ui.item.data('startIndex',ui.item.index());
				},
				stop: function( event, ui ) {
					var sIndex = ui.item.data('startIndex'),
						eIndex = ui.item.index(),
						sortData = _this.tempData.splice(sIndex,1)[0];
					_this.tempData.splice(eIndex,0,sortData);
					
					event.stopPropagation();
				},
			});
		},

		//关闭自定义界面
		closeCustom:function (_this){
			_this.setMenuList.empty();//清空一级列表DOM
			_this.setSecondaryWrap.empty();//清空次级列表DOM
			_this.recycleWrap.empty();//清空回收站列表DOM
			_this.setWrap.remove();//移除DOM
			_this.customMask.remove();//移除遮罩DOM
			_this.tempData = JSON.parse(JSON.stringify(_this.storageData));//数据还原
			_this.recycleTempData = JSON.parse(JSON.stringify(_this.recycleData));//数据还原
		},

		//显示自定义次级菜单
		showSecondary: function (_this){

			//事件委托至一级列表包裹层
			this.setMenuList.delegate('a span','click',function (ev){
				var ev = ev || window.event,//获取事件对象
					_index = $(this).parent().index(),//点击元素的索引
					htmlStr = '',
					set_level = _this.setSecondaryWrap.children('.set_level'),//以显示的二级列表包裹子元素的个数
					d = _this.tempData[_index].list;//自定义界面使用的是数据容器对应激活的数据
				
				//判断是否存在下一级列表，存在则生成html字符串，否则不生成输出“无”
				if (d){
					for (var i = 0; i < d.length; i++) {
						if (d[i].list){
							htmlStr += '<dd><span>'+d[i].itemTitle+'</span><i class="set_hasnext"></i></dd>'
						}else{
							htmlStr += '<dd><span>'+d[i].itemTitle+'</span></dd>'
						}
					};
				}else {
					htmlStr = '<dd>（无）</dd>';
				}

				//点击后的DOM变化
				$(this).parent().addClass('active').siblings('a').removeClass('active');//激活状态变化

				//若已显示出二或次级列表，清空二级以下的列表，仅二级列表变化，不存在则创建二级
				if (set_level.length > 0){
					set_level.children('dd').remove().end().append('<dd>(无)</dd>');
					set_level.first().children('dd').remove().end().append($(htmlStr));
				}else {
					htmlStr = '<dl class="set_level">'
							+'<dt>二级菜单</dt>'
							+htmlStr+'</dl>';
					$(htmlStr).appendTo(_this.setSecondaryWrap);
				}

				//将被激活的元素的索引值记录，便于后面的使用
				_this.setMenuList.data('index',_index);

				//绑定拖拽
				_this.setSecondaryWrap.find('.set_level').eq(0).sortable({
					revert:true,
					items: "> dd",
					axis: 'y',
					start: function (event,ui){
						ui.item.data('startIndex',(ui.item.index()-1));
						event.stopPropagation();
					},
					stop: function( event, ui ) {
						var sIndex = ui.item.data('startIndex'),
							eIndex = ui.item.index()-1,
							sortData = [];
						if ( ui.item.parent().index() == 0 ){
							sortData = _this.tempData[_index].list.splice(sIndex,1)[0];
							_this.tempData[_index].list.splice(eIndex,0,sortData);
						}else if(ui.item.parent().index() == 1) {
							//sortData = _this.tempData[_index].list[sIndex];
						}
						
						event.stopPropagation();
					}
				});
			})
			
		},

		//显示自定义二级列表后面的列表
		showNextLevel: function (_this){
			
			this.setSecondaryWrap.delegate('span','click',function (ev){
				//查询需要展现次级目录的数据源
				var ev = ev || window.event,
					dd = $(this).parent(),
					_index = dd.index()-1,//排除dt元素
					set_level = _this.setSecondaryWrap.children('.set_level'),
					parentIndex = dd.parent().index('.set_level'),//菜单列表包裹层的索引
					htmlStr = '',
					data = _this.tempData[_this.setMenuList.data('index')];//数据使用一级菜单激活的二级列表数据
				
				dd.addClass('active').siblings('dd').removeClass('active');
				dd.parent().data('index',_index);//点击后将索引值存至包裹层供后续利用
				
				//循环找到需要展示的次级列表的数据
				for (var i = 0; i < (parentIndex+1); i++) {
					if (data.list){
						data = data.list[set_level.eq(i).data('index')];
					}
				};
				
				//数据找到后的DOM操作
				if (data.list){
					for(var i=0;i<data.list.length;i++){
						if (data.list[i].list){
							htmlStr += '<dd><span>'+data.list[i].itemTitle+'</span><i class="set_hasnext"></i></dd>';
						}else {
							htmlStr += '<dd><span>'+data.list[i].itemTitle+'</span></dd>';
						}
						
					}
				}

				//根据次级数据是否存在做不同处理
				if (htmlStr){
					//存在时，如果列表的数量大于要展示的级别，要先将后面列表清空为“无”
					if (set_level.length > parentIndex+1){

						set_level.eq(parentIndex).nextAll('.set_level').children('dd').remove().end().append('<dd>(无)</dd>');
						set_level.eq(parentIndex+1).children('dd').remove().end().append($(htmlStr));
					
					}else {

						//没有显示，则创建下级列表DOM（数据源超过四级时注意修改代码）
						htmlStr = '<div class="set_arrow"></div>'
							+'<dl class="set_level">'
							+'<dt>'+(parentIndex==0 ? '三' : '四')+'级菜单</dt>'
							+htmlStr+'</dl>';
						$(htmlStr).appendTo(_this.setSecondaryWrap);
					
					}
				}else {
					//次级列表不存在则清空后续列表为“无”
					if (set_level.length > parentIndex+1){
						
						set_level.eq(parentIndex).nextAll('.set_level')
						.children('dd').remove().end().append('<dd>(无)</dd>');
					}
				}

				_this.setSecondaryWrap.find('.set_level').eq(1).sortable({
					revert:true,
					items: "> dd",
					axis: 'y'
				});
				//阻止事件传播
				ev.stopPropagation();
			})
			
		},

		//次级菜单升级为一级菜单
		levelUp: function (_this){
			
			this.setSecondaryWrap.delegate('.set_hasnext','click',function (ev){
				//查询需要升为一级目录的数据源

				var ev = ev || window.event,
					dd = $(this).parent(),
					_index = dd.index()-1,
					set_level = _this.setSecondaryWrap.children('.set_level'),
					htmlStr = htmlStr2 = '',
					parentIndex = dd.parent().index('.set_level'),
					data = _this.tempData[_this.setMenuList.data('index')];

				dd.parent().data('index',_index);

				//找到升级的源数据
				for (var i = 0; i < (parentIndex+1); i++) {
					if (data.list){
						data = data.list[set_level.eq(i).data('index')];
					}
				};

				//数据源找到后的DOM变化
				htmlStr = '<a href="javascript:;"><span>'+data.itemTitle+'</span><i class="set_delete_btn"></i></a>';
				_this.setMenuList.append($(htmlStr));
				dd.remove();

				//次级列表显示数量大于当前列表级别时则清空后续列表为“无”
				if (set_level.length > parentIndex+1){
					
					set_level.eq(parentIndex).nextAll('.set_level')
					.children('dd').remove().end().append('<dd>(无)</dd>');
				}

				//在生成的一级目录的DOM元素上挂载这个数据在原始数据的索引，用reference存储
				//数据变化处理：将找到的数据加到一级，并从原位置删除
				_this.tempData.push(data);
				switch (parentIndex){
					case 0:
						$('.set_menu_wrap a').last().data('reference',[_this.setMenuList.find('a.active span').text()]);
						_this.tempData[_this.setMenuList.data('index')].list.splice(_index,1);
						break;
					case 1:
						$('.set_menu_wrap a').last().data('reference',[_this.setMenuList.find('a.active span').text(),set_level.eq(0).find('dd.active').text()]);
						_this.tempData[_this.setMenuList.data('index')].list[set_level.eq(0).data('index')].list.splice(_index,1);
						break;
				}

				ev.stopPropagation();
			})
		},
		//绑定降级或者放入回收站事件
		levelDown:function (_this){
			
			this.setMenuList.delegate('.set_delete_btn','click',function (ev){

				var ev = ev || window.event,
					a = $(this).parent(),
					re = a.data('reference'),
					_index = a.index(),
					htmlStr = '<dd><span>'+_this.tempData[_index].itemTitle+'</span><i class="set_hasnext"></i></dd>'
					n = m = 0;
				
				//改变元素css状态为运动效果做准备	
				a.css({
					position:'absolute',
					top: a.position().top,
					left: a.position().left,
					zIndex:10001
				})
				//若点击的是处于激活状态的一级菜单，要将所有列表清空为“无”
				if ( a.is('.active') ){
					$('.set_level').find('dd').remove().end().append('<dd>(无)</dd>');
				}

				//升级上去的生成的一级标签挂有数据，没有则为初始化的数据，需放入回收站
				//有则要进行还原操作
				if ( re ){

					//找到处于激活状态的元素的当前索引
					_this.setMenuList.find('a').each(function (i){
						if ( $(this).find('span').text() == a.data('reference')[0] ) n = i;
					});
					switch (re.length){
						case 1:

							//数据还原回去
							//_this.tempData[re[0]].list.splice(re[1],0,_this.tempData[_index]);
							_this.tempData[n].list.push(_this.tempData[_index]);

							//若原先一级菜单扔处于active激活状态，有DOM还原的添加效果，
							//否则没有，只有数据变化

							//返回二级目录的运动效果
							a.animate({
								top:240,
								left:100,
								opacity: 0
							},1000,function (){
								//运动效果结束后才能删除DOM否则会出错，因为函数1秒后才执行
								if ( _this.setMenuList.find('a.active').index() == n ){
									$('.set_level').eq(0).find('dd').last().after($(htmlStr));
								}
								a.remove();
								//元素被移出改变了一级菜单中激活元素的索引，这里要重新获取索引
								_this.setMenuList.data('index',_this.setMenuList.find('a.active').index());
								
							})
							break;
						case 2:
							$.each(_this.tempData[n].list,function (i,n){
								if (n.itemTitle == re[1]) m = i;
							})
							//_this.tempData[re[0]].list[re[1]].list.splice(re[2],0,_this.tempData[_index]);
							_this.tempData[n].list[m].list.push(_this.tempData[_index]);

							//返回三级目录的运动效果
							a.animate({
								top:240,
								left:360,
								opacity: 0
							},1000,function (){
								
								if ( _this.setMenuList.find('a.active').index() == n ){
									$('.set_level').eq(1).find('dd').last().after($(htmlStr));
								}
								a.remove();
								_this.setMenuList.data('index',_this.setMenuList.find('a.active').index());
								
							})
							
							break;
					}
				}else {
					//没有数据说明是初始一级菜单,需放入回收站数据容器
					_this.recycleTempData.push(_this.tempData[_index]);

					a.animate({
						top:_this.setRecycle.position().top,
						left:_this.setRecycle.position().left,
						opacity: 0
					},1000,function (){
						a.remove();
						_this.setMenuList.data('index',_this.setMenuList.find('a.active').index());
						
					})
				}

				//同时在临时数据容器中删除当前数据
				_this.tempData.splice(_index,1);

				ev.stopPropagation();
			})
		},

		//回收站事件绑定
		recycle: function (_this){
			
			this.setRecycle.click(function (){
				
				var htmlStr = '';
				//若回收站数据容器有数据，说明有初始化的一级菜单被删除，否则没有
				if (_this.recycleTempData){
					for (var i = 0; i < _this.recycleTempData.length; i++) {
						htmlStr += '<div class="set_add_backwrap"><span>'+ _this.recycleTempData[i].itemTitle+'</span><i class="set_add_back"></i></div>'
					};
				}
				//点开后创建遮罩DOM
				$(htmlStr).appendTo(_this.recycleWrap);
				_this.recycleCloseBtn.appendTo(_this.recycleWrap);
				_this.recycleWrap.appendTo(_this.recycleMask);
				_this.recycleMask.appendTo($(document.body));

				//关闭回收站，清空回收站DOM(因为再次显示的时候会重新根据数据创建)
				_this.recycleCloseBtn.click(function (){
					_this.recycleWrap.empty();
					_this.recycleMask.remove();
				})

				//数据还原事件绑定
				_this.recycleWrap.delegate('.set_add_back','click',function (){
					var _index = $(this).parent().index(),
						htmlStr = '<a href="javascript:;"><span>'+_this.recycleTempData[_index].itemTitle+'</span><i class="set_delete_btn"></i></a>';
					
					//还原的DOM变化
					_this.setMenuList.append($(htmlStr));
					$(this).parent().remove();

					//还原的数据变化(根据原模型，数据顺序为压入到数组最后一个)
					_this.tempData.push(_this.recycleTempData[_index]);
					_this.recycleTempData.splice([_index],1);
				})
			})

			
		},

		//保存设置事件绑定
		saveData: function (_this){
			
			this.setBtnWrap.delegate('input','click',function (){
				var _index = $(this).index();
				//若选保存设置，要进行数据存储，否则直接关闭
				if (_index == 0){
					//刷新导航菜单的DOM,同时保存数据至storage,便于跨页面传输
					_this.storageData = JSON.parse(JSON.stringify(_this.tempData));
					_this.recycleData = JSON.parse(JSON.stringify(_this.recycleTempData));
					_this.refreshHtml(_this);
				}else {
					//_this.tempData = JSON.parse(JSON.stringify(_this.storageData));
					_this.storageData = JSON.parse(JSON.stringify(_this.initData));
					_this.refreshHtml(_this);
				}
				_this.closeCustom(_this);
			})
		}
	}
	//生成底部历史记录
	function createHistory(href,title){
		var scheme = top.$('#scheme_d'),
			len = scheme.find('.scheme_div').length,
			link = scheme.find('a[data-href]'),
			arr = [],
			hasview = false;
			str = '<div class="scheme_div active"><a href="'+href+'" data-href="'+href+'">'+title+'</a><em></em></div>'
		link.each(function (i){
			var _this = $(this);
			_this.parent().removeClass('active');
			if (_this.text() == title){
				_this.parent().addClass('active').siblings().removeClass('active');
				hasview = true;
			}
		})
		top.$('#mainIframe').attr('src',href);

		if (hasview) return;

		if ( len < 8 ){
			scheme.append($(str));
		}else {
			scheme.find('.scheme_div').first().remove();
			scheme.append($(str));
		}
	}
	//生成右侧历史记录
	function createRecord(href,title){
		var Record = $('#common').find('.common_links_wrap').eq(1),
			links = Record.find('a[data-href]'),
			str = '<li class="common_link"><span class="dian">●</span><a data-href="'+href+'" href="javascript:;">'+title+'</a><span class="icon_position"></span><i class="common_closebtn"></i></li>';
			b = false;//控制添加进去的开关

			links.each(function (){
				if ( $(this).text() == title ){
					b = true;
				}
			})

			if ( !b){
				Record.append($(str));
			}
	}

	/**********************************
	 *常用功能操作模块
	*/
	$(function (){
		nav = new Nav();//创建导航对象
		var common = $('#common'),
			w = common.width();
		//显示隐藏操作
		common.find('.common_lable').on('click',function (ev){
			var _this = $(this);
			if ( _this.data('open') ){
				common.animate({'right':-w});
				_this.addClass('common_lable_out');
				_this.data('open',false);
				$('#commonmask').hide();
			}else {
				common.animate({'right':0});
				_this.removeClass('common_lable_out');
				_this.data('open',true);
				$('#commonmask').show();
			}
			ev.stopPropagation();
		})
		$('#commonmask').on('click',function (ev){
			common.animate({'right':-w});
			common.find('.common_lable').addClass('common_lable_out');
			$(this).hide();
			common.find('.common_lable').data('open',false);
			ev.stopPropagation();
		})
		
		$(".common_title_close").on("click",function(){
			common.animate({'right':-w});
			$(".common_lable").addClass('common_lable_out');
			$(".common_lable").data('open',false);
		})
		
		//历史记录点击
		common.find('.common_links_wrap').on('click','a[data-href]',function (){
			createHistory($(this).attr('data-href'),$(this).text());

		})
		//条目删除
		common.find('.common_links_wrap').on('click','.common_closebtn',function (){
			$(this).parent().remove()
		})
		//清空操作
		common.find('.common_info').on('click','a',function (){
			var index =  $('#subnav a').index($('#subnav a').filter('.selected'));
			common.find('.common_links_wrap').eq(index).empty();
		})

		//点击底部历史记录事件
		$('#scheme_d').delegate('a[data-href]','click',function (){
			//alert(1);
			//$('#mainIframe').attr('src',$(this).attr('data-href'));

			//用元素身上存储的位置信息更新当前位置DOM
			nav.getCurrentPostion($(this).data('position'))

			$(this).parent().addClass('active').siblings().removeClass('active');
		})

		//底部历史记录删除操作
		$('#scheme_d').delegate('.scheme_div em','click',function (){
			var schemeLen = null;

			if ( $(this).parent().is('.active') ){
				$(this).parent().remove();
				$('#scheme_d').children('.scheme_div').first().addClass('active');
				if ( $('#scheme_d').children('.scheme_div').length ){				
					$('#mainIframe').attr('src',$('#scheme_d').find('a[data-href]').first().attr('data-href'));
				}else {
					$('#mainIframe').attr('src','welcome.html');
					$('.pbd_tab_current').empty().html('当前位置：<b>主页</b>');
				}
				//setIframeHeight(top.$('#mainIframe').get(0));
			}else {
				$(this).parent().remove();
			}
		})
	})	
})();

/*
 *定义布局对象 
 * */
var PLayout = {
	
	//初始化
	init : function (){
		
	},
	
	//顶部导航
	tnav :'<div class="logo">'
				+'<img src="../../images/CCB_logo.png"/>'
            +'</div>'
          
			+'<div class="page_color_change">'
				+'<div class="phd_search"><input name="" type="text"><a href="#"><img src="../../images/btn_header_seach.jpg"/></a></div>'
				+'<ul class="header_second fr">'
	           		+'<li><a class="nav_second_current phd_welcome" href="../welcome/welcome.html">欢迎页</a></li>'
				    +'<li class="b">'
				    	+'<a class="nav_second_current phd_go" href="#d">转到<span><img src="../../images/icon_triangle.png"/></span></a>'
				    	+'<ul class="header_third">'
				        	+'<li><a href="#">个人网银</a></li>'
				            +'<li><a href="#">善融商务</a></li>'
				            +'<li><a href="#">建设银行首页</a></li>'
				        +'</ul>'
				    +'</li>'
				    +'<li class="b">'
				    	+'<a class="nav_second_current phd_set" href="#d">设置<span><img src="../../images/icon_triangle.png"/></span></a>'
				    	+'<ul class="header_third">'
				        	+'<li><a href="#" id="windowPop_set">系统设置</a></li>'
				            +'<li><a href="#" id="set_index">设为首页</a></li>'
				            +'<li><a class="login_set" href="../../login.html">登录页设置</a></li>'
				        +'</ul>'
				    +'</li>'
				    +'<li class="b">'
				    	+'<a class="nav_second_current phd_more" href="#d">展开更多<span><img src="../../images/icon_triangle.png"/></span></a>'
				    	+'<ul class="header_third" style="width: 107px;">'
				        	+'<li class="phd_service"><a href="#">在线客服</a></li>'
				            +'<li class="phd_faq"><a href="#" id="windowPop_help">帮助</a></li>'
				        +'</ul>'
				    +'</li>'
				    +'<li class="ml10"><a class="nav_second_current phd_exit" href="#">退出</a></li>'
	            +'</ul>'
				+'<p class="clear text_r f12 pt10">尊敬的 ××基金公司 (客户号：P000607305898) ×××，您好！</p>'
        	+'</div>'
        	+'<p class="user_message">'
        		//+'尊敬的一汽大众集团（客户号：SH721984613#12）<b>张翔</b>，您好！'
        	+'</p>'
				+'<!--消息弹窗 START-->'
				+'<div id="window_blue2" class="hide"></div>'
				+'<div class="system_set2 hide">'
					+'<div class="window_blue_header">'
						+'<div class="window_blue_title">系统设置<span><a class="window_blue_close" id="closebt3" href="#"></a></span></div>'
					+'</div>'
					
					+'<div class="window_blue_body" style="height: 464px;">'
						+'<!--页面标签 start-->'
						+'<div class="tabs-com">'
							+'<div class="tabs-com-p28 clearfix" id="set_con">'
								+'<a href="#" class="current">字体设置</a>'
								// +'<a href="#">颜色定制</a>'
								+'<a href="#">辅助功能定制</a>'
								+'<a href="#">恢复默认设置</a>'
							+'</div>'
						+'</div>'
						+'<!--页面标签 end-->'
					
						+'<!--字体设置 START-->'
						+'<div class="window_blue_set mh306 text_c" style="height: 306px;">'
							+'<div class="popUp_font_table pt10 pl10">'
								+'<p class="text_l fb pb10 popUp_font_default_text">默认表格样式</p>'
								+'<div style="width: 1200px;">'
									+'<div class="table_warp">'
										+'<table border="0" cellspacing="0" cellpadding="0" class="set_font_table" width="100%">'
											+'<thead>'
											+'<tr>'
												+'<th width="60" class="text_l" style="padding-left: 10px;"><input type="checkbox" name="allcheck" class="mh5" disabled="disabled"/>全选</th>'
												+'<th>账号</th>'
												+'<th>账户名称</th>'
												+'<th>币种</th>'
												+'<th>开户机构</th>'
												+'<th>签约类型</th>'
												+'<th>账户别名</th>'
											+'</tr>'
											+'<tr>'
												+'<td><input type="checkbox" name="items" class="ml5" disabled="disabled" /></td>'
												+'<td>41050260860800000020</td>'
												+'<td>一汽大众发动机公司</td>'
												+'<td>人民币</td>'
												+'<td>中国建设银行上海分行虹桥分行</td>'
												+'<td>签约账户</td>'
												+'<td>发动机公司</td>'
												+'<td class="text_r">7,190.00</td>'
												+'<td>2015-03-10 09:21:00</td>'
											+'</tr>'
											+'<tr class="odd">'
												+'<td><input type="checkbox" name="items" class="ml5" disabled="disabled" /></td>'
												+'<td>41050260860800000020</td>'
												+'<td>一汽大众工资账户</td>'
												+'<td>人民币</td>'
												+'<td>中国建设银行上海分行虹桥分行</td>'
												+'<td>签约账户</td>'
												+'<td>工资账户</td>'
												+'<td class="text_r">500,000.00</td>'
												+'<td>2015-03-10 10:21</td>'
											+'</tr>'
											+'</thead>'
										+'</table>'
									+'</div>'
								+'</div>'
							+'</div>'
							+'<p style="padding-right: 100px;" class="set_font_size">'
									+'字号大小：'
								+'<input name="radio" class="mr5" type="radio" value="16"><span class="f16">大</span>'
								+'<input name="radio" class="mr5" checked="checked" type="radio" value="14"><span class="f14">中</span>'
								+'<input name="radio" class="mr5" type="radio" value="12"><span class="f12">小</span>'
							+'</p>'
							+'<div class="clearfix" style="width: 280px;margin-left: 252px;">'
								+'<span class="fl">字体：</span>'
								+'<div id="set_font_family" class="fr">'
									    +'<div class="select">'
					                        +'<span>请选择</span>'
					                        +'<input type="hidden" class="define_input" value="">'
					                        +'<a class="hover" href="javascript:;"></a>'
					                    +'</div>'
					                    +'<ul class="option">'
					                        +'<li><a href="javascript:;">宋体</a></li>'
					                        +'<li><a href="javascript:;" style="font-family:微软雅黑">微软雅黑</a></li>'
					                    +'</ul>'
								+'</div>'
							+'</div>'
							+'<div class="text_c window_set_button">'
								+'<a class="pbd_btn_standard pbd_btn_w100 ml15 closebt4">确定</a><a class="pbd_btn_standard pbd_btn_w100 ml15 closebt5">取消</a>'
							+'</div>'
						+'</div>'
						+'<!--字体设置 END-->'
						+'<!--颜色定制 START-->'
						// +'<div></div>'
						+'<!--颜色定制 END-->'
						+'<!--辅助功能 START-->'
						+'<div class="window_help mh355 p20 hide">'

							+'<table class="assist_table">'
								+'<tbody>'
									+'<tr class="">'
										+'<td>'
											+'<input type="checkbox" value="show_sidebar" id="show_sidebar"/><label for="show_sidebar">显示侧边功能栏</label>'
										+'</td>'
										+'<td class="lock_screen">'
											+'<input type="checkbox" checked id="lock_screen_input"/><label for="lock_screen_input">网银登录超时</label>'
											+'<input type="text" class="input" name="lock_screen_minute" value="03" disabled/>分'
											+'<input type="text" class="input" name="lock_screen_second" value="00" disabled/>秒'
										+'</td>'
									+'</tr>'
									+'<tr class=""></tr>'
								+'</tbody>'
							+'</table>'
							+'<div class="text_c window_set_button">'
								+'<a class="pbd_btn_standard pbd_btn_w100 ml15 setSidebar closebt4">确定</a><a class="pbd_btn_standard pbd_btn_w100 ml15 closebt5">取消</a>'
							+'</div>'
						+'</div>'
						+'<!--辅助功能 END-->'
					
						+'<!--默认设置 START-->'
						+'<div class="window_help2 mh355 hide" style="padding-top: 20px;">'
							+'<div class="mb15 pl20">'
								+'<input type="checkbox" class="mr5 allChecked" />全选'
							+'</div>'
					
							+'<ul class="tool_list">'
								+'<li>'
									+'<img src= "../../images/menu/icon_dly.png" />'
									+'<p><input type="checkbox" />登录页</p>'
								+'</li>'
								+'<li>'
									+ '<img src="../../images/menu/icon_hyy.png" />'
									+'<p><input type="checkbox" />欢迎页</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_ztsz.png" />'
									+'<p><input type="checkbox" checked="checked" class="fontSet"/>字体设置</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_ztdz.png" />'
									+'<p><input type="checkbox"  />主题定制</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_ysdz.png" />'
									+'<p><input type="checkbox" />颜色定制</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_gndz.png" />'
									+'<p><input type="checkbox" />功能定制</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_swsy.png" />'
									+'<p><input type="checkbox" checked="checked" class="setIndex"/>设为首页</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_cdlsz.png" />'
									+'<p><input type="checkbox" />菜单栏设置</p>'
								+'</li>'
								+'<li>'
									+'<img src="../../images/menu/icon_xgj.png" />'
									+'<p><input type="checkbox"  />小工具</p>'
								+'</li>'
							+'</ul>'
					
							+'<div class="text_c window_set_button">'
								+'<a class="pbd_btn_standard pbd_btn_w100 ml15 defaultSet closebt4">确定</a><a class="pbd_btn_standard pbd_btn_w100 ml15 closebt5">取消</a>'
							+'</div>'
						+'</div>'
						+'<!--默认设置 END-->'
					+'</div>'
				+'</div>'
				+'<!--消息弹窗 end-->',
        	
        	
	_pnav :'' ,
	
	//右侧功能栏
	_fnMenu :  '<div class="fn_menu_lable fn_menu_lable_out"></div>'
				+ '<div class="fn_menu_hide_msg"></div>'
				+ '<div class="fn_menu_hide_btn"></div>'
					+ '<div class="fn_menu_title_wrap text_c">'
						+ '您好！张翔<i class="fn_menu_question_mark"></i>'
						+ '<span><i class="fn_menu_left_arrow"></i><i class="fn_menu_right_arrow"></i></span>'
						+ '<span class="fn_menu_title_close"><a class="white" href="#" title="关闭">×</a></span>'
					+ '</div>'
					+ '<div class="fn_menu_main_wrap">'
						+ '<div id="submenu" class="clearfix">'
							+ '<!--tag标题-->'
						    + '<ul id="subnav">'
						        + '<li><a href="#" class="selected">常用功能</a></li>'
						        + '<li><a href="#" class="">历史记录</a></li>'
								+ '<li><a href="#" class="">精品推荐</a></li>'
						    + '</ul>'
							+ '<!--二级菜单-->'
						    + '<div id="submenu_con">'
						        + '<div class="tag" style="display:block">'
						        	+ '<ul class="fn_menu_links_wrap">'
						        		+ '<li class="fn_menu_link"><span class="dian">●</span>账户查询<span class="icon_position"></span><i class="fn_menu_closebtn"></i></li>'
										+ '<li class="fn_menu_link hide"><a href="javascript:;">查看工作台</a><i class="fn_menu_closebtn">×</i></li>'
									+ '</ul>'
					         	+ '</div> '
					         	+ '<div class="tag" style="display:none">'
						        	+ '<ul class="fn_menu_links_wrap" style=" height: 282px; overflow: hidden;">'
						        		+ '<li class="fn_menu_link"><span class="dian">●</span>指令业务<span class="icon_position"></span><i class="fn_menu_closebtn"></i></li>'
						        	+ '</ul>'
					        	+ '</div>'
								+ '<div class="tag" style="display:none">'
									+ '<ul class="tag_new_ul">'
										+ '<li class="tag_new_block">'
											+ '<img src="../../images/menu/tag_new_li1.png" alt=""/>'
										+ '</li>'
										+ '<li class="tag_new_a"><a href="javascript:;">查看详情</a></li>'
										+ '<li class="tag_new_block">'
											+ '<img src="../../images/menu/tag_new_li2.png" alt=""/>'
										+ '</li>'
										+ '<li class="tag_new_a"><a href="javascript:;">查看详情</a></li>'
									+ '</ul>'
								+ '</div>'
							+ '</div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="fn_menu_info text_r">'
						+ '<a href="javascript:;">【设置】</a>'
					+ '</div>',
	
	//页脚信息
 	/*_pft :   '<!--通用页尾 start-->'
			+'<p><img src="../../images/login_bgl.png" /><span>中国建设银行 版权所有 '
			+'</p>'
			+'<p>有任何问题请致电：95533或联系您的客户经理</p>'
			+'<!--通用页尾 end-->',*/
			
			_pft : '<!--尾部START-->'
        +'<div style="height: 8px"></div>'
        +'<div id="footer" data-html="false">'
            +'<div class="main_3 hide"></div>'
            +'<div id="footer-con" class="clearfix">'
                +'<div id="footer-copyright">'
                    +'<i class="tit"></i>'
                    +'<p style="font-weight:bold;">'
                        +'<span><img src="../../images/icon/icon-C.png" style="position:relative;top:-2px;">版权所有中国建设银行</span>'
                        +'<span class="footer-copyright1">京ICP备13030780</span>'
                       +'<span>京公网安备：110102000450</span>'
                    +'</p>'
                    +'<p style="font-weight:bold;">'
                        +'<span class="footer-copyright2">总行地址：中国北京西城区金融大街25号</span>'
                        +'<span>邮编：100033</span>'
                    +'</p>'
                    +'<div class="main_2 hide"></div>'
                +'</div>'
                +'<ul id="footer-scan">'
    			+'<li class="scan_1 ">'
				+'</li>'
                   +'<li class="scan_2 ">'
    				+'</li>'
                +'</ul>'
            +'</div>'
        +'</div>'
        +'<!--尾部END-->',
	
	//回到顶部
	_bTt :  '<p >返回顶部</p>',
	
	//底部悬浮层
	_footFloat : '<!--足迹 START-->'
                +'<div id="scheme_d">'
                    +'<div class="scheme_div2">'
                        +'<div style="position:relative;">'
                            +'<img id="bimg" />'
                        +'</div>'
                    +'</div>'

                    +'<div class="scheme_div active"><img src="../../images/foot_show_window.png" class="foot_show_window hide"><a href="../zhcx/jxhqzh_1.html" data-href="../../zhcx/zhxxcx/jxhqzh_1.html">建行活期账户</a><em></em></div>'
                +'</div>'
                +'<!--足迹END-->'
                +'<!-- 底部工具栏START-->'
                +'<div class="scheme_r">'
                    +'<a href="javascript:;" id="windowPop">'
                        +'<div class="scheme_r_info">'
							+'<span>2</span>'
						+'</div>'
                    +'</a>'
                    +'<a href="javascript:;">'
                        +'<div class="scheme_r_tool"></div>'
                    +'</a>'
					+'<!-- 底部消息 START-->'
					+'<div class="min-remind">'
						+'<div class="min-remind-title">提醒'
							+'<span class="min-remind-minimize"></span>'
						+'</div>'
						+'<div class="min-remind-contains">'
							+'<ul>'
								+'<li>您有<span class="number">1</span>笔<a href="javascript:;">转账</a>业务待复核</li>'
								+'<li>您有<span class="number">3</span>笔<a href="javascript:;">代发代扣</a>业务待复核</li>'
								+'<li>您有<span class="number">3</span>笔<a href="javascript:;">网银循环贷</a>业务待复核</li>'
							+'</ul>'
							+'<div class="min-remind-foot">'
								+'<a href="javascript:;">查看更多</a>'
								+'<div class="min-remind-show">'
									+'<input type="checkbox" class="min-remind-no-show-again"/>下次不显示提示框'
								+'</div>'
							+'</div>'
							+'<div class="min-remind-arrow"></div>'
						+'</div>'
					+'</div>'
					+'<!--底部消息 END-->'
                +'</div>'
                +'<!--底部工具栏END-->'
                +'<!--底部工具 START-->'
                +'<div class="fixed_tool hide">'
                    +'<div class="fixed_tool_title">'
                        +'<h2 class="white">小工具</h2>'
                        +'<a class="fixed_tool_reduce" href="#"></a>'
                    +'</div>'
                    +'<div class="box-content">'
                        +'<div class="b-tool">'
                            +'<span><img src="../../images/menu/small_hlb.png"/><p><a href="###" class="blue interestRate_popUp">利率表</a></p></span>'
                            +'<span><img src="../../images/menu/big_kszt.png"/><p><a href="###" class="blue">快速截图</a></p></span>'
                            +'<span><img src="../../images/menu/magnifying_glass.png"/><p><a href="###" class="blue">放大镜</a></p></span>'
							+'<span><img src="../../images/calculator.png"/><p><a href="javascript:;" class="blue">计算器</a></p></span>'
                        +'</div>'
                    +'</div>'
                    +'<div class="b-tool-add"><a href="javascript:;" class="blue edit">编辑</a></div>'
                    +'<div class="fixed_tool_arrow"></div>'
                +'</div>'
                +'<!--底部工具 END-->'
	            +'<!--小工具(编辑)弹窗 start-->'
				+'<div id="window_blue" class="hide"></div>'
				+'<div class="system_set hide">'
					+'<div class="window_blue_header">'
						+'<div class="window_blue_title">小工具<span><a class="window_blue_close closebt3" href="#"></a></span></div>'
					+'</div>'
					+'<div class="window_blue_body pt30">'
						+'<ul class="tool_list">'
							+'<li>'
								+'<img src="../../images/menu/big_hlb.png"/>'
								+'<p><input type="checkbox" checked="checked" class="mytool" />利率表</p>'
							+'</li>'
							+'<li>'
								+'<img src="../../images/menu/magnifying_glass.png"/>'
								+'<p><input type="checkbox" class="mytool" checked/>放大镜</p>'
							+'</li>'
							+'<li>'
								+'<img src="../../images/menu/big_kszt.png"/>'
								+'<p><input type="checkbox" class="mytool" checked="checked"/>快速截图</p>'
							+'</li>'
							+'<li>'
								+'<img src="../../images/calculator.png"/>'
								+'<p><input type="checkbox" class="mytool" checked/>计算器</p>'
							+'</li>'
						+'</ul>'
					+'</div>'
					+'<div class="text_c window_set_button">'
						+'<a class="pbd_btn_standard pbd_btn_w100 ml10 set_tool_btn closebt4">确定</a>'
					+'</div>'
				+'</div>'
				+'<!--小工具(编辑)弹窗 end-->'
				+'<!--小工具(利率表)弹窗 start-->'
				+'<div id="window_blue3" class="hide"></div>'
				+'<div class="system_set3 hide">'
					+'<div class="window_blue_header">'
						+'<div class="window_blue_title">利率表<span><a class="window_blue_close closebt3" href="#"></a></span></div>'
					+'</div>'
					+'<div class="window_blue_body">'
						+'<!--利率表内容START-->'
						+'<div class="p20 pl20">'
							+'<div class="popUp_interestRate_relative">'
						        +'<div id="choose_llb" class="">'
						            +'<div class="select">'
						                +'<span>请选择时间</span>'
						                +'<input type="hidden" class="define_input" value="">'
						                +'<a class="hover" href="javascript:;"></a>'
						            +'</div>'
						            +'<ul class="option">'
						                +'<li><a href="javascript:;">2015-08-06</a></li>'
						                +'<li><a href="javascript:;">2015-06-28</a></li>'
						            +'</ul>'
						        +'</div>'
						        +'<div class="popUp_interestRate_infoTips">'
						   			+'<span class="pl212 thatTime ff-st" >日期：2012-07-06</span>'
						        +'</div>'
							+'</div>'
							
							+'<div class="popUp_interestRate_table mt15">'
								+'<ul>'
									+'<li class="bgc8e0f5 fb">项目</li>'
									+'<li class="bgc8e0f5 fb">年利率(％)</li>'
								+'</ul>'
								+'<div class="table_box">'
									+'<table border="0" cellspacing="0" cellpadding="0" class="pbd_table_show" width="100%">'
						                
						            +'</table>'
								+'</div>'
						    +'</div>'
						+'</div>'
						+'<!--利率表END-->'
					+'</div>'
				+'</div>'
				+'<!--小工具(利率表)弹窗 end-->'
				+'<!-- 计算器 START-->'
					+ '<div id="calculator_mark"></div>'
					+'<div id="calculator">'
						+'<div class="calculator_title">计算器 <span class="calculator_min"></span></div>'
						+'<div id="calculator_content">'
							+'<h3><input id="calculator_input" type="text" value="0" /></h3>'
							+'<ul>'
								+'<li>7</li>'
								+'<li>8</li>'
								+'<li>9</li>'
								+'<li>+</li>'
								+'<li>4</li>'
								+'<li>5</li>'
								+'<li>6</li>'
								+'<li>-</li>'
								+'<li>1</li>'
								+'<li>2</li>'
								+'<li>3</li>'
								+'<li>×</li>'
								+'<li>0</li>'
								+'<li>C</li>'
								+'<li>=</li>'
								+'<li>÷</li>'
							+'</ul>'
						+'</div>'
					+'<div id="calculatorBg"></div>'

				+'</div>'
				+'<!-- 计算器END -->'
				
};

/*
 * 加载页面部件
 */
$(function(){
	var _tnav	    = $("#phd_common"), //顶部导航
		//_pnav	    = $("#pnav"),		 //
		_fnMenu     = $('#fn_menu'),	 //侧边功能栏
		_pft        = $('#pft_common'), //底部信息
		_bTt        = $('#back_to_top'), //返回顶部
		_footFloat = $('#foot_float'); //底部悬浮层
		
		
	if(_tnav.length){
		_tnav.html(PLayout.tnav);
	};
	if (_fnMenu.length) {
		_fnMenu.html(PLayout._fnMenu);
	};
	if (_pft.length) {
		_pft.html(PLayout._pft);
	};
	if (_bTt.length) {
		_bTt.html(PLayout._bTt);
	};
	if (_footFloat.length) {
		_footFloat.html(PLayout._footFloat);
	}
	
});


$(function(){
	$(".nav_div").click(function(){

		 if ($("#pnav .hideNav").hasClass("hide")) {
	       $("#pnav .hideNav").removeClass("hide");
	    } else {
	       $("#pnav .hideNav").addClass("hide");
	    }
	})
	$(".nav_third_cddt").click(function(){
		$("#pnav .hideNav").addClass("hide");
		$('#mainIframe').attr('src','html/menu/cddt.html');
		$(".pbd_tab_current").text("当前位置：菜单地图");
	})
	
	$(".nav_third_szyjcd").click(function(){
		$("#pnav .hideNav").addClass("hide");
		$('#mainIframe').attr('src','html/menu/dyzfsq_1.html');
		$(".pbd_tab_current").text("当前位置：设置一级菜单");
	})
})













