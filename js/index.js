
$(function() {

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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
					<a href="./details.html">
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
						<a href="./details.html">
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
						<a href="./details.html">
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
	
	// main-box隐藏区域   从父节点往里找
	$(' .main-box').mouseover(function(ev){
		var oLi = $(this).find('.more_list li')
		var oDiv = $(this).find('.child_items')
		oLi.mouseover(function(){
			$(this).addClass('more_active').siblings().removeClass('more_active');
			oDiv.css('display', 'none');
			oDiv.eq($(this).index()).css('display', 'block');
		})
	})
	     //  从子节点往父节点查找 坏处：改变父框套层需要改代码
	/* $(' .more_list li').mouseover(function() {
		$(' .more_list li').removeClass('more_active');
		$(this).addClass('more_active');
		var chlidren = $(this).parent().parent().parent().parent().find('.child_items');
		chlidren.css('display', 'none');
		chlidren.eq($(this).index()).css('display', 'block');
	})
	 */

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
	
	

	// 轮播图小按钮 划过按钮变颜色  点击换图
	// 当滑过图标的时候：图片不换，图标滑过的&当前显示的图片对应的亮
	$('.slide-box .btn-small span').mouseover(function() {
		$('.slide-box .btn-small span').removeClass('act');
		// 当前图片对应的亮
		$('.slide-box .btn-small span').eq($('.Show-img a.act').index()).addClass('act');
		$(this).addClass('act'); //滑过的亮
		$(this).css('cursor', 'pointer')
		// 滑出时，先删除当前滑出的，在增加当前图片对应的
		$('.slide-box .btn-small span').mouseout(function() {
			$(this).removeClass('act');
			$('.slide-box .btn-small span').eq($('.Show-img a.act').index()).addClass('act');
		})
	})

	// 当点击园标的时候：图片换，图标只有点击的亮
	$('.slide-box .btn-small span').click(function() {
		$('.Show-img a').removeClass('act');
		$('.slide-box .btn-small span').removeClass('act');
		$('.Show-img a').eq($(this).index()).addClass('act');
		$(this).addClass('act');
	})

	// 轮播图
	var timer;
	var count = 0;

	function setIn() {
		// 先清除一次定时器
		clearInterval(timer);
		timer = setInterval(function() {
			count = $('.Show-img a.act').index();
			count++;
			if (count == 5) {
				count = 0;
			}
			//console.log(count)

			$('.Show-img a').removeClass('act');
			$('.slide-box .btn-small span').removeClass('act');

			$('.Show-img a').eq(count).addClass('act');
			$('.slide-box .btn-small span').eq(count).addClass('act');
			/* console.log(count); */

		}, 8000) /* 8s换一次图 471行 */
	}
	setIn();

	// 滑过图片时：轮播暂停  
	$('.Show-img a').mouseover(function() {
		clearInterval(timer);
	})
	$('.Show-img a').mouseout(function() {
		setIn();
	})

	// 点击左右按钮：图变，按钮变 

	$('.slide-Show .rgt').mouseover(function() {
		clearInterval(timer);
		//console.log('右停')
	})
	$('.slide-Show .rgt').click(function() {

		count = $('.Show-img .act').index() + 1;
		//console.log('点击时当前act图片 '+count)

		if (count >= 5) {
			count = 0;
		}
		$('.Show-img a').removeClass('act');
		$('.slide-box .btn-small span').removeClass('act');

		$('.Show-img a').eq(count).addClass('act');
		$('.slide-box .btn-small span').eq(count).addClass('act');

		count = $('.Show-img .act').index();
		//console.log('换图后当前act图片'+count)

	})
	$('.slide-Show .rgt').mouseout(function() {
		setIn();
		//console.log('右开')
	})

	// 左按钮
	$('.slide-Show .lft').mouseover(function() {
		clearInterval(timer);
		//console.log('左停')
	})
	$('.slide-Show .lft').click(function() {

		count = $('.Show-img .act').index() - 1;
		//console.log('点击时当前act图片 '+count)
		if (count < 0) {
			count = 4;
		}

		$('.Show-img a').removeClass('act');
		$('.slide-box .btn-small span').removeClass('act');

		$('.Show-img a').eq(count).addClass('act');
		$('.slide-box .btn-small span').eq(count).addClass('act');

		count = $('.Show-img .act').index();
		//console.log('换图后当前act图片'+count)

	})
	$('.slide-Show .lft').mouseout(function() {
		setIn();
		//console.log('左开')
	})

	// 轮播区域列表 最外层div = slide-list
	// 一级 外层ul=list-stair  标题层li=stair-item  a  span/icon
	// 二级 与一级a同级 div   ul  li  a/span
	var Div = $('.slide-box .slide-list')[0];
	//console.log(Div)
	var mUl, mLi, mA, mSpan, mIcon;   // 一级
	var subDiv, subUl, subLi, subA, subImg, subSpan;   // 二级
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
		mA.href =  './list.html';

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
			subA.href = './details.html';
			
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
	
	// 小米闪购倒计时
	var timer = setInterval(function(){
		var downTime = new Date(2020,11,14,17,00,00); //都是标准时间 月份从0开始
		var nowTime = new Date();
		var differ = downTime - nowTime;
		
		if( differ >=0){
			var hour = doubleTime(Math.floor(differ/1000/3600));
			var min = doubleTime(Math.floor((differ - hour*3600*1000)/1000/60)) ;
			var sec = doubleTime(Math.floor((differ - hour*3600*1000 - min*60*1000)/1000));
			
			$('.iflash-count .desc').html('距离结束还有');
			$('.countdown .hour').html(hour);
			$('.countdown .min').html(min);
			$('.countdown .sec').html(sec);
			
			if( hour == 00 && min == 00 && sec == 00){
				clearInterval(timer);
				$('.iflash-count .desc').html('本场已结束');
			}
		}
		
	},1000);
	
	
	
	//小米闪购轮播
	var i = $('.iflash-btn .rgt input').attr('title','0'); // 计数用，便于传参
	var j = $('.iflash-btn .lft input').attr('title','0');
	// 初始设置左按钮为禁用状态
		$('.iflash-btn .lft input').css({
			'color':'#e0e0e0'
		})
		$('.iflash-btn .lft input').attr('disabled','disabled')
		$('.iflash-btn .lft input').css({
			'cursor':'default'
		})
	// 右按钮点击事件
	$('.iflash-btn .rgt input').click(function(){
		i = $('.iflash-btn .rgt input').attr('title');
		if(i<=3){
			i++;
			// 当按钮点击次数为3时，限制移动距离，并把右按钮禁用
			if(i==3){
				$('.iflash-box').animate({right:2234});
				$('.iflash-btn .rgt input').attr('title',i);
				$('.iflash-btn .lft input').attr('title',i);
				$('.iflash-btn .rgt input').css({
					'color':'#e0e0e0'
				})
				$('.iflash-btn .rgt input').attr('disabled','disabled')
				$('.iflash-btn .rgt input').css({
					'cursor':'default'
				})
			}else{
				$('.iflash-box').animate({right:992*i});
				$('.iflash-btn .rgt input').attr('title',i);
				$('.iflash-btn .lft input').attr('title',i);
			}
		}
		// 当点击次数大于0时，左按钮解除禁用
		if(i>0){
			$('.iflash-btn .lft input').css({
				'color':'#b0b0b0'
			})
			$('.iflash-btn .lft input').removeAttr('disabled')
			$('.iflash-btn .lft input').css({
				'cursor':'default'
			})
		}
	})
	// 左按钮点击事件
	$('.iflash-btn .lft input').click(function(){
		j = $('.iflash-btn .lft input').attr('title');
		// 当点击次数大于0时，左按钮解除禁用（左右都要写，不然只会在点击按钮时触发）
		if(j>0){
			$('.iflash-box').animate({right:992*(j-1)});
			$('.iflash-btn .rgt input').attr('title',j-1);
			$('.iflash-btn .lft input').attr('title',j-1);
			$('.iflash-btn .lft input').css({
				'color':'#b0b0b0'
			})
			$('.iflash-btn .lft input').removeAttr('disabled')
			$('.iflash-btn .lft input').css({
				'cursor':'default'
			})
		}
		// 在点击左按钮后，如果点击次数为1，禁用左按钮，传参问题
		if(j==1){
			$('.iflash-btn .lft input').css({
				'color':'#e0e0e0'
			})
			$('.iflash-btn .lft input').attr('disabled','disabled')
			$('.iflash-btn .lft input').css({
				'cursor':'default'
			})
		}
		// 点击次数小于4时，解禁右按钮
		if(j<4){
			$('.iflash-btn .rgt input').css({
				'color':'#b0b0b0'
			})
			$('.iflash-btn .rgt input').removeAttr('disabled')
			$('.iflash-btn .rgt input').css({
				'cursor':'pointer'
			})
		}
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
	
	// 添加链接
	$('.slide-Show .Show-img a').attr('href','./details.html')
	$('.slide .list .navi ul li a').attr('href','./oldForNew.html')
	$('.mainPush div a').attr('href','./total_list.html')
	$('.iflashBuy .iflash-child a').attr('href','./details.html')
	$('.cellphone .items a').attr('href','./details.html')
	$('.cellphone .tiltle .more a').attr('href','./total_list.html')
	$('.main-box .items a').attr('href','./details.html')
	
})
