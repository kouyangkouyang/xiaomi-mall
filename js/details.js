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
	
	
	// 侧边栏 回到顶部  以及导航条
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= 1000) {
			$('.sidebar .last').css('display', 'block')
		} else {
			$('.sidebar .last').css('display', 'none')
		}
		if(scrollTop >= 200){
			$('.scroll').css({
				'position':'fixed',
				'top':'0px',
				'z-index':'6'
			})
			
		}else{
			$('.scroll').css({
				'position':'relative',
				'z-index':'3'
			})
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
	
	
	// 轮播图小按钮 划过按钮变颜色  点击换图
	// 当滑过图标的时候：图片不换，图标滑过的&当前显示的图片对应的亮
	$('.img-smbtn span').mouseover(function() {
		$('.img-smbtn span').removeClass('act');
		// 当前图片对应的亮
		$('.img-smbtn span').eq($('.img-item img.act').index()).addClass('act');
		$(this).addClass('act'); //滑过的亮
		$(this).css('cursor', 'pointer')
		// 滑出时，先删除当前滑出的，在增加当前图片对应的
		$('.img-smbtn span').mouseout(function() {
			$(this).removeClass('act');
			$('.img-smbtn span').eq($('.img-item img.act').index()).addClass('act');
		})
	})
	
	// 当点击园标的时候：图片换，图标只有点击的亮
	$('.img-smbtn span').click(function() {
		$('.img-item img').removeClass('act');
		$('.img-smbtn span').removeClass('act');
		$('.img-item img').eq($(this).index()).addClass('act');
		$(this).addClass('act');
	})
	
	// 轮播图
	var timer;
	var count = 0;
	
	function setIn() {
		// 先清除一次定时器
		clearInterval(timer);
		timer = setInterval(function() {
			count = $('.img-item img.act').index();
			count++;
			if (count == 5) {
				count = 0;
			}
			//console.log(count)
	
			$('.img-item img').removeClass('act');
			$('.img-smbtn span').removeClass('act');
	
			$('.img-item img').eq(count).addClass('act');
			$('.img-smbtn span').eq(count).addClass('act');
			/* console.log(count); */
	
		}, 3000) /* 8s换一次图 471行 */
	}
	setIn();
	
	// 滑过图片时：轮播暂停  
	$('.img-item img').mouseover(function() {
		clearInterval(timer);
	})
	$('.img-item img').mouseout(function() {
		setIn();
	})
	
	// 点击左右按钮：图变，按钮变 
	
	$('.img-box .btn-rgt').mouseover(function() {
		clearInterval(timer);
		//console.log('右停')
	})
	$('.img-box .btn-rgt').click(function() {
	
		count = $('.img-item img.act').index() + 1;
		//console.log('点击时当前act图片 '+count)
	
		if (count >= 5) {
			count = 0;
		}
		$('.img-item img').removeClass('act');
		$('.img-smbtn span').removeClass('act');
	
		$('.img-item img').eq(count).addClass('act');
		$('.img-smbtn span').eq(count).addClass('act');
	
		count = $('.img-item img.act').index();
		//console.log('换图后当前act图片'+count)
	
	})
	$('.img-box .btn-rgt').mouseout(function() {
		setIn();
		//console.log('右开')
	})
	
	// 左按钮
	$('.img-box .btn-lft').mouseover(function() {
		clearInterval(timer);
		//console.log('左停')
	})
	$('.img-box .btn-lft').click(function() {
	
		count = $('.img-item img.act').index() - 1;
		//console.log('点击时当前act图片 '+count)
		if (count < 0) {
			count = 4;
		}
	
		$('.img-item img').removeClass('act');
		$('.img-smbtn span').removeClass('act');
	
		$('.img-item img').eq(count).addClass('act');
		$('.img-smbtn span').eq(count).addClass('act');
	
		count = $('.img-item img.act').index();
		//console.log('换图后当前act图片'+count)
	
	})
	$('.img-box .btn-lft').mouseout(function() {
		setIn();
		//console.log('左开')
	})
	
	// 点击登录提示错号关闭
	$('.close_icon').click(function(){
		$('.logging').css({
			'height':'0',
			'opacity':'0'
		});
	})
	
	// 点击选择颜色，点击选择型号 以及相应型号选项显示
	$('.col .clearfix li').click(function(){
		$('.col .clearfix li').removeClass();
		$(this).addClass('act');
	})
	
	$('.type .clearfix li').click(function(){
		$('.type .clearfix li').removeClass();
		$(this).addClass('act');
	})
	
	
	// 维修信息
	
	$('.service-box .accident ul li').click(function(){
		$('.service-box .accident ul li').removeClass('act');
		$(this).addClass('act');
	})
	$('.service-box .extend ul li').click(function(){
		$('.service-box .extend ul li').removeClass('act');
		$(this).addClass('act');
	})
	$('.service-box .space ul li').click(function(){
		$('.service-box .space ul li').removeClass('act');
		$(this).addClass('act');
	})
	
})