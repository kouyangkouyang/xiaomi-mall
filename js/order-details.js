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
	
	
	
	// 点击取消订单弹窗
	$('.cancel-order').click(function(){
		$('.cancelOrder-window-box').css({
			'display':'block'
		})
		$('.cancelOrder-window-con').css({
			'display':'block'
		})
	})
	// 点击关闭请选择关闭弹窗
	$('.cancelOrder-window-close span').click(function(){
		$('.cancelOrder-window-box').css({
			'display':'none'
		})
		$('.cancelOrder-window-con').css({
			'display':'none'
		})
	})
	$('.cancelOrder-window-con .cancelOrder-window-cancel').click(function(){
		$('.cancelOrder-window-box').css({
			'display':'none'
		})
		$('.cancelOrder-window-con').css({
			'display':'none'
		})
	})
	
	
	
	
	// 修改地址验证弹窗
	$('.get-infor-box .edit-btn').click(function(){
		$('.getInfor-window-box').css({
			'display':'block'
		})
		$('.getInfor-window-con').css({
			'display':'block'
		})
	})
	// 点击关闭请选择关闭弹窗
	$('.getInfor-window-close span').click(function(){
		$('.getInfor-window-box').css({
			'display':'none'
		})
		$('.getInfor-window-con').css({
			'display':'none'
		})
	})
	$('.getInfor-window-con .getInfor-window-cancel').click(function(){
		$('.getInfor-window-box').css({
			'display':'none'
		})
		$('.getInfor-window-con').css({
			'display':'none'
		})
	})
	
	// 修改：表单焦点事件
	$('.getInfor-window-tip .verify-box .text').focus(function(){
		$(this).css({
			border: '1px solid #ff6700'
		})
		$('.getInfor-window-tip .verify-box .tips').css({
			transform: 'translate3d(14px,7px,0)',
			'font-size': '12px',
			width: '40px',
			color: '#FF6700'
		})
	})
	$('.getInfor-window-tip .verify-box .text').blur(function(){
		$(this).css({
			border: '1px solid #B0B0B0'
		})
		$('.getInfor-window-tip .verify-box .tips').css({
			transform: 'translate3d(15px,25px,0)',
			'font-size': '14px',
			width: '50px',
			color: '#B0B0B0'
		})
		if( this.value != '' ){
			$('.getInfor-window-tip .verify-box .tips').css({
				transform: 'translate3d(14px,7px,0)',
				'font-size': '12px',
				width: '40px',
				color: '#B0B0B0'
			})
		}
	})
	
	// 验证码发送事件
	var deadtime = 10;
	$('.verify-box .verify-btn').click(function(){
		$(this).css({
			'background-color': 'rgb(224,224,224)',
			'color':'#b0b0b0',
			cursor:'default'
		})
		$(this).prop('disabled','false');
		$(this).val('10s '+'后可重发')
		
		var timer = setInterval(function(){
			deadtime--;
			$('.verify-box .verify-btn').val(deadtime+'s '+'后可重发')
			if( deadtime <= 0 ){
				clearInterval(timer);
				deadtime = 10;
				$('.verify-box .verify-btn').css({
					'background-color': '#ff6700',
					'color':'white',
					cursor:'pointer'
				})
				$('.verify-box .verify-btn').removeAttr('disabled');
				$('.verify-box .verify-btn').val('重新发送')
			}
		},1000)
		
	})
	
	// 链接
	$('.OrderID-btn .now-pay').click(function(){
		location.assign('./confirm-order.html')
	})
	
	
})