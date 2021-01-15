$(function(){
	
	// 导航栏搜索框
	for (var i = 0; i < select_list.length; i++) {
		$(`<li>${select_list[i]}</li>
		`).appendTo('.nav-mid .select .list');
	}

	$('.nav-mid .select .text').focus(function() { // 点击文本框
		$('.nav-mid .select .list').css('display', 'block');
		$('.nav-mid .select .text').css({
			'border': '1px solid #ff6700',
			'borderRight': 0
		});
		$('.nav-mid .select .icon').css({
			'border': '1px solid #ff6700',
		});
	})
	
	$('.nav-mid .select .text').blur(function() {
		$('.nav-mid .select .list').css('display', 'none');
		$('.nav-mid .select .text').css({
			'border': '1px solid #e0e0e0',
			'borderRight': 0
		});
		$('.nav-mid .select .icon').css({
			'border': '1px solid #e0e0e0',
		});
	})
	
	// 导航栏下拉列表数据导入
	for (var i = 0; i < children_phone.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_phone[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_phone[i].title}</div>
						<div class="price">${children_phone[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .phone')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_phone[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_phone[i].title}</div>
						<div class="price">${children_phone[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .phone')
		}
	}
	for (var i = 0; i < children_red.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_red[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_red[i].title}</div>
						<div class="price">${children_red[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .red')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_red[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_red[i].title}</div>
						<div class="price">${children_red[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .red')
		}
	}
	for (var i = 0; i < children_tel.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_tel[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_tel[i].title}</div>
						<div class="price">${children_tel[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .tel')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_tel[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_tel[i].title}</div>
						<div class="price">${children_tel[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .tel')
		}
	}
	for (var i = 0; i < children_note.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_note[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_note[i].title}</div>
						<div class="price">${children_note[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .note')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_note[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_note[i].title}</div>
						<div class="price">${children_note[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .note')
		}
	}
	for (var i = 0; i < children_elec.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_elec[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_elec[i].title}</div>
						<div class="price">${children_elec[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .elec')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_elec[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_elec[i].title}</div>
						<div class="price">${children_elec[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .elec')
		}
	}
	for (var i = 0; i < children_web.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_web[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_web[i].title}</div>
						<div class="price">${children_web[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .web')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_web[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_web[i].title}</div>
						<div class="price">${children_web[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .web')
		}
	}
	for (var i = 0; i < children_smart.length; i++) {
		if (i == 0) {
			$(
				`
					<li class="first">
						<a href="">
							<div class="figure">
								<img src="${children_smart[i].pic}" width="160" height="110">
							</div>
							<div class="tiltle">${children_smart[i].title}</div>
							<div class="price">${children_smart[i].price}</div>
						</a>
					</li>
				`
			).appendTo('.nav-mid .itemChildren .smart')
		} else {
			$(
				`
					<li>
						<a href="">
							<div class="figure">
								<img src="${children_smart[i].pic}" width="160" height="110">
							</div>
							<div class="tiltle">${children_smart[i].title}</div>
							<div class="price">${children_smart[i].price}</div>
						</a>
					</li>
				`
			).appendTo('.nav-mid .itemChildren .smart')
		}
	}
	
	
	// 侧边栏 回到顶部
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= 1000) {
			$('.sidebar .last').css('display', 'block')
		} else {
			$('.sidebar .last').css('display', 'none')
		}
	}
	$('.sidebar .last').click(function() {
		window.scrollTo(0, 0);
	})
	
	// 轮播区域列表 最外层div=slide-list
	// 一级 外层ul=list-stair  标题层li=stair-item  a  span/icon
	// 二级 与一级a同级 div   ul  li  a/span
	var Div = $('.nav-mid .perch .perch-item')[0];
	//console.log(Div)
	var mUl, mLi, mA, mSpan, mIcon;
	var subDiv, subUl, subLi, subA, subImg, subSpan;
	/* 过滤出一级标题 */
	var primary = slide_list.filter(function(item) {
		return item.subId == 0;
	});
	//console.log(primary)
	
	mUl = document.createElement('ul');
	mUl.className = 'list-stair';
	for (var i = 0; i < primary.length; i++) {
		mLi = document.createElement('li'); // 创建li
		mLi.className = 'stair-item';
	
		mA = document.createElement('a'); // 创建li里面的a
		mSpan = document.createElement('span');
		mIcon = document.createElement('i');
		mA.appendChild(mSpan);
		mA.appendChild(mIcon);
		mLi.appendChild(mA);
	
		mSpan.innerText = primary[i].name;
		mIcon.className = 'icon';
		mIcon.innerHTML = primary[i].icon;
		mA.href = '#';
	
		subDiv = document.createElement('div'); // 创建一级中的二级外框
		subDiv.className = 'list-sub';
		mLi.appendChild(subDiv);
	
		// 创建二级内容 先过滤出subId 与id相同的
		// 二级 与一级a同级 div   ul  li  a img/span
		var sub = slide_list.filter(function(item) {
			return item.subId == primary[i].id;
		});
		//console.log(sub)
		for (var j = 0; j < sub.length; j++) {
			if (j % 6 == 0) {
				subUl = document.createElement('ul'); // 每创建一个ul，subUl会变成新的
			}
			subLi = document.createElement('li');
			subA = document.createElement('a');
			subA.href = '#';
			
			subImg = document.createElement('img');
			subImg.src = sub[j].pic;
			subSpan = document.createElement('span');
			subSpan.innerText = sub[j].name;
			
			subA.appendChild(subImg);
			subA.appendChild(subSpan);
			subLi.appendChild(subA);
			subUl.appendChild(subLi);
			subDiv.appendChild(subUl)
		}
	
		mUl.appendChild(mLi);
	}
	Div.appendChild(mUl);
	
	// 全部商品分类下拉列表
	$('.nav-mid .perch').hover(function(){
		$('.nav-mid .perch .perch-item').css('display','block');
	},function(){
		$('.nav-mid .perch .perch-item').css('display','none');
	})
	

	//换图片
	var cou = 0;
	setInterval(function(){
		cou++;
		// 偶数时绿色图，奇数时黄色图
		if(cou%2==0){
			$('.copy .pic .footer_log').html('<img src="./img/ad.png" >')
		}else if(cou%2!=0){
			$('.copy .pic .footer_log').html('<img src="./img/ss.png" >')
		}
	},3000)
	
	
	// 点击添加地址弹窗
	$('.add-adrs .adrs-box').click(function(){
		$('.address-window-box').css({
			'display':'block'
		})
		$('.address-window-con').css({
			'display':'block'
		})
	})
	// 点击关闭请选择关闭弹窗
	$('.address-window-close span').click(function(){
		$('.address-window-box').css({
			'display':'none'
		})
		$('.address-window-con').css({
			'display':'none'
		})
	})
	$('.address-window-con .address-window-cancel').click(function(){
		$('.address-window-box').css({
			'display':'none'
		})
		$('.address-window-con').css({
			'display':'none'
		})
	})
	
	// 姓名事件：
	$('.name-tel-box .name-box').click(function(){
			$('.name-tel-box .name-box').find('input').css({
				'border-color': '#e0e0e0'
			})
			$('.name-tel-box .name-box').find('p').css({
				'color': '#b0b0b0',
				'font-size': '14px',
				'transform': 'translate3d(35px,9px,0)'
			})
			$(this).find('input').css({
				'border-color': '#ff6700'
			})
			$(this).find('p').css({
				'color': '#ff6700',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
	})
	$('.name-tel-box .name-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 电话框事件：
	$('.name-tel-box .tel-box').click(function(){
			$('.name-tel-box .tel-box').find('input').css({
				'border-color': '#e0e0e0'
			})
			$('.name-tel-box .tel-box').find('p').css({
				'color': '#b0b0b0',
				'font-size': '14px',
				'transform': 'translate3d(35px,9px,0)'
			})
			$(this).find('input').css({
				'border-color': '#ff6700'
			})
			$(this).find('p').css({
				'color': '#ff6700',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
	})
	$('.name-tel-box .tel-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 详细地址
	$('.detailed-address-box').click(function(){
		$(this).find('textarea').css({
			'border-color': '#ff6700'
		})
		$(this).find('p').css({
			'color': '#ff6700',
			'font-size': '12px',
			'width': '50px',
			'transform': 'translate3d(33px,-10px,0)'
		})
	})
	$('.detailed-address-box textarea').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'width': '300px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'width': '50px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 地址标签
	$('.address-labels-box').click(function(){
		$(this).find('input').css({
			'border-color': '#ff6700'
		})
		$(this).find('p').css({
			'color': '#ff6700',
			'font-size': '12px',
			'width': '50px',
			'transform': 'translate3d(33px,-8px,0)'
		})
	})
	$('.address-labels-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'width': '300px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'width': '50px',
				'transform': 'translate3d(33px,-8px,0)'
			})
		}
	})
	
	// 选择市区街道
	   // 点击打开窗口
	$('.addre-box .addre-con').click(function(){
		var isAdd = true;
		$('.search-addre-box').css({
			'display':'block'
		})
	})
	   // 点击关闭窗口
	$('.search-addre-con .close-btn').click(function(){
		$('.search-addre-box').css({
			'display':'none'
		})
	})
	   //点击切换窗口
	$('.tab-control .search').click(function(){
		$('.select-box').css({
			'display':'none'
		})
		$('.search-con').css({
			'display':'block'
		})
		$(this).css({
			'display':'none'
		})
		$('.tab-control .sele').css({
			'display':'block'
		})
		
	})
	$('.tab-control .sele').click(function(){
		$('.select-box').css({
			'display':'block'
		})
		$('.search-con').css({
			'display':'none'
		})
		$(this).css({
			'display':'none'
		})
		$('.tab-control .search').css({
			'display':'block'
		})
	})
	
	// 插入省级数据
	for( var i in address_arr){
		$(`
			<li valu = '${i}'> ${i} </li>
		`).appendTo('.area .area-item')
	}
	// 套层
	// 省》市级  省赋值》切换市级
	for(var i=0;i<$('.area .area-item li').length;i++){
		$('.area .area-item li')[i].onclick = function(){
			$('.area-sele .province').html($(this).attr('valu'))
			$('.area-sele .province').css({
				color:'#ff6700'
			})
			$('.area .area-item li').empty();  // 清除节点中的元素
			var city_val = address_arr[$(this).attr('valu')];
			for( var i in city_val){
				$(`
					<li valu = '${city_val[i]}'> ${city_val[i]} </li>
				`).appendTo('.area .area-item')
			}
			// 市》区县  市级赋值》切换区县
			for(var j=0;j<$('.area .area-item li').length;j++){
				$('.area .area-item li')[j].onclick = function(){
					//console.log($(this).attr('valu'))
					$('.area-sele .city').html($(this).attr('valu'))
					$('.area-sele .city').css({
						color:'#ff6700'
					})
					$('.area .area-item li').empty();
					var county_val = address_arr[$(this).attr('valu')];
					for( var i in county_val){
						$(`
							<li valu = '${county_val[i]}'> ${county_val[i]} </li>
						`).appendTo('.area .area-item')
					}
					// 区县》配送地区  区县赋值》切换配送地区
					for(var k=0;k<$('.area .area-item li').length;k++){
						$('.area .area-item li')[k].onclick = function(){
							//、console.log($(this).attr('valu'))
							$('.area-sele .county').html($(this).attr('valu'))
							$('.area-sele .county').css({
								color:'#ff6700'
							})
							$('.area .area-item li').empty();
							var delivery_val = address_arr[$(this).attr('valu')];
							for( var i in delivery_val){
								$(`
									<li valu = '${delivery_val[i]}'> ${delivery_val[i]} </li>
								`).appendTo('.area .area-item')
							}
							// 配送地区赋值
							for(var n=0;n<$('.area .area-item li').length;n++){
								$('.area .area-item li')[n].onclick = function(){
									
									$('.area-sele .delivery').html($(this).attr('valu'))
									$('.area-sele .delivery').css({
										color:'#ff6700'
									})
									var province_val = $('.area-sele .province').text();
									var city_val = $('.area-sele .city').text();
									var county_val = $('.area-sele .county').text();
									var delivery_val = $('.area-sele .delivery').text();
									
									// 最终地址栏赋值
									$('.addre-box .addre-con span').html(province_val+' '+city_val+' '+county_val+' '+delivery_val)
									$('.search-addre-box').css({
										'display':'none'
									})
									
								}
							}
						}
					}
				}
			}
		}
	}
	
	
	// 验证信息
	$('.address-window-btn .address-window-sure').click(function(){
		
		var name_val = $('.name-tel-box .name-box input').val();
		var tel_val = $('.name-tel-box .tel-box input').val();
		var addre_val = $('.addre-box .addre-con span').html();
		var addrs_infor = addre_val.split(' ').slice(0,3).join(' ');
		var delivery_infor = addre_val.split(' ')[3];
		var detailed_val = $('.detailed-address-box textarea').val();
		var re = /^1\d{10}/;
		
		if( name_val == '' ){
			$('.name-tel-box .name-box .msg-error').css('display','block')
			$('.name-tel-box .name-box input').blur(function(){
				$('.name-tel-box .name-box .msg-error').css('display','none')
			})
		}else if( !re.test(tel_val) ){
			$('.name-tel-box .tel-box .msg-error').css('display','block')
			$('.name-tel-box .tel-box input').blur(function(){
				$('.name-tel-box .tel-box .msg-error').css('display','none')
			})
		}else if( detailed_val == '' || detailed_val.length <= 5 || detailed_val.length >= 32 ){
			$('.detailed-address-box .msg-error').css('display','block')
		}else{
			$('.address-window-con .msg-error').css('display','none')
			$(`
				<li class="myAddr">
					<h2 class="name">${ name_val }</h2>
					<span class="tel">${ tel_val }</span>
					<span class="addrs">${ addrs_infor }</span>
					<span class="delivery">${ delivery_infor }</span>
					<span class="deta">${ detailed_val }</span>
					<div class="btn">
						<div class="btn-edit"><a href="#">修改</a></div>
						<div class="btn-del"><a href="#">删除</a></div>
					</div>
				</li>
			`).prependTo('.addr-con .myAddr-con')
			
			// 地址删除事件
				delAddress();
			
			// 地址修改事件
				changeAddress();
		}	
	})
	
	
	// 地址修改事件
	function changeAddress(){
		for( var i=0;i<$('.myAddr-con .myAddr .btn-edit').length;i++){
			$('.myAddr-con .myAddr .btn-edit')[i].onclick = function(ev){
				var ev = event ||window.event;
				$('.address-window-box').css({
					'display':'block'
				})
				$('.address-window-con').css({
					'display':'block'
				})
				$('.address-window-btn .address-window-sure').mousedown(function(){
					var name_val = $('.name-tel-box .name-box input').val();
					var tel_val = $('.name-tel-box .tel-box input').val();
					var addre_val = $('.addre-box .addre-con span').html();
					var addrs_infor = addre_val.split(' ').slice(0,3).join(' ');
					var delivery_infor = addre_val.split(' ')[3];
					var detailed_val = $('.detailed-address-box textarea').val();
					
					$(ev.target.parentNode.parentNode.parentNode).find('.name').text( name_val )
					$(ev.target.parentNode.parentNode.parentNode).find('.tel').text( tel_val )
					$(ev.target.parentNode.parentNode.parentNode).find('.addrs').text( addrs_infor )
					$(ev.target.parentNode.parentNode.parentNode).find('.delivery').text( delivery_infor )
					$(ev.target.parentNode.parentNode.parentNode).find('.deta').text( detailed_val )
					ev.target.parentNode.parentNode.parentNode.remove();
					// 把旧的删除之后再添加修改后的新地址
				})
			}
		}
	}
	//调用
	changeAddress();
	
	// 地址删除事件
	function delAddress(){
		for( var i=0;i<$('.myAddr-con .myAddr .btn-del').length;i++){
			$('.myAddr-con .myAddr .btn-del')[i].onclick = function(ev){
				var ev = event || window.event;
				var del_tar = ev.target.parentNode.parentNode.parentNode;
				$('.address-close-window').css({
					'display':'block'
				})
				// 点击关闭请选择关闭弹窗
				$('.address-close-x span').click(function(){
					$('.address-close-window').css({
						'display':'none'
					})
				})
				$('.address-close-con .address-close-cancel').click(function(){
					$('.address-close-window').css({
						'display':'none'
					})
				})
				$('.address-close-con .address-close-sure').click(function(){
					
					del_tar.remove();
					$('.address-close-window').css({
						'display':'none'
					})
					
				})
			}
		}
	}
	delAddress();
	
	
	
	
})